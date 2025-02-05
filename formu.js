$(document).ready(function(){
    $("#formulario").validate({
        rules: {
            errorClass:"error",
            validClass:"valid",

            nombre: {
                required: true,
                minlength: 4
            },
            apellido: {
                required: true,
                minlength: 4
            },
            email: {
                required: true,
                email: true
            },
            comentario: {
                required: true,
                minlength: 5
            }
            
        },
        messages: {
            nombre: {
                required: "Por favor ingresa tu nombre",
                minlength: "Tu nombre debe tener al menos 5 caracteres"
            },
            apellido: {
                required: "porfavor ingresa tu apellido",
                minlength: "porfavor ingresa mas de 4 caracteres"
            },
            email: {
                required: "Por favor ingresa tu correo electronico",
                email: "Por favor ingresa un correo electronico valido"
            },
            comentario: {
                required: "Por favor ingresa un comentario",
                minlength: "Tu comentario debe tener al menos 5 caracteres"
            }
        },
        submitHandler: function(form) {
            alert("Formulario enviado con exito");
            form.submit();
          }
        

    })
  
});



