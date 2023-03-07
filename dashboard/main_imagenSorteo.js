


    $("#formImagenSorteo").submit(function(e){//hacemos referencia al formulario que esta en el screen
        e.preventDefault();    //para que no se recargue la pagina
        tipo = $.trim($("#tipoSorteo").val());// trim es para obtener los inputs sin espacios
        extencion = $.trim($("#Nsorteo").val());
        imagen = $("#imagen").files[0];
        estado = $.trim($("#estado").val());
        $.ajax({
            url: "bd/crudImagenSorteo.php",
            type: "POST", //Tipo de metodo para envio de datos al crud
            dataType: "json", //los datos enviados en formato JSON
            data: {tipo:tipo, extencion:extencion, imagen:imagen, estado:estado, codigo:codigo, opcion:opcion},
            success: function(data){  
                console.log(data);//para ver por consola que se recibe
                codigo = data[0].codigo;            
                tipo = data[0].tipo;
                extencion = data[0].extencion;
                imagen = data[0].imagen;
                estado = data[0].estado;
                if(opcion == 1){tablaImagenSorteo.row.add([codigo,tipo,extencion,imagen,estado]).draw();}//con el row.add se añade el registro
                else{tablaImagenSorteo.row(fila).data([codigo,tipo,extencion,imagen,estado]).draw();}            
            }        
        });
        $("#modalCRUDImagenSorteo").modal("hide");    //una vez que se guarda se cierra el modal
        
    });    
