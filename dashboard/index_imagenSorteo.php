<?php require_once "vistas/parte_superior.php"?>

<!--INICIO del cont principal-->
<div class="container">
    <h1>Contenido principal Imagenes de sorteos</h1>

    <?php
   include_once 'bd/conexion.php';
   $objeto = new Conexion();
   $conexion = $objeto->Conectar();

   $consulta = "SELECT s.codigo, i.NOMBRE, i.CODIGO as tipo, s.numero_sorteo, s.imagen, s.estado FROM tbl_imagen_sorteo s, tbl_tipo_imagen i where i.CODIGO = s.TIPO_SORTEO";
   $resultado = $conexion->prepare($consulta);
   $resultado->execute();
   $data=$resultado->fetchAll(PDO::FETCH_ASSOC);

  
  ?> 

    <div class="conteiner mb-5">
      <div class="row">
        <div class="col-lg-12">
          <button  data-toggle="modal"  href="#btnNuevoImagenSorteo" type='submit' style="color:white;"class="btn btn-success mb-3"><span> <i class="nav-icon fa fa-plus-square mx-1"></i></span>Agregar</button>
        </div>
      </div>
    </div>

    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="table-responsive">
                    <table id="tablaImagenSorteo" class="table table-striped table-bordered table-condensed" style="width:100%">
                        <thead class="text-center">
                            <tr>
                                <th>Id</th>
                                <th>Tipo sorteo</th>
                                <th>Numero sorteo</th>
                                <th>Estado</th>
                                <th>Imagen</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php
                                foreach($data as $datos){ 
                                    $codigo = $datos['codigo'];
                                    $codigo_tipo = $datos['tipo'];
                                    $nombre = $datos['NOMBRE'];
                                    $sorteo = $datos['numero_sorteo'];
                                    $estado = $datos['estado'];
                            ?>
                        <tr>
                                <td class="text-center"><?php echo $codigo; ?></td>
                                <td class="text-center"><?php echo $nombre; ?></td>
                                <td class="text-center"><?php echo $sorteo; ?></td>
                                <td class="text-center"><?php echo $estado; ?></td>
                                <td class="text-center"><a href="#editarImagen<?php echo $codigo; ?>" data-toggle="modal"><img style="width: 70px;" src="data:image/jpg;base64,<?php echo base64_encode($datos['imagen'])?>" alt=""></a></td>

                                <td>
                                    <div class="text-center">
                                        <div class="btn-group">
                                        <a href="#btnEditarImagenSorteo<?php echo $codigo; ?>" data-toggle="modal">
                                          <button type='button' style="color:white;" class="btn btn-primary">Editar</button>
                                        </a>

                                        <a href="#btnBorrarSorteo<?php echo $codigo; ?>" data-toggle="modal">
                                            <button type='button' style="color:white" class="btn btn-danger">Borrar</button>
                                        </a>
                                        </div>
                                    </div>
                                 </td>

                                <!--Editar la imagen del sorteo-->
                                 <div id="editarImagen<?php echo $codigo; ?>" class="modal fade" role="dialog">
                                     <div class="modal-dialog modal-md">
                                            <div class="modal-content">
                                                <div class="modal-header" style="background-color: blue">
                                                <h5 class="modal-title" style="color: white">Editar Imagen</h5>
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                                </div>
                                                <form action="bd/crudImagenSorteo.php" enctype="multipart/form-data"  method="POST">
                                                    <input type="text" value ="<?php echo $codigo; ?>" hidden name="codigo_sorteo">
                                                     <div class="modal-body">
                                                          <img style="width: 300px;" src="data:image/jpg;base64,<?php echo $imagen = base64_encode($datos['imagen'])?>" alt="">
                                                        <div class="form-group">
                                                          <label for="imagen" class="col-form-label">Imagen:</label>
                                                          <input value="<?php echo $imagen?>" type="file" class="form-control" name="imagen" required>
                                                        </div>
                                                    </div>
                                                    <div class="modal-footer">
                                                      <button type="button" class="btn btn-light" data-dismiss="modal">Cancelar</button>
                                                    <button type="submit" name="EditarImagen" class="btn btn-dark">Guardar</button>
                                                    </div>
                                                </form>
                                            </div>
                                     </div>           
                                 </div><!--fin de Editar la imagen del sorteo-->

                                      <!-------------------------------------------Modal para editar sorteo----------------------------------------------------->

                            <div id="btnEditarImagenSorteo<?php echo $codigo?>" class="modal fade" role="dialog">
                            <div class="modal-dialog modal-md">
                                    <div class="modal-content">
                                        <div class="modal-header" style="background-color: blue">
                                            <h5 class="modal-title" style="color: white">Editar Datos</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                    <form action="bd/crudImagenSorteo.php" enctype="multipart/form-data"  method="POST">    
                                    <input type="text" value ="<?php echo $codigo; ?>" hidden name="codigo_sorteo">

                                    <div class="modal-body">
                                            <div class="form-group">
                                            <label for="tipo_sorteo" class="col-form-label">Tipo Sorteo:</label>
                                            <select class="form-control" value="<?php echo $nombre ?>" name="tipoSorteo" required>
                                                <?php
                                                        $consulta="SELECT CODIGO, NOMBRE FROM tbl_tipo_imagen WHERE CODIGO IN (1,2);
                                                        
                                                        ";
                                                        $resultado = $conexion->query($consulta);
                                                        foreach($resultado as $datos_sorteo){

                                                ?>
                                                <option value="<?php echo $datos_sorteo['CODIGO'] ;?>"><?php echo $datos_sorteo['NOMBRE'] ;?></option>
                                                <?php
                                                    }
                                                ?>
                                            </select>
                                            </div>
                                            
                                        </div>
                                        <div class="modal-body">
                                            <div class="form-group">
                                            <label for="Nsorteo" class="col-form-label">Numero Sorteo:</label>
                                            <input type="text" value="<?php echo $sorteo ?>" class="form-control" name="Nsorteo" placeholder="Ejem: 1420" required>
                                            </div>
                                        </div>
                                        
                                       
                                        <div class="modal-body">
                                            <div class="form-group">
                                            <label for="estado" class="col-form-label">Estado:</label>
                                            <select value="<?php echo $estado ?>" name="estado" class="form-control" required>
                                                <option value="ACTIVO">ACTIVO</option>
                                                <option value="INACTIVO">INACTIVO</option>
                                            </select>
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-light" data-dismiss="modal">Cancelar</button>
                                            <button type="submit" name="EditarSorteo" class="btn btn-dark">Guardar</button>
                                        </div>
                                    </form>    
                                                    
                                    </div>
                                </div>
                            </div> 



                            <div id=btnBorrarSorteo<?php echo $codigo; ?> class="modal fade" role="dialog">
                            <div class="modal-dialog">
                              <div class="modal-content">
                                <div class="modal-header">
                                  <h5 class="modal-title" id="exampleModalLabel"></h5>
                                  <button type="button" class="close" data-dismiss="modal">&times;</button>
                                </div>
                                <form action="bd/crudImagenSorteo.php" method="POST">
                                  <div class="modal-body">
                                    <input type="text" value ="<?php echo $codigo; ?>" hidden class="form-control" name="codigo_sorteo" >
                                    <h4 class="text-center">¿Está seguro de eliminar el registro?</h4>
                                </div> <!--fin el card body -->
                                    <div class="modal-footer ">
                                      <button type="button" name="cerrar" class="btn btn-danger" data-dismiss="modal">Cancelar</button>
                                      <button type="submit"  name="EliminarSorteo"  class="btn btn-primary">Si, eliminar</button>      
                                    </div><!--FIN DEL DIV DE BOTONES DE GUARDAR -->
                               </form>
                               </div><!--fin del modal contener -->
                            </div><!--fin del modal dialog -->
                          </div><!--fin del modal de eliminar -->

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

 
   




        <!-------------------------------------------Modal para un alta de una imagen----------------------------------------------------->
        <div class="modal fade" id="btnNuevoImagenSorteo" role="dialog" aria-hidden="true">
<div class="modal-dialog modal-md">
        <div class="modal-content">
        <div class="modal-header" style="background-color: #1cc88a">
                <h5 class="modal-title" style="color: white">Agregar Imagen</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span>
                </button>
            </div>
        <form action="bd/crudImagenSorteo.php" enctype="multipart/form-data"  method="POST">    
        <div class="modal-body">
                <div class="form-group">
                <label for="tipo_sorteo" class="col-form-label">Tipo Sorteo:</label>
                <select class="form-control" name="tipoSorteo" required ="valor solicitado">
                    <?php
                            $consulta="SELECT CODIGO, NOMBRE FROM tbl_tipo_imagen WHERE CODIGO IN (1,2);";
                            $resultado = $conexion->query($consulta);
                            foreach($resultado as $datos_sorteo){

                    ?>
                    <option value="<?php echo $datos_sorteo['CODIGO'] ;?>"><?php echo $datos_sorteo['NOMBRE'] ;?></option>
                    <?php
                        }
                    ?>
                </select>
                </div>
                
            </div>
            <div class="modal-body">
                <div class="form-group">
                <label for="Nsorteo" class="col-form-label">Numero Sorteo:</label>
                <input type="text" class="form-control" name="Nsorteo" placeholder="Ejem: 1420" required ="valor solicitado">
                </div>
            </div>
            <div class="modal-body">
                <div class="form-group">
                <label for="imagen" class="col-form-label">Imagen:</label>
                    <input type="file" class="form-control" name="imagen" required title="valor solicitado">
                </div>
            </div>
            <div class="modal-body">
                <div class="form-group">
                <label for="estado" class="col-form-label">Estado:</label>
                    <select name="estado" class="form-control" required>
                        <option value="ACTIVO">ACTIVO</option>
                        <option value="INACTIVO">INACTIVO</option>
                    </select>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-light" data-dismiss="modal">Cancelar</button>
                <button type="submit" name="GuardarSorteo" class="btn btn-dark">Guardar</button>
            </div>
        </form>    
        </div>
    </div>
</div> 

</div>
<!--FIN del cont principal-->
<?php require_once "vistas/parte_inferior.php"?>

<script>
    $(document).ready(function(){
    tablaImagenSorteo = $("#tablaImagenSorteo").DataTable({

        
    "language": {
            "lengthMenu": "Mostrar _MENU_ registros",
            "zeroRecords": "No se encontraron resultados",
            "info": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
            "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
            "infoFiltered": "(filtrado de un total de _MAX_ registros)",
            "sSearch": "Buscar:",
            "oPaginate": {
                "sFirst": "Primero",
                "sLast":"Último",
                "sNext":"Siguiente",
                "sPrevious": "Anterior"
             },
             "sProcessing":"Procesando...",
        }

    });

});
</script>
