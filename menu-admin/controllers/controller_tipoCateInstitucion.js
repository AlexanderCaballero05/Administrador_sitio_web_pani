/**************************************************************************************************************************************************************
 ************************************************************CODIGO PARA AGREGAR UN TIPO DE DATO**********************************************************
 **************************************************************************************************************************************************************
 */
/**
  * Importar la clase de Registros
  */
import Registros from "./GetRegistros.js";
let registros = new Registros;

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