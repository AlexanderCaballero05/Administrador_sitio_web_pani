<?php require_once "parte_superior.php" ?>

<!-- INICIO DEL CONTENIDO PRINCIPAL -->
<div class="container">
<h1 class="mb-5 text-center">Contenido principal Tipo Categoria Imagen</h1>
    <!-- Boton de agregar -->
    <div class="conteiner mb-5">
      <div class="row">
        <div class="col-lg-12">
            <button class="btn btn-success" onclick="mostrarModalAgregar()"><span>Agregar </span><i class="fa fa-plus-square" aria-hidden="true"></i></button>
        </div>
      </div>
    </div>
</div>

<!-- Mostrar registros en tabla -->
<div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="table-responsive">
                    <table id="tablacImagen" class="table table-striped table-bordered table-condensed" style="width:100%">
                        <thead class="text-center">
                            <tr>
                                <th>Id</th>
                                <th>Nombre Categoria</th>
                                <th>Tipo Categoria</th>
                                <th>Observaciones</th>
                                <th>Estado</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody id="registros-tipo-categoria-Imagen"> 
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal para agregar un registro de tipo de categoria -->
<div class="modal fade" id="modal-agregar-tipo-categoria-imagen" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
            <h2 class="modal-title fs-5" id="exampleModalLabel">Agregar Tipo Categoria</h2>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            </div>
                <div class="modal-body">
                    <form action="" id="form-agregar-tipo-categoria">
                        <div class="row mb-3">
                            <div class="col-sm-12">
                                <label>Nombre Categoria</label>
                                <select id="codigoCat" name="codigoCat" class="form-control">
                                <option selected disabled>Seleccione</option>
                                </select>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-sm-6">
                                <label>Tipo Categoria</label>
                                <input type="text" id="noTipoCat" name="noTipoCat" class="form-control">
                            </div>
                            <div class="col-sm-6">
                                <label>Estado</label>
                                <select id="estadoTipoCat" name="estadoTipoCat" class="form-control">
                                    <option disabled selected>Seleccione</option>
                                    <option value="ACTIVO">ACTIVO</option>
                                    <option value="INACTIVO">INACTIVO</option>
                                </select>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-sm-12">
                                <label for="obserTipoCat">Observaciones</label>
                                <textarea class="form-control" name="obserTipoCat" id="obserTipoCat"></textarea>
                            </div>
                        </div>


                        <div class="row mt-5 align-content-end">
                            <div class="col-sm-4">
                                <button type="submit" class="btn btn-primary">Guardar</button>
                            </div>
                        </div>
                        
                    </form>
                </div>
        </div>
    </div>
</div>


<script>
        /**
         * function para convertir la entrada de letras en los inputs a mayusculas
         */
        function mayus(e){
            e.value = e.value.toUpperCase();
        }
    </script>

    <script src="../controllers/controller_tipoCategoriaImagen.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

<?php require_once "parte_inferior.php"?>