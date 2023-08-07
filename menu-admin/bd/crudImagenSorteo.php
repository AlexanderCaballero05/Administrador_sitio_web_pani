<?php
include_once 'conexion.php';
$objeto = new Conexion();
$conexion = $objeto->Conectar();



  if(isset($_POST['GuardarSorteo'])){//-------codigo para un alta de sorteo--------//
    
      $nombre = $_POST["tipoSorteo"];
        if ($_POST["Nsorteo"]) {
          $descripcion = $_POST["Nsorteo"];
        } else if($_POST['nombreCarrucel']) {
          $descripcion = $_POST['nombreCarrucel'];
        }
           
      $imagen = addslashes(file_get_contents($_FILES['imagen']['tmp_name']));
      $estado = $_POST["estado"];
      $codigo = (isset($_POST["codigo"]));

      $consulta = "INSERT INTO tbl_imagen_sorteo (tipo_sorteo, numero_sorteo, imagen, estado) VALUES('$nombre', '$descripcion', '$imagen','$estado') ";	
      $resultado = $conexion->query($consulta);

        if($resultado){
          header('location: ../index_imagenSorteo.php');

        }else{
            echo "No se insertaron los datos";
        }

      }elseif(isset($_POST['EditarSorteo'])){//-------codigo para modificar el sorteo--------//
        $nombre = $_POST["tipoSorteo"];
        $descripcion = $_POST["Nsorteo"];
        $estado = $_POST["estado"];
        $codigo = $_POST["codigo_sorteo"];
        $consulta_editar = "UPDATE tbl_imagen_sorteo SET tipo_sorteo = '$nombre', numero_sorteo = '$descripcion', estado = '$estado' WHERE codigo = '$codigo';";
        
        $result= $conexion->query($consulta_editar);
             if($result > 0){
              header('location: ../index_imagenSorteo.php');

             }else{
              echo "<script> alert('error en la modificacion') </script>";
              header('location: ../index_imagenSorteo.php');

             }
                   

              }elseif(isset($_POST['EditarImagen'])){//-------codigo para modificar imagen del sorteo--------//
               $codigo = $_POST["codigo_sorteo"];
               $imagen = addslashes(file_get_contents($_FILES['imagen']['tmp_name']));
               $consulta ="UPDATE tbl_imagen_sorteo SET imagen ='$imagen' WHERE codigo = '$codigo';";
               $resultado = $conexion->query($consulta);

               if($resultado>0){
                  header('location: ../index_imagenSorteo.php');
               }else{
                echo "<script> alert('error en la modificacion') </script>";
                header('location: ../index_imagenSorteo.php');
               }


              }elseif(isset($_POST['EliminarSorteo'])){
                 $codigo = $_POST["codigo_sorteo"];
                  $consulta_eliminar ="DELETE FROM tbl_imagen_sorteo WHERE codigo = '$codigo'";
                  $resultado = $conexion->query($consulta_eliminar);

                  if($resultado>0){
                    header('location: ../index_imagenSorteo.php');
                 }else{
                  echo "<script> alert('error en la modificacion') </script>";
                  header('location: ../index_imagenSorteo.php');
                 }
               
              }else{
                echo "<script> alert('error en la modificacion') </script>";
                header('location: ../index_imagenSorteo.php');
              }

?>