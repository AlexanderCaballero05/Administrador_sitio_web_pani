
/**************************************************************************************************************************************************************
 *****************************************************CODIGO OBTENER LOS REGISTROS TIPOS DE CATEGORIA**********************************************************
 **************************************************************************************************************************************************************/
 GetRegistrosTipoCategoria();
function GetRegistrosTipoCategoria() 
{
    fetch(`../models/model_tipoCateImagen.db.php?getTipoCatImagen=getTipoCatImagen`)
    .then((response) => response.json())
    .then((registros) => {
        showTiposCategoriasImagen(registros);            
    })
}
 
function showTiposCategoriasImagen(registros) 
{
    document.getElementById("registros-tipo-categoria-Imagen").innerHTML = "";
    //recorrer los registros y mostraslar en el html
    registros.forEach(registro => {
        document.getElementById("registros-tipo-categoria-Imagen").innerHTML +=`
            <tr>
                <td class="text-center">${registro.CodTipoCat}</td>
                <td class="text-center">${registro.NOMBRE}</td>
                <td class="text-center">${registro.NOMBRE_TIPO}</td>
                <td class="text-center">${registro.OBSERVACIONES}</td>
                <td class="text-center">${registro.ESTADO}</td>
                <td class="text-center">
                <button class="btn btn-primary" onclick="Mostrar(${registro.CodTipoCat})"> <span>Editar</span><i class="fa fa-check-square" aria-hidden="true"></i></button>
                <button class="btn btn-danger" onclick="Mostrar(${registro.CodTipoCat})"> <span>Borrar</span><i class="fa fa-check-square" aria-hidden="true"></i></button>
                </td>

            </tr>
        `;
    });
    
}

/**************************************************************************************************************************************************************
 ************************************************************CODIGO PARA AGREGAR UN TIPO DE CATEGORIA**********************************************************
 **************************************************************************************************************************************************************/
function mostrarModalAgregar()
{
    $("#modal-agregar-tipo-categoria-imagen").modal("show");    
    getCategoriasImagen();
    agregarDatos();
}

/**
 * Funtion para obtener los registros de la tabla categoria Imagen
 */
function getCategoriasImagen() 
{
    fetch(`../models/model_tipoCateImagen.db.php?getCatImagen=getCatImagen`)
    .then((response) => response.json())
    .then((registros) => {
        if (registros.estado === "SinRegistros") {
            return 0;
        } else {
            showCategoriasImagen(registros);            
            
        }

    })
/**
 * Funcion que muestra en formato HTML los registros de la tabla categoria Imagen en el campo del formulario y asigna el valor al seleccionar
 * @param {*registros retornados por la funcion anterior se toman como valor del parametro} registros 
 */
    function showCategoriasImagen(registros)
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
/**
 * Funcion que realizar el insert del formulario, previamente se valida la entrada de datos sean correctos
 */
function agregarDatos() 
{
    let formulario = document.getElementById("form-agregar-tipo-categoria");

    formulario.addEventListener('submit', function(event) 
    {
        event.preventDefault();
        // console.log('diste un click');
        let datos = new FormData(formulario);

        let CodCategoria = datos.get('codigoCat');
        let tipoCategoria = datos.get('noTipoCat');
        let estado = datos.get('estadoTipoCat');
        let observaciones = datos.get('obserTipoCat')

        if(tipoCategoria == "" || CodCategoria == "" || estado == "")
        {
            swal.fire({
                icon: "error",
                title: "Ingresa todos los datos"
            })
          return 0;
       }
       //enviar los datos al servidor y esperar una respuesta
       fetch(`../models/model_tipoCateImagen.db.php?insert=insert&codigo=${CodCategoria}&tipo=${tipoCategoria}&estado=${estado}&observaciones=${observaciones}`, {
        method: "POST",
        body: JSON.stringify({CodCategoria, tipoCategoria, estado, observaciones}),
        headers: {
            "content-Type": "application/json",
        },    
        })
        .then((response) => response.json())
        .then((respuestaServer) => {
            if (respuestaServer.estado === "ingresado") 
            {
                swal.fire({
                   icon: 'Success',
                   title: 'Solicitud Exitosa',
                   text: 'El registro se ha realizado correctamente'
                })
                limpiarModalAgregarTipo();
                GetRegistrosTipoCategoria();
                return 0;
            } else {
                swal.fire({
                   icon: 'error',
                   title: 'Solicitud Erronea',
                   text: 'Error! No se ha realizado el registro'
                })
                limpiarModalAgregarTipo();
                GetRegistrosTipoCategoria();
                return 0;
            }
       })
        
    })
    
}

function limpiarModalAgregarTipo()
{
        //limpiar modal
        let formulario = document.getElementById('form-agregar-tipo-categoria');
        formulario.reset();
        //Cerrar modal
        $('#modal-agregar-tipo-categoria-imagen').modal('hide');
}


/**************************************************************************************************************************************************************
 ************************************************************CODIGO PARA EDITAR UN TIPO DE CATEGORIA**********************************************************
 **************************************************************************************************************************************************************/
