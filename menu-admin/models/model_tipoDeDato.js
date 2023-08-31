/**************************************************************************************************************************************************************
 *****************************************************CODIGO OBTENER LOS REGISTROS DEL MANTENIMIENTO IMAGEN**********************************************************
 **************************************************************************************************************************************************************/
/**
  * Importar la clase de Registros
  */
import Registros from "./GetRegistros.js";
let registros = new Registros;

/**
 * Herencia QUE OBTIENE LOS REGISTROS DEL MANTENIMIENTO TIPO DE DATOS
 */

registros.getRegistrosTipoDeDatos();


/**************************************************************************************************************************************************************
 ************************************************************CODIGO PARA AGREGAR UN TIPO DE DATO**********************************************************
 **************************************************************************************************************************************************************/

 /**
  * mostrar modal para agregar un registro de un tipo de dato
  */
document.getElementById("agregarRegistro").onclick = function()
{
    mostrarModalAgregarTipoDato()
};

function mostrarModalAgregarTipoDato()
{
    $("#modal-agregar-tipo-dato").modal("show");
    agregarTipoDato();
}

function agregarTipoDato()
{
    let formulario = document.getElementById("form-agregar-tipo-dato");
    formulario.addEventListener('submit', function(event) 
    {
        event.preventDefault();
        let datos = new FormData(formulario);

        let nombre = datos.get('nombreDato');
        let descripcion = datos.get('descripcionDato');

        if (nombre == "" || descripcion == "") 
        {
            swal.fire({
               icon: 'warning',
               title: 'Se requieren los campos',
               text: 'Complete la información requerida dentro de los campos'
            })
            return 0;
            
        } else {
            //ingresar los datos
            fetch(`../database/crud_tipoDeDato.php?insert=insert&nombre=${nombre}&descripcion=${descripcion}`,{
                method: 'POST',
                body: JSON.stringify({nombre, descripcion}),
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
let formulario = document.getElementById('form-agregar-tipo-dato');
formulario.reset();
//Cerrar modal
$('#modal-agregar-tipo-dato').modal('hide')
registros.getRegistrosTipoDeDatos();}
form-agregar-categoria