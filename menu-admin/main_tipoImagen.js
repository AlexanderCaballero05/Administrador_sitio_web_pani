$(document).ready(function(){
    tablatImagen = $("#tablatImagen").DataTable({
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

//modal para nuevo registro
$("#btnNuevotImagen").click(function(){
    $("#tablatImagen").trigger("reset");//cada vez que presionemos el boton de nuevo se resetean los inputs
    $(".modal-header").css("background-color", "#1cc88a");//color de la cabezera
    $(".modal-header").css("color", "white");//color de titulo
    $(".modal-title").text("Nuevo tipo imagen"); //nombre del titulo           
    $("#modalCRUDtImagen").modal("show"); //hacemos referencia del modal con el id que le agregamos y lo mostramos  
    codigo=null; //lo enviamos nulo ya que el id lo genera el auto incremental
    opcion = 1; //alta
});    

$("#formtImagen").submit(function(e){//hacemos referencia al formulario que esta en el screen
    e.preventDefault();    //para que no se recargue la pagina
    tipo = $.trim($("#tipo").val());// trim es para obtener los inputs sin espacios
    extencion = $.trim($("#extencion").val());
    estado = $.trim($("#estado").val());
    $.ajax({
        url: "bd/crudTipoImagen.php",
        type: "POST", //Tipo de metodo para envio de datos al crud
        dataType: "json", //los datos enviados en formato JSON
        data: {tipo:tipo, extencion:extencion, estado:estado, codigo:codigo, opcion:opcion},
        success: function(data){  
            console.log(data);//para ver por consola que se recibe
            codigo = data[0].codigo;            
            tipo = data[0].tipo;
            extencion = data[0].extencion;
            estado = data[0].estado;
            if(opcion == 1){tablatImagen.row.add([codigo,tipo,extencion,estado]).draw();}//con el row.add se añade el registro
            else{tablatImagen.row(fila).data([codigo,tipo,extencion,estado]).draw();}            
        }        
    });
    $("#modalCRUDtImagen").modal("hide");    //una vez que se guarda se cierra el modal
    
});    



});