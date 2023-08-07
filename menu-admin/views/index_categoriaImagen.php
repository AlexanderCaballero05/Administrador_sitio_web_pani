<?php require_once "parte_superior.php"?>

<!--INICIO del cont principal-->
<div class="container">
    <h1>Contenido principal Categoria de Imagen</h1>
    <div class="conteiner mb-5">
      <div class="row">
        <div class="col-lg-12">
            <button class="btn btn-success" onclick="mostrarModal()"><span>Agregar </span><i class="fa fa-plus-square" aria-hidden="true"></i></button>
        </div>
      </div>
    </div>

<!-- Modal para agregar un registro -->
<div class="modal fade" id="modal-agregar-categoria-imagen" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h2 class="modal-title fs-5" id="exampleModalLabel">Agregar billetes</h2>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">x</button>
            </div>
            <div class="modal-body">
                    <form id="form-agregar-categoria">
                        <!-- <input type="text">                </input> -->
                        <div class="row">
                            <div class="col-sm-4">
                                <label for="">Nombre</label>
                                <input type="text" name="" id="nombreCat" class="form-control">
                            </div>
                            <div class="col-sm-4">
                                <label for="">Tipo Extensión</label>
                                    <select name="" id="extCat" class="form-control">
                                        <option selected disabled>Seleccione</option>
                                        <option value="JPG">JPG</option>
                                        <option value="PNG">PNG</option>
                                    </select>
                            </div>
                            <div class="col-sm-4">
                                <label for="">Estado</label>
                                <select name="" id="estadoCat" class="form-control">
                                    <option selected disabled>Seleccione</option>
                                    <option value="Activo">Activo</option>
                                    <option value="Inactivo">Inactivo</option>
                                </select>
                            </div>
                            <div class="col-sm-4">
                                <button class="btn btn-primary" type="submit">Guardar</button>
                            </div>
                        </div>
                    </form>
                    <div class="mt-3" id="respuesta">

                    </div>
            </div>
        </div>
    </div>
</div>

    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="table-responsive">
                    <table id="tablacImagen" class="table table-striped table-bordered table-condensed" style="width:100%">
                        <thead class="text-center">
                            <tr>
                                <th>Id</th>
                                <th>Nombre</th>
                                <th>Tipo Ext</th>
                                <th>Estado</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody id="lista-categoria-Imagen">

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <!--Modal para CRUD-->
<div class="modal fade" id="modalCRUDcImagen" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel"></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span>
                </button>
            </div>
        <form id="formcImagen">    
            <div class="modal-body">
                <div class="form-group">
                <label for="nombre" class="col-form-label">Nombre:</label>
                <input type="text" class="form-control" id="nombre">
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

    <script src="../models/categoriaImagen.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

<?php require_once "parte_inferior.php"?>

