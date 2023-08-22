/**************************************************************************************************************************************************************
 *****************************************************CODIGO OBTENER LOS REGISTROS TIPOS DE CATEGORIA**********************************************************
 **************************************************************************************************************************************************************/


 /**************************************************************************************************************************************************************
 ************************************************************CODIGO PARA AGREGAR UN REGISTRO DE IMAGEN**********************************************************
 **************************************************************************************************************************************************************/

  function mostrarModalAgregarImagen()
  {
    $("#modal-agregar-imagen").modal("show");    
    getRegistrosTipoCateImagen();
    agregarDatosImagen();
  }


  /**
 * Funtion para obtener los registros de la tabla categoria Imagen
 */
function getCategoriasImagenes() 
{
    fetch(`../database/crud_tipoCateImagen.db.php?getCatTipoImagen=getCatTipoImagen`)
    .then((response) => response.json())
    .then((registros) => {
        showCategoriasImagen(registros);            
    })
/**
 * Funcion que muestra en formato HTML los registros de la tabla categoria Imagen en el campo del formulario y asigna el valor al seleccionar
 * @param {*registros retornados por la funcion anterior se toman como valor del parametro} registros 
 */
    function showCategoriasImagenes(registros)
    {
    document.getElementById("codigoCat").innerHTML = "";
    registros.forEach(registro => {
        //Se asigna el codigo de la categoria
        document.getElementById("codigoCat").innerHTML += `
                <option value="${registro.CODIGO}">${registro.NOMBRE}</option>
        `;
    });
        
    }
}

  

  function getRegistrosTipoCateImagen() 
  {
    fetch(`../database/crud_imagenesSite.db.php?getRegistrosTiCatImagen=getRegistrosTiCatImagen`)
    .then((response) => response.json())
    .then((registros) => {
        showRegistrosTipoCateImagen(registros);

    })

    function showRegistrosTipoCateImagen(registros)
     {
        document.getElementById("codigoTipoCat").innerHTML = "";
        //Iterar los registros
        registros.forEach(registro => {
            document.getElementById("codigoTipoCat").innerHTML += `
            <option value="${registro.CODIGO}">${registro.NOMBRE_TIPO}</option>
            `;
        });
     }
  }

  function agregarDatosImagen() 
  {

    funt
    let formulario = document.getElementById("form-agregar-imagen");
    formulario.addEventListener('submit', function(event) 
    {
      event.preventDefault();
      // console.log('diste un click');
       let datos = new FormData(formulario);


    })

    
  }