<?php require_once "parte_superior.php" ?>
<div class="container">
  <h1 class="mb-5 text-center">Contenido principal Datos Autoridad</h1>
    <!-- Boton de agregar -->
    <div class="conteiner mb-5">
      <div class="row">
        <div class="col-lg-12">
            <button class="btn btn-success" id="agregarRegistro" type="button"><span>Agregar</span><i class="fa fa-plus-square" aria-hidden="true"></i></button>
        </div>
      </div>
    </div>
</div>

<div class="container">
    <div class="row">
        <div class="col-lg-12">
            <div class="tabla-responsive">
                <table id="tablacImagen" class="table table-striped table-bordered table-condensed" style="width:100%">
                    <thead class="text-center">
                        <tr>
                            <th>Id</th>
                            <th>Profesión</th>
                            <th>Nombre</th>
                            <th>Codigo Imagen</th>
                            <th>Imagen perfil</th>
                            <th>Estado</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody id="registros-datos-autoridad">
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>

<!-- Modal para agregar datos -->
<div class='modal fade' id='modal-agregar-dato-autoridad' tabindex='-1' aria-labelledby='exampleModalLabel' aria-hidden='true'>
    <div class='modal-dialog modal-lg' role='document'>
        <div class='modal-content'>
            <div class='modal-header'>
                <h2 class='modal-title fs-5' id='exampleModalLabel'>Agregar Datos de Autoridad</h2>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button>
            </div>
            <div class='modal-body'>
                <form id="form-agregar-datos-autoridad">
                    <div class="row mb-5">
                        <div class="col-sm-6">
                            <div class="form-group">
                              <label for="profesion">Profesión</label>
                              <select class="form-control" name="selecProfesion" id="selecProfesion">
                                <option disabled selected>Seleccione Uno</option>
                                <option value="1">1</option>
                              </select>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="form-group">
                              <label for="Nombre">Nombre</label>
                              <input type="text" class="form-control" name="nombreProfesional" id="nombreProfesional" aria-describedby="helpId" placeholder="">
                            </div>
                        </div>
                    </div>
                    <div class="row mb-5">
                        <div class="col-sm-6">
                            <div class="form-group">
                                <label for="Foto">Fotografia</label>
                                <input type="file" name="fotoProfesional" id="fotoProfesional" class="form-control">
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="form-group">
                                <label for="">Estado</label>
                                <select class="custom-select" name="estadoProfesional" id="estadoProfesional">
                                    <option selected disabled>Selecccione Uno</option>
                                    <option value="Activo">Activo</option>
                                    <option value="Inactivo">Inactivo</option>
                                </select>
                            </div>

                        </div>
                    </div>
                    <div class="row mt-3 align-content-end">
                        <div class="col-sm-4">
                           <button type="submit" class="btn btn-primary">Guardar</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
   </div>
</div>


<script type="module" src="../controllers/controller_autoridad.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<?php require_once "parte_inferior.php"?>