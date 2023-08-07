$(document).ready(function(){
tablaEmpresa = $("#tablaEmpresa").DataTable({
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
    $("#BtnNuevoDato").click(function(){
        $("#formEmpresa").trigger("reset");
        $(".modal-header").css("background-color", "#1cc88a");//color de la cabezera
        $(".modal-header").css("color", "white");//color de titulo
        $(".modal-title").text("Nuevo dato Empresa"); //nombre del titulo    
        $("#modalCRUDempresa").modal("show");
        codigo=null;
        opcion =1;
    });

    var fila; //capturar la fila para editar o borrar el registro

    $(document).on("click", ".btnEditar", function(){
        fila = $(this).closest("tr");
        codigo = parseInt(fila.find('td:eq(0)').text());//parseInt es solo para numeros
        codigo_tipo_dato =  parseInt(fila.find('td:eq(1)').text());
        contenido = fila.find('td:eq(2)').text();

        $("#tipo").val(codigo_tipo_dato);
        $("#contenido").val(contenido);
        opcion=2;
        
        $(".modal-header").css("background-color", "blue");//color de la cabezera
        $(".modal-header").css("color", "white");//color de titulo
        $(".modal-title").text("Editar Tipo"); //nombre del titulo           
        $("#modalCRUDempresa").modal("show");

    });

 $("#formEmpresa").submit(function(e){//hacemos referencia al formulario que esta en el screen
    e.preventDefault();    //para que no se recargue la pagina
    codigo_tipo_dato = $.trim($("#tipo").val());// trim es para obtener los inputs sin espacios
    contenido = $.trim($("#contenido").val());
    $.ajax({
        url: "bd/crudEmpresa.php",
        type: "POST", //Tipo de metodo para envio de datos al crud
        dataType: "json", //los datos enviados en formato JSON
        data: {codigo_tipo_dato:codigo_tipo_dato, contenido:contenido, codigo:codigo, opcion:opcion},
        success: function(data){  
            console.log(data);//para ver por consola que se recibe
            codigo = data[0].codigo;            
            codigo_tipo_dato = data[0].codigo_tipo_dato;
            contenido = data[0].contenido;
            if(opcion == 1){tablaEmpresa.row.add([codigo,codigo_tipo_dato,contenido]).draw();}//con el row.add se añade el registro
            else{tablaEmpresa.row(fila).data([codigo,codigo_tipo_dato,contenido]).draw();}            
        }        
    });
    $("#modalCRUDempresa").modal("hide");    //una vez que se guarda se cierra el modal
    

    });
});//fin del documento