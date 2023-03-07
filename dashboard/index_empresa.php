<?php require_once "vistas/parte_superior.php"?>

<!--INICIO del cont principal-->
<div class="container">
    <h1 class="text-center mb-4">Contenido Empresa</h1>
    
    
    
 <?php
include_once 'bd/conexion.php';
$objeto = new Conexion();
$conexion = $objeto->Conectar();

$consulta = "SELECT * FROM tbl_empresa;";
$resultado = $conexion->prepare($consulta);
$resultado->execute();
$data=$resultado->fetchAll(PDO::FETCH_ASSOC);


?>


<div class="container">
        <div class="row">
            <div class="col-lg-12">            
            <button id="BtnNuevoDato" type="button" class="btn btn-success" data-toggle="modal">Nuevo</button>    
            </div>    
        </div>    
    </div>    
    <br>  
<div class="container">
        <div class="row">
                <div class="col-lg-12">
                    <div class="table-responsive">        
                        <table id="tablaEmpresa" class="table table-striped table-bordered table-condensed" style="width:100%">
                        <thead class="text-center">
                            <tr>
                                <th>Id</th>
                                <th>Tipo dato</th>
                                <th>Contenido</th>                                
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php                            
                            foreach($data as $dat) {                                                        
                            ?>
                            <tr>
                                <td><?php echo $dat['CODIGO'] ?></td>
                                <td><?php echo $dat['CODIGO_TIPO_DATO'] ?></td>
                                <td><?php echo $dat['CONTENIDO'] ?></td>
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
<div class="modal fade" id="modalCRUDempresa" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel"></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span>
                </button>
            </div>
        <form id="formEmpresa">    
            <div class="modal-body">
                <div class="form-group mb-5">
                <label for="nombre" class="col-form-label">Tipo dato:</label>
                
                <select class="form-control" id="tipo">
                <?php
                    $consulta = "SELECT t.CODIGO tipo, t.NOMBRE as Ntipo FROM tbl_tipo_de_dato t ";
                    $resultado = $conexion->query($consulta);
                    
                    foreach($resultado as $datos){
                ?>
                    <option value="<?php echo $datos['tipo']; ?>"><?php echo $datos['Ntipo']; ?></option>
                    <?php
                       }
                    ?>
                </select>
                  
                </div>
                <div class="form-group">
                <label for="descripcion" class="col-form-label">Contenido:</label>
                <input type="text" class="form-control" id="contenido">
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
