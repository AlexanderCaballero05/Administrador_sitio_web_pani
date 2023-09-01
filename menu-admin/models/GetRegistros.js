
/**
 * Clase que obtiene las consultas de los registros de las tablas de la base de datos
 */
export default class Registros 
{

    /**
     * FUNCION QUE OBTIENE LOS REGISTROS DEL MANTENIMIENTO categoria Imagen
     */
    getCategoriasImagen() 
    {
        fetch(`../database/crud_tipoCateImagen.db.php?getCatImagen=getCatImagen`)
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
     * Function que obtiene los registros de los tipo de categoria Imagen enviando como parametro un el codigo de una categoria
     */
    getRegistrosIdTipoCateImagen(codCategoria)
    {
        fetch(`../database/GetRegistros.db.php?getRegistroId=getRegistroId&codigo=${codCategoria}`)
        .then((response) => response.json())
        .then((registros) => {
            showRegistrosIdTipoCateImagen(registros);
        })

        function  showRegistrosIdTipoCateImagen(registros)
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


/**
 * FUNCION QUE OBTIENE LOS REGISTROS DEL MANTENIMIENTO IMAGENES
 */
getRegistrosImagenes()
{
    fetch(`../database/GetRegistros.db.php?registrosImagenes=registrosImagenes`)
    .then((response) => response.json())
    .then((registros) => {
        if (registros.estado === "sinRegistros") 
        {
            return 0;
        } else {
            showRegistrosImagenes(registros);
        }
    })

    function showRegistrosImagenes(registros) 
    {
        document.getElementById("registros-Imagenes-web").innerHTML = "";
        //iterar los registros
        registros.forEach(registro => {
        document.getElementById("registros-Imagenes-web").innerHTML += `
            <tr>
                <td class="text-center">${registro.CODIGO}</td>
                <td class="text-center">${registro.TIPO_CATEGORIA_IMAGEN}</td>
                <td class="text-center">${registro.DESCRIPCION}</td>
                <td class="text-center">${registro.IMAGEN}</td>
                <td class="text-center">${registro.OBSERVACIONES}</td>
                <td class="text-center">${registro.ESTADO}</td>
                <td class="text-center">${registro.CODIGO}        </td>
            </tr>

        `;
        });
        
    }

    
}

/**
 * FUNCION QUE OBTIENE LOS REGISTROS DEL MANTENIMIENTO tipo de datos
 */


getRegistrosTipoDeDatos()
{
    fetch(`../database/GetRegistros.db.php?registrosTipoDatos=registrosTipoDatos`)
    .then((response) => response.json())
    .then((registros) => {
        if (registros.estado === "sinRegistros") 
        {
            return 0;
        } else {
            showRegistrosTipoDeDatos(registros);
        }
    })

    function showRegistrosTipoDeDatos(registros) 
    {

       document.getElementById("registros-tipo-dato").innerHTML = "";
        registros.forEach(registro => {
            document.getElementById("registros-tipo-dato").innerHTML += `
                <tr>
                    <td class="text-center">${registro.CODIGO}</td>
                    <td class="text-center">${registro.NOMBRE}</td>
                    <td class="text-center">${registro.DESCRIPCION}</td>
                    <td class="text-center">${registro.CODIGO}</td>
                </tr>
            `
        });
    }

   
}
/**
 * Function que obtiene los registros de los tipo de datos para un select
 */

getRegistrosTipoDeDatosForSelect()
{
    fetch(`../database/GetRegistros.db.php?registrosTipoDatos=registrosTipoDatos`)
    .then((response) => response.json())
    .then((registros) => {
        if (registros.estado === "sinRegistros") 
        {
            return 0;
        } else {
             showRegistrosTipoDeDatosSelect(registros);
        }
  

    })
    function showRegistrosTipoDeDatosSelect(registros) 
    {

       document.getElementById("tipoDato").innerHTML = "";
        registros.forEach(registro => {
            document.getElementById("tipoDato").innerHTML += `
            <option value="${registro.CODIGO}">${registro.NOMBRE}</option>
            `
        });
    }
}



/**
 * FUNCION QUE OBTIENE LOS REGISTROS DEL MANTENIMIENTO tipo de datos
 */


getRegistrosDatosEmpresa()
{
    fetch(`../database/GetRegistros.db.php?registrosDatosEmpresa=registrosDatosEmpresa`)
    .then((response) => response.json())
    .then((registros) => {
        if (registros.estado === "sinRegistros") 
        {
            return 0;
        } else {
            showRegistrosDatosEmpresa(registros);
        }
    })

    function showRegistrosDatosEmpresa(registros)
    {

       document.getElementById("registros-dato-empresa").innerHTML = "";
        registros.forEach(registro => {
            document.getElementById("registros-dato-empresa").innerHTML += `
                <tr>
                    <td class="text-center">${registro.CODIGO}</td>
                    <td class="text-center">${registro.NOMBRE}</td>
                    <td class="text-center">${registro.CONTENIDO}</td>
                    <td class="text-center">${registro.CODIGO}</td>
                </tr>
            `
        });
    }
}


getRegistrosDatosProfesion()
{
    fetch(`../database/GetRegistros.db.php?registrosDatosProfesion=registrosDatosProfesion`)
    .then((response) => response.json())
    .then((registros) => {
        if (registros.estado === "sinRegistros") 
        {
            return 0;
        } else {
            showRegistrosDatosProfesion(registros);
        }
    })

    function showRegistrosDatosProfesion(registros)
    {

       document.getElementById("registros-dato-profesion").innerHTML = "";
        registros.forEach(registro => {
            document.getElementById("registros-dato-profesion").innerHTML += `
                <tr>
                    <td class="text-center">${registro.CODIGO}</td>
                    <td class="text-center">${registro.NOMBRE}</td>
                    <td class="text-center">${registro.DESCRIPCION}</td>
                    <td class="text-center">${registro.ESTADO}</td>
                </tr>
            `
        });
    }
}



}//final de la clase




    /**
     * Funtion que obtiene todos los registros de la tabla categoria Tipo Categoria Imagen
     */
//     getRegistrosTipoCateImagen() 
//     {
//         fetch(`../database/crud_imagenesSite.db.php?getRegistrosTiCatImagen=getRegistrosTiCatImagen`)
//         .then((response) => response.json())
//         .then((registros) => {
//             showRegistrosTipoCateImagen(registros);

//         })

//         function showRegistrosTipoCateImagen(registros)
//         {
//             document.getElementById("codigoTipoCat").innerHTML = "";
//             //Iterar los registros
//             registros.forEach(registro => {
//                 document.getElementById("codigoTipoCat").innerHTML += `
//                 <option value="${registro.CODIGO}">${registro.NOMBRE_TIPO}</option>
//                 `;
//             });
//         }
//     }

// }
