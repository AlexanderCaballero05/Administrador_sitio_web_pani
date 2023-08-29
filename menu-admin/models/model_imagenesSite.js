/**************************************************************************************************************************************************************
 *****************************************************CODIGO OBTENER LOS REGISTROS TIPOS DE CATEGORIA**********************************************************
 **************************************************************************************************************************************************************/




 /**************************************************************************************************************************************************************
 ************************************************************CODIGO PARA AGREGAR UN REGISTRO DE IMAGEN**********************************************************
 **************************************************************************************************************************************************************/
 /**
  * Importar la clase de Registros
  */
 import Registros from "./GetRegistros.js";
 let registros = new Registros;

 /**
  * Mostrar modal para agregar un registro de una imagen
  */
  document.getElementById("agregue").onclick = function() {mostrarModalAgregarImagen()};
  function mostrarModalAgregarImagen()
  {
    $("#modal-agregar-imagen").modal("show");    
    registros.getCategoriasImagen(); //llamada de la funcion mediante herencia
    //llamada de la funcion mediante herencia
    agregarDatosImagen();

    let formulario = document.getElementById("form-agregar-imagen");
    formulario.addEventListener('submit', function(event) 
    {
      event.preventDefault();
       let datos = new FormData(formulario);
       
       let codigo_categoria = datos.get('codigoCat');
       registros.getRegistrosIdTipoCateImagen(codigo_categoria);
       
    })
  }

  

  /**
   * funcion que agrega datos de una Imagen
   */
  function agregarDatosImagen() 
  {
    let formulario = document.getElementById("form-agregar-imagen");
    formulario.addEventListener('submit', function(event) 
    {
      event.preventDefault();
       let datos = new FormData(formulario);
       
       let codigo_categoria = datos.get('codigoCat');
       registros.getRegistrosIdTipoCateImagen(codigo_categoria);
       
    })
  }