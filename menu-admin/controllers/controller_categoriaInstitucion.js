/**************************************************************************************************************************************************************
 ************************************************************CODIGO PARA AGREGAR UN TIPO DE DATO**********************************************************
 **************************************************************************************************************************************************************
 */
/**
  * Importar la clase de Registros
  */
import Registros from "./GetRegistros.js";
let registros = new Registros;

registros.getRegistrosDatosCategiriaInstitucion();

 /**
 * Mostrar modal para agregar un registro de un dato de empresa
 */

document.getElementById("agregarRegistro").onclick = function () {//funcion onclick boton agregar
    mostrarModalAgregarDatoCategoriaInst()
}

function mostrarModalAgregarDatoCategoriaInst()
{
    $("#modal-agregar-dato-cate-institucion").modal("show");
    agregarDatosCategoriaInstitucion();
}

function agregarDatosCategoriaInstitucion()
{
    let formulario = document.getElementById("form-agregar-cate-institucion");
    

    formulario.addEventListener('submit', function(event){
        event.preventDefault();
        let datos = new FormData(formulario);

        let nombre = datos.get('nombreCate');
        let descripcionCate = datos.get('descripcionCate');

        if (nombre == "" || descripcionCate == "") 
        {
            swal.fire({
               icon: 'warning',
               title: 'Se requieren los campos',
               text: 'Complete la información dentro de los campos'
            });
            return null;
        } else {
            fetch(`../models/model_categoriaInstitucion.db.php?insert=insert&nombre=${nombre}&descripcion=${descripcionCate}`, {
                method: 'POST',
                body: JSON.stringify({nombre, descripcionCate}),
                headers: {
                    "content-Type": "application/json",
                },
            })
            .then((response) => response.json())
            .then((respuestaServer) => {
                if (respuestaServer.estado === "ingresado") 
                {
                    swal.fire({
                       icon: 'success',
                       title: 'Solicitud Exitosa',
                       text: 'El registro se inserto correctamente'
                    })
                    limpiarModalAgregar();
                } else if(respuestaServer.estado === "Noingresado") 
                {
                    swal.fire({
                       icon: 'error',
                       title: 'Solicitud fallida',
                       text: 'Error al ingresar el registro'
                    })
                    limpiarModalAgregar();
                }    
            })
        }

    })
}


function limpiarModalAgregar(){
//limpiar modal
let formulario = document.getElementById('form-agregar-cate-institucion');
formulario.reset();
//Cerrar modal
$('#modal-agregar-dato-cate-institucion').modal('hide')
registros.getRegistrosDatosCategiriaInstitucion();

}

