<?php
include_once 'conexion.php';
$objeto = new Conexion();
$conexion = $objeto->Conectar();
// Recepción de los datos enviados mediante POST desde el JS   

$nombre = (isset($_POST['tipo'])) ? $_POST['tipo'] : '';
$descripcion = (isset($_POST['extencion'])) ? $_POST['extencion'] : '';
$estado = (isset($_POST['estado'])) ? $_POST['estado'] : '';
$opcion = (isset($_POST['opcion'])) ? $_POST['opcion'] : '';
$codigo = (isset($_POST['codigo'])) ? $_POST['codigo'] : '';

switch($opcion){
    case 1: //alta
        $consulta = "INSERT INTO tbl_tipo_imagen (nombre, tipo_extencion, estado) VALUES('$nombre', '$descripcion', '$estado') ";	
        		
        $resultado = $conexion->prepare($consulta);
        $resultado->execute(); 

            //consulta para realizar un orden por codigo y el LIMIT el ultimo que se cargo
        $consulta = "SELECT codigo, nombre, tipo_extencion, estado FROM tbl_tipo_imagen ORDER BY codigo DESC LIMIT 1";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
        
        break;
}

print json_encode($data, JSON_UNESCAPED_UNICODE); //enviar el array final en formato json a JS
$conexion = NULL;

?>