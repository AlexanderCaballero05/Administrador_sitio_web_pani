<?php require_once "parte_superior.php" ?>
<div class="container">
  <h1 class="mb-5 text-center">Contenido principal Datos de Empresa</h1>
    <!-- Boton de agregar -->
    <div class="conteiner mb-5">
      <div class="row">
        <div class="col-lg-12">
            <button class="btn btn-success" id="agregarRegistro" type="button"><span>Agregar</span><i class="fa fa-plus-square" aria-hidden="true"></i></button>
        </div>
      </div>
    </div>
</div>






<!-- Modal para agregar un registro de un dato de empresa -->
<div class="modal fade" id="modal-agregar-dato-empresa" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
               <h2 class="modal-title fs-5" id="exampleModalLabel">Agregar Dato de Empresa</h2>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            </div>
            <div class="modal-body">
                <form action="" id="form-agregar-dato-empresa">           
                    <div class="row mb-5">
                        <div class="col-sm-12">
                            <label for="">Tipo de Dato</label>
                            <select name="tipoDato" id="tipoDato" class="form-control">
                                <option selected disabled>Seleccione</option>
                            </select>
                        </div>
                    </div>   
                    <div class="row mb-5">
                        <div class="col-sm-12">
                            <label for="">Contenido</label>
                            <textarea name="descripcionDato" id="descripcionDato" class="form-control"></textarea>
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

<script type="module" src="../models/model_datosEmpresa.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<?php require_once "parte_inferior.php"?>