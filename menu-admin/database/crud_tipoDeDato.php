<?php
$conect = mysqli_connect('localhost', 'APANI', '*Myaccountpani*', 'db_web_pani');

//establecer la configuracion de cabecera http adecuada
header('Content-Type: application/json');

// Leer la solicitud HTTP y determinar el tipo de operacion
$method = $_SERVER['REQUEST_METHOD'];
//echo $method;

switch ($method) {
    case 'GET':
        # code...
        break;
    case 'POST':
        //codigo para ingresar un tipo de dato
        if (isset($_GET['insert'])) 
        {
            $nombre = $_GET['nombre'];
            $descripcion = $_GET['descripcion'];

            $query_insert = mysqli_query($conect, "INSERT INTO tbl_tipo_de_dato(NOMBRE, DESCRIPCION) VALUES ('$nombre', '$descripcion');");
            $response = array('estado' => "ingresado");
            die(json_encode($response));
        } else {
            $response = array('estado' => "Noingresado");
            die(json_encode($response));
        }
        

        break;
    default:
        # code...
        break;
}
