$(document).ready(function(){
    tablacImagen = $("#tablacImagen").DataTable({
       "columnDefs":[{
        "targets": -1,
        "data":null,
        "defaultContent": "<div class='text-center'><div class='btn-group'><button class='btn btn-primary btnEditar'>Editar</button><button class='btn btn-danger btnBorrar'>Borrar</button></div></div>"  
       }],
        
    "language": {
            "lengthMenu": "Mostrar _MENU_ registros",
            "zeroRecords": "No se encontraron resultados",
            "info": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
            "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
            "infoFiltered": "(filtrado de un total de _MAX_ registros)",
            "sSearch": "Buscar:",
            "oPaginate": {
                "sFirst": "Primero",
                "sLast":"Último",
                "sNext":"Siguiente",
                "sPrevious": "Anterior"
             },
             "sProcessing":"Procesando...",
        }
    });




$("#btnNuevocImagen").click(function(){
    $("#tablacImagen").trigger("reset");//cada vez que presionemos el boton de nuevo se resetean los inputs
    $(".modal-header").css("background-color", "#1cc88a");//color de la cabezera
    $(".modal-header").css("color", "white");//color de titulo
    $(".modal-title").text("Nueva categoria"); //nombre del titulo   
    $("#modalCRUDcImagen").modal("show");
    codigo = null;
    opcion= 1;

});

$("#formcImagen").submit(function(e){//hacemos referencia al formulario que esta en el screen
    e.preventDefault();    //para que no se recargue la pagina
    nombre = $.trim($("#nombre").val());// trim es para obtener los inputs sin espacios
    $.ajax({
        url: "bd/crudCategoriaImagen.php",
        type: "POST", //Tipo de metodo para envio de datos al crud
        dataType: "json", //los datos enviados en formato JSON
        data: {nombre:nombre, codigo:codigo, opcion:opcion},
        success: function(data){  
            console.log(data);//para ver por consola que se recibe
            codigo = data[0].codigo;            
            nombre = data[0].nombre;
            if(opcion == 1){tablacImagen.row.add([codigo,nombre]).draw();}//con el row.add se añade el registro
            else{tablacImagen.row(fila).data([codigo,nombre]).draw();}            
        }        
    });
    $("#modalCRUDcImagen").modal("hide");    //una vez que se guarda se cierra el modal
    
});

});