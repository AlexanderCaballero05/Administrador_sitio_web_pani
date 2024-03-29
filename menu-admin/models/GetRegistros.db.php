<?php
$conect = mysqli_connect('localhost', 'APANI', '*Myaccountpani*', 'db_web_pani');

//establecer la configuracion de cabecera http adecuada
header('Content-Type: application/json');

// Leer la solicitud HTTP y determinar el tipo de operacion
$method = $_SERVER['REQUEST_METHOD'];
//echo $method;

switch ($method) {
    case 'GET':
        /**
         * Obtiene registros por Id tabla tipo categoria imagen realizando un JOIN
         */
        if (isset($_GET['getRegistroId'])) 
        {
            $codigo_categoria = $_GET['codigo'];
            $query_select = mysqli_query($conect, "SELECT catTipo.CODIGO, catTipo.NOMBRE_TIPO FROM tbl_tipo_categoria_imagen catTipo, tbl_categoria_imagen cat WHERE cat.CODIGO = catTipo.CODIGO_CATEGORIA AND cat.CODIGO = $codigo_categoria;");
            $registros = array();

            while ($fila = mysqli_fetch_array($query_select)) 
            {
                $registros [$fila['CODIGO']] = $fila['NOMBRE_TIPO'];
            }
            echo json_encode($registros);
            break;

        } 

        /**
         * Obtiene los registros de la tabla imagenes
         */

         if(isset($_GET['registrosImagenes']))
         {
            $query_select = mysqli_query($conect, "SELECT * FROM tbl_imagen;");
            if (mysqli_num_rows($query_select) <= 0) 
            {
                $response = array('estado' => "sinRegistros");
                die(json_encode($response));
            } else {
                $registros = array();
                foreach ($query_select as $value) 
                {
                    $registros [] = $value;
                }
                echo json_encode($registros);
            }
         }

         /**
          * Obtiene los registros de la tabla tipo de datos
          */

          if (isset($_GET['registrosTipoDatos'])) {
            $query_select = mysqli_query($conect, "SELECT * FROM tbl_tipo_de_dato");
            if (mysqli_num_rows($query_select) <= 0) {
                $response = array('estado' => "sinRegistros");
                die(json_encode($response));
            } else {
                $registros = array();
                foreach ($query_select as $value){
                    $registros [] = $value;
                }
                echo json_encode($registros);
            }
         }

          /**
          * Obtiene los registros de la tabla datos de empresa realizando un JOIN
          */

          if (isset($_GET['registrosDatosEmpresa'])) {
            $query_select = mysqli_query($conect, "SELECT * FROM tbl_tipo_de_dato ttda, tbl_empresa temp WHERE ttda.CODIGO = temp.CODIGO;");
            if (mysqli_num_rows($query_select) <= 0) {
                $response = array('estado' => "sinRegistros");
                die(json_encode($response));
            } else {
                $registros = array();
                foreach ($query_select as $value){
                    $registros [] = $value;
                }
                echo json_encode($registros);
            }
         }

         /**
          * Obtiene los registros de la tabla profesion
          */

          if (isset($_GET['registrosDatosProfesion'])) {
            $query_select = mysqli_query($conect, "SELECT * FROM tbl_profesion;");
            if (mysqli_num_rows($query_select) <= 0) {
                $response = array('estado' => "sinRegistros");
                die(json_encode($response));
            } else {
                $registros = array();
                foreach ($query_select as $value){
                    $registros [] = $value;
                }
                echo json_encode($registros);
            }
         }

         /**
          * Obtiene los registros de la tabla categoria Institucion
          */

          if (isset($_GET['registrosDatosCategoriaInstitucion'])) {
            $query_select = mysqli_query($conect, "SELECT * FROM tbl_categoria_institucion;");
            if (mysqli_num_rows($query_select) <= 0) {
                $response = array('estado' => "sinRegistros");
                die(json_encode($response));
            } else {
                $registros = array();
                foreach ($query_select as $value){
                    $registros [] = $value;
                }
                echo json_encode($registros);
            }
         }

         /**
          * Obtiene los registros de la tabla Tipo categoria Institucion
          */

          if (isset($_GET['registrosDatosTipoCategoriaInstitucion'])) {
            $query_select = mysqli_query($conect, "SELECT ttca.CODIGO, tca.NOMBRE_CATEGORIA, ttca.NOMBRE_TIPO, ttca.DESCRIPCION, ttca.ESTADO FROM tbl_categoria_institucion tca, tbl_tipo_categoria_institucion ttca Where tca.CODIGO = ttca.CODIGO_CATEGORIA;");
            if (mysqli_num_rows($query_select) <= 0) {
                $response = array('estado' => "sinRegistros");
                die(json_encode($response));
            } else {
                $registros = array();
                foreach ($query_select as $value){
                    $registros [] = $value;
                }
                echo json_encode($registros);
            }
         }



        ;
        break;
    case 'POST':
        ;
        break;
    default:
        ;
        break;
}