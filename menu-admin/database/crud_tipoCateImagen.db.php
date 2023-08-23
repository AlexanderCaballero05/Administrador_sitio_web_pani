<?php
$conect = mysqli_connect('localhost', 'APANI', '*Myaccountpani*', 'db_web_pani');

//establecer la configuracion de cabecera http adecuada
header('Content-Type: application/json');

// Leer la solicitud HTTP y determinar el tipo de operacion
$method = $_SERVER['REQUEST_METHOD'];
//echo $method;

switch ($method) {
    case 'GET':
        //codigo para obtener los registros de la tabla categoria Imagen y mostrarlos en un campo tipo select
        if (isset($_GET['getCatImagen'])) 
        {
            $query_select = mysqli_query($conect, "SELECT * FROM tbl_categoria_imagen;");
            if (mysqli_num_rows($query_select) <= 0)
             {
               $response = array('estado' => "SinRegistros");
               die(json_encode($response));
               break;
             }else{
                $registros = array();

                //iterar los registros y pasarlos a formato Json
                foreach ($query_select as $data) 
                {
                    $registros [] = $data;
                }
                echo json_encode($registros);
                break;
             }
             break;
        } else if(isset($_GET['getTipoCatImagen'])) {
           //Obtener los registros para mostrarlos en la interfaz            
            $query_get_registros = mysqli_query($conect, "SELECT catTipo.CODIGO as CodTipoCat,  catTipo.CODIGO_CATEGORIA, cat.CODIGO as CodCategoria, cat.NOMBRE, catTipo.NOMBRE_TIPO, catTipo.OBSERVACIONES, catTipo.ESTADO  FROM tbl_tipo_categoria_imagen catTipo, tbl_categoria_imagen cat WHERE cat.CODIGO = catTipo.CODIGO_CATEGORIA;");
            if (mysqli_num_rows($query_get_registros) < 0) 
            {
                $response = array('estado' => "sinRegistros");
                die(json_encode($response));
                break;
            } else {
                $registros = array();
                foreach ($query_get_registros as $data) 
                {
                    $registros []= $data; 
                }
                echo json_encode($registros);
                break;
            }
            
            $response = array('estado' => "ERROR");
               die(json_encode($response));
        }
        
        break;
    
    case 'POST':
        //CODIGO PARA REALIZAR UN INSERT DEL TIPO DE CATEGORIA
        if (isset($_GET['insert'])) 
        {
            $codigo_categoria = $_GET['codigo'];
            $tipo_categoria = $_GET['tipo'];
            $estado_categoria = $_GET['estado'];
            
            $query_insert = mysqli_query($conect, "INSERT INTO tbl_tipo_categoria_imagen (CODIGO_CATEGORIA, NOMBRE_TIPO, ESTADO) VALUES ('$codigo_categoria','$tipo_categoria','$estado_categoria')");

            $response = array('estado' => "ingresado");
               die(json_encode($response));
        } else {
            //CODIGO PARA REALIZAR UN UPDATE DEL TIPO DE CATEGORIA
            $response = array('estado' => "Noingresado");
               die(json_encode($response));
        }
        
        # code...
        break;
}