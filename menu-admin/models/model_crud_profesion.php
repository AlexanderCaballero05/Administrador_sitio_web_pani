<?php
$conect = mysqli_connect('localhost', 'APANI', '*Myaccountpani*', 'db_web_pani');

//establecer la configuracion de cabecera http adecuada
header('Content-Type: application/json');

// Leer la solicitud HTTP y determinar el tipo de operacion
$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        # code...
        break;
    case 'POST':
        //codigo para ingresar un dato de profesion
        if (isset($_GET['insert'])) 
        {
            $nombre = $_GET['nombre'];
            $descripcion = $_GET['descripcion'];
            $estado = $_GET['estado'];
            //insert 
            $query_insert = mysqli_query($conect, "INSERT INTO tbl_profesion (NOMBRE, DESCRIPCION, ESTADO) VALUES ('$nombre','$descripcion', '$estado');");
            $response = array('estado' => "ingresado");
            die(json_encode($response));
        } else {
            $response = array('estado' => "Noingresado");
            die(json_encode($response));
        }
        
        break;
}