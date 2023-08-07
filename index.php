<!doctype html>
<html>
    <head>
        <link rel="shortcut icon" href="#" />
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <title>Login Web pani</title>

        <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">
        <link rel="stylesheet" href="login/estilos.css">
        <link rel="stylesheet" href="plugins/sweetalert2/sweetalert2.min.css">        
        <link rel="stylesheet" type="text/css" href="assets/fuentes/iconic/css/material-design-iconic-font.min.css">    
    </head>
    
    <body>
     
      <div class="container-login">
      <div class="card wrap-login">
                <div class="card-header" style="color:#fff; background: #eceff1; margin-top: 0">
               <ul class="nav nav-tabs card-header-tabs" style="margin-bottom: 20%; margin-top: 0">
                <li class="nav-item">
                <a class=" nav-link active" style="color:#000;" href="#">Iniciar Sesión</a>
                </li>
                <li class="nav-item">
                <a class=" nav-link" style="color:#000;" href="login/views/registrar.php">Registrarse</a>
                </li>
            </ul>
        <div>
            <form class="login-form validate-form" id="formLogin" action="" method="post">
                <span class="login-form-title">Iniciar Sesión</span>
                
                <div class="wrap-input100" data-validate = "Usuario incorrecto">
                    <input class="input100" type="text" maxlength="30" id="usuario" name="usuario" placeholder="Usuario" autocomplete="off">
                    <span class="focus-efecto"></span>
                </div>
                
                <div class="wrap-input100" data-validate="Password incorrecto">
                    <input class="input100" type="password" maxlength="30" id="password" name="password" placeholder="Password" autocomplete="off">
                    <span class="focus-efecto"></span>
                </div>
                
                <div class="container-login-form-btn">
                    <div class="wrap-login-form-btn">
                        <div class="login-form-bgbtn"></div>
                        <button type="submit" name="submit" class="login-form-btn">CONECTAR</button>
                    </div>
                </div>
            </form>
        </div>

        
        </div>  
      </div>


     
      </div>   
        
        
     <script src="jquery/jquery-3.3.1.min.js"></script>    
     <script src="bootstrap/js/bootstrap.min.js"></script>    
     <script src="popper/popper.min.js"></script>    
        
     <script src="plugins/sweetalert2/sweetalert2.all.min.js"></script>    
     <script src="login/model/codigo.js"></script>    
    </body>
</html>