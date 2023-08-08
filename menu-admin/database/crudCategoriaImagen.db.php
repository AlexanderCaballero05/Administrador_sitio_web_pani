
<?php
$conect = mysqli_connect('localhost', 'APANI', '*Myaccountpani*', 'db_web_pani');

//establecer la configuracion de cabecera http adecuada
header('Content-Type: application/json');

// Leer la solicitud HTTP y determinar el tipo de operacion
$method = $_SERVER['REQUEST_METHOD'];
//echo $method;

switch($method){
    case 'GET':
    //CODIGO PARA EDITAR

        if(isset($_GET['editarModal']))
        {
            $codigo = $_GET['CODIGO'];
            $query_select = mysqli_query($conect, "SELECT * FROM tbl_categoria_imagen WHERE CODIGO = $codigo;");
            if (mysqli_num_rows($query_select) <= 0) 
            {
                $data = array('NoExitenRegistros' => true);
                die(json_encode($data));
                break;
            } else {
                $data_registro = array();
                while ($data = $query_select->fetch_assoc()) 
                {
                    $data_registro[] = $data;
                }
                echo json_encode($data_registro);
                break;
            }
        }

        
        $query_obtener_registros = $conect->query("SELECT * FROM tbl_categoria_imagen");
        if(mysqli_num_rows($query_obtener_registros) <= 0)
        {
            $data = array('NoExitenRegistros' => true);
            die(json_encode($data));
            break;
        }else{
            //crear un array para almacenar los registros seleccionados 
            $registros = array();
            //iterar los registros y almacenar
            foreach ($query_obtener_registros as $data) 
            {
                $registros[] = $data;
                }
    
                echo json_encode($registros);
                break;
            }

            // if(isset($_GET['obtenerEstados'])){
            //     $query_estados = mysqli_query($conect, "SELECT DISTINCT(ESTADO) FROM tbl_categoria_imagen;");
            //     $registrosEstados = array();
            //     //iterar los registros y almacenar
            //     foreach ($query_estados as $data) 
            //     {
            //        $registrosEstados[] = $data;
            //     }
            //     echo json_encode($registrosEstados);
    
            // }
         
            break;
            

            case 'POST':
            //Insertar un registro
            
            if (isset($_GET['noCategoria'])) {
                    /**
                     * leer el cuerpo de la solicitud que viene en formato json
                     */
                    $inputs = json_decode(file_get_contents('php://input'), true);
                    $noCategoria = $inputs['nombre_categoria'];
                    $tiExtension = $inputs['TIPO_EXT'];
                    $estado = $inputs['estado'];

                    //validar que un dato ya existe
                    $query_select = mysqli_query($conect, "SELECT * FROM tbl_categoria_imagen WHERE NOMBRE = '$noCategoria';");

                    if (mysqli_num_rows($query_select) > 0) 
                    {
                        $response = array('estado' => "existente");
                        die(json_encode($response));
                        break;
                    } else {
                        $sql_insert =mysqli_query($conect, "INSERT INTO tbl_categoria_imagen (NOMBRE, TIPO_EXT, ESTADO) VALUES ('$noCategoria', '$tiExtension', '$estado')");
                    
                            $response = array('estado' => "Ingresado");
                            die(json_encode($response));
                      break;
                    }
                    
                

                    
                }else{
                    $response = array('estado' => "noIngresado");
                    die(json_encode($response)); 
            break;

                }            


}


