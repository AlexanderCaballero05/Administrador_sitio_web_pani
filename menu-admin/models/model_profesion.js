/**************************************************************************************************************************************************************
 ************************************************************CODIGO PARA AGREGAR UN DATO PROFESION**********************************************************
 ***************************************************************************************************************************************************************/
/**
  * Importar la clase de Registros
  */
import Registros from "./GetRegistros.js";
let registros = new Registros;

registros.getRegistrosDatosProfesion();

/**
* Mostrar modal para agregar un registro de una profesion   
*/

document.getElementById("agregarRegistro").onclick = function () {//funcion onclick boton agregar
    mostrarModalAgregarDatoProfesion();
}

function mostrarModalAgregarDatoProfesion(){
    $("#modal-agregar-dato-profesion").modal("show");
    agregarDatosProfesion();
    
}

function agregarDatosProfesion() 
{
    let formulario = document.getElementById("form-agregar-dato-profesion");
    formulario.addEventListener('submit', function(event) 
    {
        event.preventDefault();
        let  datos = new FormData(formulario);

        let nombre = datos.get('nombreprofe');
        let descripcion = datos.get('descripcionprofe');
        let estado = datos.get('estadoprofe');
        
        if (nombre == "" || descripcion == "" || estado == "") 
        {
            swal.fire({
               icon: 'warning',
               title: 'Se requieren los campos',
               text: 'Complete la información dentro de los campos'
            })
            
        } else {
            //ingresar los datos
            fetch(`../database/crud_profesion.php?insert=insert&nombre=${nombre}&descripcion=${descripcion}&estado=${estado}`,{
                method: 'POST',
                body: JSON.stringify({nombre,descripcion,estado}),
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