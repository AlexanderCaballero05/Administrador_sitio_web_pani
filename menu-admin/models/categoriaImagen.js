/*
********************************Codigo para mostrar los registros****************************
*/

/**
 * funcion para obtener la lista de registros desde la database
 */

obtenerRegistrosCategoriaImagen();

function obtenerRegistrosCategoriaImagen(){
    fetch(`../database/crudCategoriaImagen.db.php`)
    .then((response) => response.json())
    .then((registros) => {

        mostrarRegistrosCategoriaImagen(registros);
    }) 

}

function mostrarRegistrosCategoriaImagen(registros)
{
    //limpiar la tabla
    document.getElementById("lista-categoria-Imagen").innerHTML ="";
    //desplegar los registros en la tabla
    registros.forEach((registro) => {
        document.getElementById("lista-categoria-Imagen").innerHTML += `
        <tr>
            <td class="text-center">${registro.CODIGO}</td>
            <td class="text-center">${registro.NOMBRE}</td>
            <td class="text-center">${registro.TIPO_EXT}</td>
            <td class="text-center">${registro.ESTADO}</td>
            <td>
            <button class="btn btn-primary" onclick="MostrarModalEditar(${registro.CODIGO})"> <span>Editar</span><i class="fa fa-check-square" aria-hidden="true"></i></button>            <butto
            <button class="btn btn-danger" onclick="MostrarModalEditar(${registro.CODIGO})"> <span>Borrar</span><i class="fa fa-check-square" aria-hidden="true"></i></button>
            </td>
         </tr>
         
         `;

         });
 }

 /**************************************************************************************************************************************************************************
  ************************************************ BLOQUE DE CODIGO PARA EDITAR UNA CATEGORIA*******************************************************************************
  **************************************************************************************************************************************************************************/
 /**
  * Funcion que muestra el modal con el formulario para editar los datos de un registro
  * @param {*se recibe el codigo del registro a editar} CODIGO 
  */
  function MostrarModalEditar(CODIGO) 
 {
    $("#modal-editar-categoria-imagen").modal("show");
    // document.getElementById("editarCodcategoria").value = CODIGO;
    fetch(`../database/crudCategoriaImagen.db.php?editarModal=editarModal&CODIGO=${CODIGO}`)
    .then((response) => response.json())
    .then((respuestaServer) => {
        document.getElementById("editarCodCategoria").value = respuestaServer[0].CODIGO;
        document.getElementById("editarNocategoria").value = respuestaServer[0].NOMBRE;
        document.getElementById("editarEstado").value = respuestaServer[0].ESTADO;
        document.getElementById("editarTipoExt").value = respuestaServer[0].TIPO_EXT;
    })



 }
