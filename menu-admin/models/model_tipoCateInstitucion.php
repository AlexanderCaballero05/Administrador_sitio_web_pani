<?php
$conect = mysqli_connect('localhost', 'APANI', '*Myaccountpani*', 'db_web_pani');

//establecer la configuracion de cabecera http adecuada
header('Content-Type: application/json');

// Leer la solicitud HTTP y determinar el tipo de operacion
$method = $_SERVER['REQUEST_METHOD'];

switch ($method) 
{
    case 'GET':

        break;
    case 'POST':
        if (isset($_GET['insert'])) 
        {
            $categoria = $_GET['idcategoria'];
            $nombreTipo = $_GET['nombreTipo'];
            $observaciones = $_GET['observaciones'];
            $estado = $_GET['estado'];

            $query_insert = mysqli_query($conect, "INSERT INTO tbl_tipo_categoria_institucion (CODIGO_CATEGORIA, NOMBRE_TIPO, DESCRIPCION, ESTADO)
                                                                                             VALUES ('$categoria', '$nombreTipo', '$observaciones', '$estado')");
            $response = array(
                'estado' => "ingresado"
            );
            die(json_encode($response));

            break;
        } else {
            $response = array(
                'estado' => "Noingresado"
            );
            die(json_encode($response));
        }
        ;
        break;
    default:
        ;
        break;
}