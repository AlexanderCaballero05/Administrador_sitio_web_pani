<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cambiar contrasena</title>
    <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
        <link rel="stylesheet" href="estilos.css">
        <link rel="stylesheet" href="plugins/sweetalert2/sweetalert2.min.css">        
        
        <link rel="stylesheet" type="text/css" href="fuentes/iconic/css/material-design-iconic-font.min.css">
        
</head>
<body>
    <div class="container-login">
        <div class="card wrap-login">
            <form class="login-form validate-form" action="" id="cambiarContrasena" autocomplete="off">
            <span class="login-form-title">Cambiar contraseña</span>
                <div class="wrap-input100">
                    <input class="input100" type="text" minlength="5" maxlength="25" id="usuario" name="usuario" placeholder="usuario" autocomplete="off">
                    <span class="focus-efecto"></span>
                </div>

                <div class="wrap-input100">
                    <input type="password" class="input100" minlength="8" maxlength="20" id="Cnueva" name="Cnueva" placeholder="Nueva contraseña" autocomplete="off">
                    <span class="focus-efecto"></span>
                </div>

                <div class="wrap-input100">
                    <input type="password" class="input100" minlength="8" maxlength="20" id="Cconfirmar" name="Cconfirmar" placeholder="Confirmar contraseña" autocomplete="off">
                    <span class="focus-efecto"></span>
                </div>
                <div class="container-login-form-btn">
                    <div class="wrap-login-form-btn">
                        <div class="login-form-bgbtn"></div>
                        <button type="submit" name="submit" class="login-form-btn">CAMBIAR</button>
                    </div>
                </div>


            </form>
            <div class="container-login-form-btn">
                    <div class="wrap-login-form-btn">
                        <div class="login-form-bgbtnn"></div>
                        <a href="index.php" style="text-decoration: none;"><button type="" name="" class="login-form-btn">CANCELAR</button></a>
                    </div>
                </div>
            

        </div>
    </div>

    <script src="jquery/jquery-3.3.1.min.js"></script>    
     <script src="bootstrap/js/bootstrap.min.js"></script>    
     <script src="popper/popper.min.js"></script>    
        
     <script src="plugins/sweetalert2/sweetalert2.all.min.js"></script>    
     <script src="cambiarContrasena.js"></script>    
</body>
</html>