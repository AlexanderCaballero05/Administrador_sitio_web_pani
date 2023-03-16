$('#formLogin').submit(function(e){
   e.preventDefault();
   var usuario = $.trim($("#usuario").val());    
   var password =$.trim($("#password").val());    
   var opcion = 2;
    
   if(usuario.length == "" || password == ""){
      Swal.fire({
          type:'warning',
          title:'Debe ingresar un usuario y/o password',
      });
      return false; 
    }else{
        $.ajax({
           url:"bd/login.php",
           type:"POST",
           datatype: "json",
           data: {usuario:usuario, password:password, opcion:opcion}, 
           success:function(data){               
               if(data == "null"){
                   Swal.fire({
                       type:'error',
                       title:'Usuario y/o password incorrecta',
                   });
               }else{
                   Swal.fire({
                       type:'success',
                       title:'¡Conexión exitosa!',
                       confirmButtonColor:'#3085d6',
                       confirmButtonText:'Ingresar'
                   }).then((result) => {
                       if(result.value){
                           //window.location.href = "vistas/pag_inicio.php";
                           window.location.href = "dashboard/index.php";
                       }
                   })
                   
               }
           }    
        });
    }     
});



$('#formRegistrar').submit(function(e){
    e.preventDefault();
    var usuario = $.trim($("#usuario").val());    
    var password =$.trim($("#password").val());    
    var opcion = 1;
     
    if(usuario.length == "" || password == ""){
       Swal.fire({
           type:'warning',
           title:'Debe ingresar un usuario y/o password',
       });
       return false; 
     }else{
         $.ajax({
            url:"bd/login.php",
            type:"POST",
            datatype: "json",
            data: {usuario:usuario, password:password, opcion:opcion}, 
            success:function(data){               
                if(data == "null"){
                    Swal.fire({
                        type:'error',
                        title:'Usuario invalido'
                    });
                }else{
                    Swal.fire({
                        type:'success',
                        title:'Registro Correcto',
                        confirmButtonColor:'#3085d6',
                        confirmButtonText:'Iniciar Sessión'
                    }).then((result) => {
                        if(result.value){
                            //window.location.href = "vistas/pag_inicio.php";
                            window.location.href = "index.php";
                        }
                    })
                    
                }
            }    
         });
     }     
 });

