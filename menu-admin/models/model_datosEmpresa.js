/**************************************************************************************************************************************************************
 ************************************************************CODIGO PARA AGREGAR UN TIPO DE DATO**********************************************************
 **************************************************************************************************************************************************************/
 /**
  * Importar la clase de Registros
  */
 import Registros from "./GetRegistros.js";
 let registros = new Registros;



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
    
}