$('#cambiarContrasena').submit(function(e){
    e.preventDefault();
    var usuario = $.trim($("#usuario").val());
    var Cnueva = $.trim($("#Cnueva").val());
    var Cconfirmar = $.trim($("#Cconfirmar").val());
    var opcion = 3;

    if(usuario.length == "" || Cnueva.length =="" || Cconfirmar.length == ""  ){
        Swal.fire({
            type: 'warning',
            title: 'Debe llenar todos los campos'
        });
        return false
    }else if(Cnueva !== Cconfirmar){
        Swal.fire({
            type: 'error',
            title: 'Las contraseñas deben coincidir'
        });
        return false
    }else{
        $.ajax({
            url:"../login.php",
            type: "POST",
            datatype: "json",
            data: {usuario:usuario, Cnueva:Cnueva, Cconfirmar:Cconfirmar,opcion:opcion},
            success:function(data){
                if(data == "null"){
                    Swal.fire({
                        type: 'error',
                        title: 'Nombre de Usuario incorrecto',
                    });

                }else{
                    Swal.fire({
                        type: 'success',
                        title: 'Cambio exitoso',
                        confirmButtonColor:'#3085d6',
                        confirmButtonText:'Iniciar Sessión'
                    }).then((result) => {
                        if(result.value){
                            window.location.href = "../../index.php";
                        }
                    }) 
                    
                }

            }

        });
    }





});