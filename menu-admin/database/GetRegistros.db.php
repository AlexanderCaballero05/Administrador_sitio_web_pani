<?php
$conect = mysqli_connect('localhost', 'APANI', '*Myaccountpani*', 'db_web_pani');

//establecer la configuracion de cabecera http adecuada
header('Content-Type: application/json');

// Leer la solicitud HTTP y determinar el tipo de operacion
$method = $_SERVER['REQUEST_METHOD'];
//echo $method;

switch ($method) {
    case 'GET':
        /**
         * Obtenere registros por Id tabla tipo categoria imagen
         */
        if (isset($_GET['getRegistroId'])) 
        {
            $codigo_categoria = $_GET['codigo'];
            $query_select = mysqli_query($conect, "SELECT catTipo.CODIGO, catTipo.NOMBRE_TIPO FROM tbl_tipo_categoria_imagen catTipo, tbl_categoria_imagen cat WHERE cat.CODIGO = catTipo.CODIGO_CATEGORIA AND cat.CODIGO = $codigo_categoria;");
            $registros = array();

            foreach ($query_select as $value) 
            {
                $registros [] = $value;
            }

            echo json_encode($registros);
            break;

        } else {
        
        }
        

        ;
        break;
    case 'POST':
        ;
        break;
    default:
        ;
        break;
}