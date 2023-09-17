/**************************************************************************************************************************************************************
 *****************************************************CODIGO OBTENER LOS REGISTROS DEL MANTENIMIENTO IMAGEN**********************************************************
 **************************************************************************************************************************************************************/
 /**
  * Importar la clase de Registros
  */
 import Registros from "./GetRegistros.js";
 let registros = new Registros;


 /**
 * Herencia QUE OBTIENE LOS REGISTROS DEL MANTENIMIENTO IMAGENES
 */
 registros.getRegistrosImagenes();

 /**************************************************************************************************************************************************************
 ************************************************************CODIGO PARA AGREGAR UN REGISTRO DE IMAGEN**********************************************************
 **************************************************************************************************************************************************************/


 /**
  * Mostrar modal para agregar un registro de una imagen
  */
  document.getElementById("agregue").onclick = function() 
  {
    mostrarModalAgregarImagen()
  };
  
  function mostrarModalAgregarImagen()
  {
    $("#modal-agregar-imagen").modal("show");    
    registros.getCategoriasImagen(); //llamada de la funcion mediante herencia
    //llamada de la funcion mediante herencia
    agregarDatosImagen();


    $(document).ready(function() {
        $(".selector-categoria select").change(function() {
        $(".selector-tipo select").empty();
        $.getJSON('../models/GetRegistros.db.php?getRegistroId=getRegistroId&codigo='+$(".selector-categoria select").val(),function(data){
            $.each(data, function(CODIGO,value){
          $(".selector-tipo select").append('<option value="'+CODIGO+'">'+value+'</option>');
            });
        });
          });
    });
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
      let codigo_tipo_categoria = datos.get('codigoTipoCat');
      let descripcion = datos.get('descripcionImagen');
      let imagenSitio = datos.get('imagenSitio');
      let observaciones = datos.get('observaciones');
      let estado = datos.get('estadoImagen');

      if(codigo_tipo_categoria == "" || descripcion == "" || imagenSitio == "" || estado == "")
      {
        swal.fire({
           icon: 'error',
           title: 'Se requieren los campos',
           text: 'Complete la informacion requerida dentro de los campos'
        })
        return 0;
      }else{
                //ingresar los datos
                fetch(`../models/model_imagenesSite.db.php?insert=insert&codCategoria=${codigo_tipo_categoria}&descripcion=${descripcion}&imagenSitio=${imagenSitio}&observaciones=${observaciones}&estado=${estado}`,{
                  method: "POST",
                  body: JSON.stringify({codigo_tipo_categoria, descripcion, imagenSitio, observaciones, estado}),
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
                    return 0;
                  }
        
                })
      }

    })
  }



  function limpiarModalAgregar(){
    //limpiar modal
    let formulario = document.getElementById('form-agregar-imagen');
    formulario.reset();
    //Cerrar modal
    $('#modal-agregar-imagen').modal('hide')
    registros.getRegistrosImagenes();
  }