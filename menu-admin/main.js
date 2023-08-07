$(document).ready(function(){
    tablaPersonas = $("#tablaPersonas").DataTable({
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
$("#btnNuevo").click(function(){
    $("#formPersonas").trigger("reset");//cada vez que presionemos el boton de nuevo se resetean los inputs
    $(".modal-header").css("background-color", "#1cc88a");//color de la cabezera
    $(".modal-header").css("color", "white");//color de titulo
    $(".modal-title").text("Nuevo Tipo"); //nombre del titulo           
    $("#modalCRUD").modal("show"); //hacemos referencia del modal con el id que le agregamos y lo mostramos  
    codigo=null; //lo enviamos nulo ya que el id lo genera el auto incremental
    opcion = 1; //alta
});    
    
var fila; //capturar la fila para editar o borrar el registro

//editar
$(document).on("click", ".btnEditar", function(){
 fila = $(this).closest("tr");
 codigo = parseInt(fila.find('td:eq(0)').text());//parseInt es solo para numeros
 //alert(codigo);
 nombre = fila.find('td:eq(1)').text();
//alert(nombre);
 descripcion = fila.find('td:eq(2)').text();
//alert(descripcion);

$("#nombre").val(nombre);//capturar los datos desde los inputs
$("#descripcion").val(descripcion);
opcion = 2; //editar

    $(".modal-header").css("background-color", "blue");//color de la cabezera
    $(".modal-header").css("color", "white");//color de titulo
    $(".modal-title").text("Editar Tipo"); //nombre del titulo           
    $("#modalCRUD").modal("show"); //hacemos referencia del modal con el id que le agregamos y lo mostramos  


});

//borrar
$(document).on("click", ".btnBorrar", function(){    
    fila = $(this);
    codigo = parseInt($(this).closest("tr").find('td:eq(0)').text());
    opcion = 3 //borrar
    var respuesta = confirm("¿Está seguro de eliminar el registro: "+codigo+"?");
    if(respuesta){
        $.ajax({
            url: "bd/crud.php",
            type: "POST",
            dataType: "json",
            data: {opcion:opcion, codigo:codigo},
            success: function(){
                tablaPersonas.row(fila.parents('tr')).remove().draw();
            }
        });
    }   
});

    
    
$("#formPersonas").submit(function(e){//hacemos referencia al formulario que esta en el screen
    e.preventDefault();    //para que no se recargue la pagina
    nombre = $.trim($("#nombre").val());// trim es para obtener los inputs sin espacios
    descripcion = $.trim($("#descripcion").val());
    $.ajax({
        url: "bd/crud.php",
        type: "POST", //Tipo de metodo para envio de datos al crud
        dataType: "json", //los datos enviados en formato JSON
        data: {nombre:nombre, descripcion:descripcion, codigo:codigo, opcion:opcion},
        success: function(data){  
            console.log(data);//para ver por consola que se recibe
            codigo = data[0].codigo;            
            nombre = data[0].nombre;
            descripcion = data[0].descripcion;
            if(opcion == 1){tablaPersonas.row.add([codigo,nombre,descripcion]).draw();}//con el row.add se añade el registro
            else{tablaPersonas.row(fila).data([codigo,nombre,descripcion]).draw();}            
        }        
    });
    $("#modalCRUD").modal("hide");    //una vez que se guarda se cierra el modal
    
});    
    
});