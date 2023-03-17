<?php
session_start();

include_once 'conexion.php';
$objeto = new Conexion();
$conexion = $objeto->Conectar();

//recepción de datos enviados mediante POST desde ajax
$usuario = (isset($_POST['usuario'])) ? $_POST['usuario'] : '';
$password = (isset($_POST['password'])) ? $_POST['password'] : '';
$opcion = (isset($_POST['opcion'])) ? $_POST['opcion'] : '';

switch($opcion){
    case 1:
        $pass = md5($password);

        $consulta = "INSERT INTO usuarios (usuario, password) VALUES ('$usuario','$pass');";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
     
       $data = $resultado->fetchAll(PDO::FETCH_ASSOC);
        
        break;


    case 2:
        $pass = md5($password); //encripto la clave enviada por el usuario para compararla con la clava encriptada y almacenada en la BD

        $consulta = "SELECT * FROM usuarios WHERE usuario='$usuario' AND password='$pass' ";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        
        if($resultado->rowCount() >= 1){
            $data = $resultado->fetchAll(PDO::FETCH_ASSOC);
            $_SESSION["s_usuario"] = $usuario;
        }else{
            $_SESSION["s_usuario"] = null;
            $data=null;
        }
        break;
    case 3:
        $usuario = (isset($_POST['usuario'])) ? $_POST['usuario'] : "";
        $Cnueva = (isset($_POST['Cnueva'])) ? $_POST['Cnueva'] : "";

        $consulta = "SELECT usuario FROM usuarios WHERE usuario ='$usuario';";
        $resultado =$conexion->prepare($consulta);
        $resultado->execute();

        if($resultado->rowCount() >= 1){
            $consultaCambio = "UPDATE usuarios SET password = md5('$Cnueva') WHERE (usuario = '$usuario');";
            $resultadoCambio = $conexion->prepare($consultaCambio);
            $resultadoCambio->execute();
            $data = $ $resultadoCambio->fetchAll(PDO::FETCH_ASSOC);
        }else{
            $data=null;
        }

        break;


}

       /* $pass = md5($password); //encripto la clave enviada por el usuario para compararla con la clava encriptada y almacenada en la BD

        $consulta = "SELECT * FROM usuarios WHERE usuario='$usuario' AND password='$pass' ";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        
        
        
        
        if($resultado->rowCount() >= 1){
            $data = $resultado->fetchAll(PDO::FETCH_ASSOC);
            $_SESSION["s_usuario"] = $usuario;
        }else{
            $_SESSION["s_usuario"] = null;
            $data=null;
        }
        break;*/
 


        




print json_encode($data);
$conexion=null;

//usuarios de pruebaen la base de datos
//usuario:admin pass:12345
//usuario:demo pass:demo