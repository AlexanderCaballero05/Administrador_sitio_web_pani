<?php require_once "vistas/parte_superior.php"?>

<!--INICIO del cont principal-->
<div class="container">
    <h1>Contenido principal tipo de Imagen</h1>

  <?php
   include_once 'bd/conexion.php';
   $objeto = new Conexion();
   $conexion = $objeto->Conectar();

   $consulta = "SELECT codigo, nombre, tipo_extencion, estado FROM tbl_tipo_imagen;";
   $resultado = $conexion->prepare($consulta);
   $resultado->execute();
   $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
  ?> 

    <div class="conteiner mb-5">
      <div class="row">
        <div class="col-lg-12">
            <button id="btnNuevotImagen" class="btn btn-success" data-toggle="modal">Nuevo</button>
        </div>
      </div>
    </div>

    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="table-responsive">
                    <table id="tablatImagen" class="table table-striped table-bordered table-condensed" style="width:100%">
                        <thead class="text-center">
                            <tr>
                                <th>Id</th>
                                <th>Categoria Imagen</th>
                                <th>Tipo Extención</th>
                                <th>Estado</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php
                                foreach($data as $datos){ 
                            ?>
                            <tr>
                                <td class="text-center"><?php echo $datos['codigo']; ?></td>
                                <td class="text-center"><?php echo $datos['nombre']; ?></td>
                                <td class="text-center"><?php echo $datos['tipo_extencion']; ?></td>
                                <td class="text-center"><?php echo $datos['estado']; ?></td>
                                <td></td>

                            </tr>
                            <?php
                                }
                            ?>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <!--Modal para CRUD-->
<div class="modal fade" id="modalCRUDtImagen" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel"></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span>
                </button>
            </div>
        <form id="formtImagen">    
        <div class="modal-body">
                <div class="form-group">
                <label for="tipo" class="col-form-label">Nombre categoria:</label>
                <input type="text" class="form-control" id="tipo" placeholder="Ejem: SORTEO MAYOR">
                </div>
            </div>
            <div class="modal-body">
                <div class="form-group">
                <label for="extencion" class="col-form-label">Tipo extencion:</label>
                <input type="text" class="form-control" id="extencion" placeholder="Ejem: jpg">
                </div>
            </div>
            <div class="modal-body">
                <div class="form-group">
                <label for="estado" class="col-form-label">Estado:</label>
                <input type="text" class="form-control" id="estado">
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-light" data-dismiss="modal">Cancelar</button>
                <button type="submit" id="btnGuardar" class="btn btn-dark">Guardar</button>
            </div>
        </form>    
        </div>
    </div>
</div>  
    </div>
<!--FIN del cont principal-->
<?php require_once "vistas/parte_inferior.php"?>