/**
 * Codigo para validar la entrada de datos al formulario de editar categoria imagen
 */

 $("body").on("submit", "#form-editar-categoria", function(event) 
 {
    event.preventDefault();
    if($("#form-editar-categoria"))
    {
        let NombreValido = document.getElementById("respuestaEditar");
        let CodCategoriaEditar = document.getElementById("editarCodCategoria").value;
        let NombreCategoria = document.getElementById("editarNocategoria").value;
        let TipoExt = document.getElementById("editarTipoExt").value
        let EstadoEditar = document.getElementById("editarEstado").value 
        
        if (NombreCategoria == "" || TipoExt == "" || EstadoEditar == "") 
        {
            Swal.fire({
                icon: "error",
                title: "Debe ingresar todos los datos",
                text: "Ingrese los datos solitados"
            })
            
        }else if(NombreCategoria.length < 5 || NombreCategoria.length > 20){
            NombreValido.innerHTML = `
            <div class="alert alert-danger" role="alert">
                Ingresa un nombre valido
            </div>
            `
           return 0;
        }else{
            //Llamada a la function
            NombreValido.innerHTML = "";
            //Si se pasan las validaciones se llama la funcion para realizar la edición de datos
            editarDatos(CodCategoriaEditar, NombreCategoria, TipoExt, EstadoEditar);
       }
    }
 });

 /**
  * 
  * @param {*Se recibe el codigo de registro a editar} CodCategoriaEditar 
  * @param {*Se recibe el nombre de la categoria a editar} NombreCategoria 
  * @param {*Se recibe el tipo de extencion de la categoria de la imagen} TipoExt 
  * @param {*Se recibe el estado de la categoria} EstadoEditar 
  * @returns Mensaje de confirmacion que se realizo una solicitud exitosa o fallida
  */
 function editarDatos(CodCategoriaEditar, NombreCategoria, TipoExt, EstadoEditar) 
 {
    fetch(`../database/crudCategoriaImagen.db.php?Editardatos=Editardatos&cod=${CodCategoriaEditar}&nombre=${NombreCategoria}&tiExtencion=${TipoExt}&estado${EstadoEditar}`, {
        method: "POST",
        body: JSON.stringify({CodCategoriaEditar, NombreCategoria, TipoExt, EstadoEditar}),
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((response) => response.json())
        .then((respuestaServer) => {
            if(respuestaServer.estado === "editato")
            {
                swal.fire({
                    icon: "success",
                    title: "Solicitud exitosa",
                    text: "La edición se ha realizado correctamente"

                })
            }else if(respuestaServer.estado === "Noeditado"){
                swal.fire({
                    icon: "Error",
                    title: "Solicitud fallida",
                    text: "Ha ocurrido un error inersperado al realizar la edición",

                })

            }

        })

    
    
 }
 
 /*
  *************************************************Codigo para agregar un registro**************************************** 
  */
/**
 * Function para obtener los estados
 */
//   function obtenerEstados()
//      {
//         fetch(`../database/crudCategoriaImagen.db.php?obtenerEstados=obtenerEstados`)
//     .then((response) => response.json())
//     .then((registrosEstado) => {
//         mostrarEstados(registrosEstado);
//     }) 
    
// }

// function mostrarEstados(registrosEstado) 
// {
//    registrosEstado.forEach((registroEstado) =>{
//        document.getElementById("estadoCat").innerHTML +=`
//                     <option value="${registroEstado.ESTADO}">${registroEstado.ESTADO}</option>
//        `
//     });
// }
/**
 * Funtion que abre el modal para agregar una categoria
 */

  function mostrarModal()
  {
    $("#modal-agregar-categoria-imagen").modal("show");
    //obtenerEstados();
  }

/**
 * funcion para validar la entrada de los datos del formulario de agregar un registro, esto previamente de enviar la solicitud al servidor
 */
  $("body").on("submit", "#form-agregar-categoria", function(event){
    event.preventDefault();
    if($("#form-agregar-categoria"))
    {
        let respuesta = document.getElementById("respuesta");
        let nombre_categoria = document.getElementById("nombreCat").value;
        let TIPO_EXT = document.getElementById("extCat").value;
        let estado = document.getElementById("estadoCat").value;

        if (TIPO_EXT == "seleccione" ||  estado == "Seleccione") 
        {
            Swal.fire({
                icon: "error",
                title: "Debe ingresar todos los datos",
                text: "Ingrese los datos solitados"
            })
            
        } else if(nombre_categoria.length < 5 || nombre_categoria.length > 20 )
        {
            respuesta.innerHTML = `
            <div class="alert alert-danger" role="alert">
                Ingresa un nombre valido
            </div>
            `
           return 0;
        }else{
            //Llamada a la function
            respuesta.innerHTML = "";
            agregarDatos(nombre_categoria, TIPO_EXT, estado);

        }
    }
  });


/**
 * Funcion que recibe las varibles enviadas por el usuario para enviarlas al servidor y poder realizar el insert a la tabla
 * @param {*Nombre de la categoria de la imagen} nombre_categoria 
 * @param {*Tipo de extencion} TIPO_EXT 
 * @param {*} estado 
 */
  function agregarDatos(nombre_categoria, TIPO_EXT, estado) 
  {
    // alert(nombre_categoria);
    fetch(`../database/crudCategoriaImagen.db.php?noCategoria=${nombre_categoria}&tiExtencion=${TIPO_EXT}&estado${estado}`, {
        method: "POST",
        body: JSON.stringify({nombre_categoria, TIPO_EXT, estado}),
        headers: {
            "Content-Type": "application/json",
        },   
    })
    .then((response) => response.json())
    .then((respuestaServer) => {
        if (respuestaServer.estado === "Ingresado") 
        {
            Swal.fire({
                icon: "success",
                title: "Solicitud exitosa",
                Text: "Categoria Ingresada correctamente"
            });

            limpiarModalAgregar();
        } else if(respuestaServer.estado === "noIngresado") {
            Swal.fire({
                icon: "error",
                title: "Ha ocurrido un error al intentar Ingresar la categoria"
            });
            limpiarModalAgregar();
        }else if(respuestaServer.estado === "existente"){
            swal.fire({
                icon: "error",
                title: "!Error, Datos existentes!",
                text: "Estos datos ya existen en la base de datos"
            });       
        }
    })
  }
/**
 * Funcion que limpia el modal al momento de realizar una solicitud al servidor
 */
  function limpiarModalAgregar() 
  {
     //limpiar el formulario
     let formulario = document.getElementById("form-agregar-categoria");
     formulario.reset();
     //cerrar el modal
      $("#modal-agregar-categoria-imagen").modal("hide");
      obtenerRegistrosCategoriaImagen();
  }
