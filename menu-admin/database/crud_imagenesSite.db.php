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
            if (isset($_GET['insert'])) 
            {
                $codigo_tipo = $_GET['codCategoria'];                
                $descripcion = $_GET['descripcion'];
                $imagen = $_GET['imagen'];
                $observaciones = $_GET['observaciones'];
                $estado= $_GET['estado'];

                if ($observaciones == "") 
                {
                    $observaciones = "NINGUNA";
                }

                $query_insert = mysqli_query($conect, "INSERT INTO tbl_imagen (TIPO_CATEGORIA_IMAGEN, DESCRIPCION, IMAGEN, OBSERVACIONES, ESTADO) VALUES ('$codigo_tipo','$descripcion','$imagen','$observaciones','$estado')");
                $response = array('estado' => "ingresado");
                die(json_encode($response));

            } else {
                $response = array('estado' => "Noingresado");
               die(json_encode($response));
            }

       
        break;
}