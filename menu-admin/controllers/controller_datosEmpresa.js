/**************************************************************************************************************************************************************
 ************************************************************CODIGO PARA AGREGAR UN TIPO DE DATO**********************************************************
 **************************************************************************************************************************************************************/
 /**
  * Importar la clase de Registros
  */
 import Registros from "./GetRegistros.js";
 let registros = new Registros;

 registros.getRegistrosDatosEmpresa();


 /**
 * Mostrar modal para agregar un registro de un dato de empresa
 */

document.getElementById("agregarRegistro").onclick = function () {//funcion onclick boton agregar
    mostrarModalAgregarDatoEmpresa();
}

function mostrarModalAgregarDatoEmpresa()
{
    $("#modal-agregar-dato-empresa").modal("show");
    agregarDatosEmpresa();
    registros.getRegistrosTipoDeDatosForSelect();
}

function agregarDatosEmpresa() 
{
    let formulario = document.getElementById("form-agregar-dato-empresa");

    formulario.addEventListener('submit', function(event) 
    {
        event.preventDefault();
        let datos = new FormData(formulario);
        let tipo_dato = datos.get('tipoDato');
        let contenido = datos.get('descripcionDato');

        if (tipo_dato == "" || contenido == "") 
        {
            swal.fire({
               icon: 'warning',
               title: 'Se requieren los campos',
               text: 'Complete la información dentro de los campos'
            });
            return null;
            
        } else {
            //ingresar los datos
            fetch(`../models/model_datosEmpresa.php?insert=insert&tipoDato=${tipo_dato}&contenido=${contenido}`,{
                method: 'POST',
                body: JSON.stringify({tipo_dato, contenido}),
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
    });
}

function limpiarModalAgregar(){
//limpiar modal
let formulario = document.getElementById('form-agregar-dato-empresa');
formulario.reset();
//Cerrar modal
$('#0modal-agregar-dato-empresa').modal('hide')
registros.getRegistrosDatosEmpresa();
}
