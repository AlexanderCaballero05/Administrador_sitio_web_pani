/**************************************************************************************************************************************************************
 ************************************************************CODIGO PARA AGREGAR UN TIPO DE DATO**********************************************************
 **************************************************************************************************************************************************************
 */
/**
  * Importar la clase de Registros
  */
import Registros from "./GetRegistros.js";
let registros = new Registros;

registros.getRegistrosDatosTipoCategoriaInstitucion();

 /**
 * Mostrar modal para agregar un registro de un dato de empresa
 */

 document.getElementById("agregarRegistro").onclick = function () {//funcion onclick boton agregar
    mostrarModalAgregarDatoTipoCategoriaInstitucion();
}

function mostrarModalAgregarDatoTipoCategoriaInstitucion()
{
    $("#modal-agregar-dato-tipo-institucion").modal("show");
    getRegistrosDatosCategoriaInstitucionForSelect();
    AgregarDatoTipoCategoriaInstitucion();

}


/**
 * FUNCION QUE OBTIENE LOS REGISTROS DEL MANTENIMIENTO DATOS CATEGORIA INSTITUCION
 */

function getRegistrosDatosCategoriaInstitucionForSelect()
{
    
    fetch(`../models/GetRegistros.db.php?registrosDatosCategoriaInstitucion=registrosDatosCategoriaInstitucion`)
    .then((response) => response.json())
    .then((registros) => {
        if (registros.estado === "sinRegistros") 
        {
            return 0;
        } else {
            showRegistrosDatosCategoriaInstitucionForSelect(registros);
        }
    })

    function showRegistrosDatosCategoriaInstitucionForSelect(registros)
    {

       document.getElementById("cateInstitucion").innerHTML = "";
        registros.forEach(registro => {
            document.getElementById("cateInstitucion").innerHTML += `
            <option value="${registro.CODIGO}">${registro.NOMBRE_CATEGORIA}</option>
            `
        });

}

}

/**
 * Funcion que agrega un tipo de categoria Institución
 */

function AgregarDatoTipoCategoriaInstitucion() 
{

     //Validacion de entrada de datos y envio al servidor

     let formulario = document.getElementById("form-agregar-tipo-cate-institucion");
     formulario.addEventListener('submit', function (event) 
     {
        event.preventDefault();
        //captura de datos
        let datos = new FormData(formulario);
        let categoria = datos.get('cateInstitucion');
        let nombre = datos.get('NombreTipo');
        let Observaciones = datos.get('Observaciones');
        let estado = datos.get('estadoTipoCate');
        
        if (categoria == null || nombre == "" || estado == null) 
        {
            swal.fire({
               icon: 'warning',
               title: 'Se requieren los campos',
               text: 'Complete la información dentro de los campos'
            });
            
        } else {
            fetch(`../models/model_tipoCateInstitucion.php?insert=insert&idcategoria=${categoria}&nombreTipo=${nombre}&observaciones=${Observaciones}&estado=${estado}`,{
                method: "POST",
                body: JSON.stringify({categoria, nombre, Observaciones, estado}),
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
let formulario = document.getElementById('form-agregar-tipo-cate-institucion');
formulario.reset();
//Cerrar modal
$('#modal-agregar-dato-tipo-institucion').modal('hide')
registros.getRegistrosDatosTipoCategoriaInstitucion();

}