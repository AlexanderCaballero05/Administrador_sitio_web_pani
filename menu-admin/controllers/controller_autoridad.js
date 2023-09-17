document.getElementById("agregarRegistro").onclick = function () {//funcion onclick boton agregar
    mostrarModalAgregarDatoAutoridad();
}

function mostrarModalAgregarDatoAutoridad() 
{
 $("#modal-agregar-dato-autoridad").modal("show");   
    agregarDatosAutoridad();
}

/**
 * funcion para agregar los datos de autoridad
 */

function agregarDatosAutoridad() 
{
    let formulario = document.getElementById("form-agregar-datos-autoridad");
    formulario.addEventListener('submit', function (event) 
    {
        event.preventDefault();
        let datos = new FormData(formulario);
        let selecProfesion = datos.get('selecProfesion');        
        let nombreProfesional = datos.get('nombreProfesional');
        let fotoProfesional = datos.get('fotoProfesional');
        let estadoProfesional = datos.get('estadoProfesional');

        if (selecProfesion == null || nombreProfesional == "" || fotoProfesional == "" || estadoProfesional == null )
         {
            swal.fire({
               icon: 'warning',
               title: 'Se requieren los campos',
               text: 'Complete la información dentro de los campos'
            })
            
        } else {
            swal.fire({
               icon: 'success',
               title: 'Solicitud Exitosa',
               text: 'El registro se inserto correctamente'
            })
            
        }

        
    })
    
}