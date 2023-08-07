<?php
include_once 'conexion.php';
$objeto = new Conexion();
$conexion = $objeto->Conectar();
// Recepción de los datos enviados mediante POST desde el JS 

$nombre = (isset($_POST['nombre'])) ? $_POST['nombre'] : '';
$descripcion = (isset($_POST['descripcion'])) ? $_POST['descripcion'] : '';
$opcion = (isset($_POST['opcion'])) ? $_POST['opcion'] : '';
$codigo = (isset($_POST['codigo'])) ? $_POST['codigo'] : '';

switch($opcion){
    case 1: //alta
        $consulta = "INSERT INTO tbl_tipo_de_dato (nombre, descripcion) VALUES('$nombre', '$descripcion') ";	
        		
        $resultado = $conexion->prepare($consulta);
        $resultado->execute(); 

            //consulta para realizar un orden por codigo y el LIMIT el ultimo que se cargo
        $consulta = "SELECT codigo, nombre, descripcion FROM tbl_tipo_de_dato ORDER BY codigo DESC LIMIT 1";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();

        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
        break;
    case 2: //modificación
        $consulta = "UPDATE tbl_tipo_de_dato SET nombre='$nombre', descripcion='$descripcion' WHERE codigo='$codigo' ";		
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();        
        
        $consulta = "SELECT codigo, nombre, descripcion FROM tbl_tipo_de_dato WHERE codigo='$codigo' ";       
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
        break;        
    case 3://baja
        $consulta = "DELETE FROM tbl_tipo_de_dato WHERE codigo='$codigo' ";		
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();                           
        break;         
}

print json_encode($data, JSON_UNESCAPED_UNICODE); //enviar el array final en formato json a JS
$conexion = NULL;
