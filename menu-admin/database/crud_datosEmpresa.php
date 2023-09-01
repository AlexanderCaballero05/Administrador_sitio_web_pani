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
        //codigo para ingresar un dato de empres
        if (isset($_GET['insert'])) 
        {
            $tipo_dato = $_GET['tipoDato'];
            $contenido = $_GET['contenido'];
            //insert 
            $query_insert = mysqli_query($conect, "INSERT INTO tbl_empresa (CODIGO_TIPO_DATO, CONTENIDO) VALUES ('$tipo_dato','$contenido');");
            $response = array('estado' => "ingresado");
            die(json_encode($response));
        } else {
            $response = array('estado' => "Noingresado");
            die(json_encode($response));
        }
        
        break;
}