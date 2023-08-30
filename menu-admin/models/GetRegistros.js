
/**
 * Clase que obtiene las consultas de los registros de las tablas de la base de datos
 */
export default class Registros 
{
    /**
     * Funtion que obtiene todos los registros de la tabla categoria Imagen
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



}
