<?php
include_once 'conexion.php';
$objeto = new Conexion();
$conexion = $objeto->Conectar();
// Recepción de los datos enviados mediante POST desde el JS   

$nombre = (isset($_POST['codigo_tipo_dato'])) ? $_POST['codigo_tipo_dato'] : '';
$descripcion = (isset($_POST['contenido'])) ? $_POST['contenido'] : '';
$opcion = (isset($_POST['opcion'])) ? $_POST['opcion'] : '';
$codigo = (isset($_POST['codigo'])) ? $_POST['codigo'] : '';

switch($opcion){
    case 1: //alta
        $consulta = "INSERT INTO tbl_empresa (codigo_tipo_dato, contenido) VALUES('$nombre', '$descripcion') ";	
        		
        $resultado = $conexion->prepare($consulta);
        $resultado->execute(); 

            //consulta para realizar un orden por codigo y el LIMIT el ultimo que se cargo
        $consulta = "SELECT codigo, codigo_tipo_dato, contenido FROM tbl_empresa ORDER BY codigo DESC LIMIT 1";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
        break;

    case 2:
       $consulta = "UPDATE tbl_empresa SET codigo_tipo_dato='$nombre', contenido='$descripcion' WHERE codigo='$codigo'";
       $resultado = $conexion->prepare($consulta);
       $resultado->execute();


       $consulta = "SELECT codigo, codigo_tipo_dato, contenido FROM tbl_empresa ORDER BY codigo='$codigo'  DESC LIMIT 1";
       $resultado = $conexion->prepare($consulta);
       $resultado->execute();
       $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
        break;
}

print json_encode($data, JSON_UNESCAPED_UNICODE); //enviar el array final en formato json a JS
$conexion = NULL;

?>