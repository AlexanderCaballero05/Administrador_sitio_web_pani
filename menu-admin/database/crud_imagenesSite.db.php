<?php
$conect = mysqli_connect('localhost', 'APANI', '*Myaccountpani*', 'db_web_pani');

//establecer la configuracion de cabecera http adecuada
header('Content-Type: application/json');

// Leer la solicitud HTTP y determinar el tipo de operacion
$method = $_SERVER['REQUEST_METHOD'];
//echo $method;

switch ($method) {
    case 'GET':
        if (isset($_GET['getRegistrosTiCatImagen'])) 
        {
            $getRegistrosTiCatImagen = mysqli_query($conect, "SELECT * FROM tbl_tipo_categoria_imagen;");
            if (mysqli_num_rows($getRegistrosTiCatImagen) < 0)
            {
              $response = array('estado' => "SinRegistros");
              die(json_encode($response));
              break;
            }else{
               $registros = array();

               //iterar los registros y pasarlos a formato Json
               foreach ($getRegistrosTiCatImagen as $data) 
               {
                   $registros [] = $data;
               }
               echo json_encode($registros);
               break;
            }
            break;

            # code...
        } else {
            # code...
        }
        
        # code...
        break;
    
        case 'POST':
        # code...
        break;
}