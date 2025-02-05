$(document).ready(function () {
  let contenedor = $(".contenedor");
  let imagen = $("#imagen");
  let boton = $("#boton"); 
  let boton2 = $("#boton2");
  let parrafo = $("#parrafo");

  boton.click(mostrar);
  boton2.click(mostrar1);

  let variable = true;
  function mostrar() {
    if (variable == true) {
      imagen.attr(
        "src",
        "https://placehold.org/600x400/cccccc/000000?text=Hola+Mundo"
      );
      parrafo.text(
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, optio"
      );
      variable = false;
      boton.text("Quitar")
      
    } else {
      imagen.attr(
        "src",
        "https://placehold.org/300x200/cccccc/000000?text=Hola+Mundo"
      );
      boton.text("Mostrar")
      parrafo.text("Breve descripcion")
      variable = true;

      
    }
  }
  let variable1 = true;
  function mostrar1() {
    if (variable1 == true) {
        $("#imagen2").attr(
            "src",
            "https://placehold.org/600x400/cccccc/000000?text=Hola+Mundo"
          );
          $("#parrafo2").text(
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, optio"
          );
        variable1 = false;
        boton2.text("Quitar")
    }else {
        $("#imagen2").attr(
            "src",
            "https://placehold.org/300x200/cccccc/000000?text=Hola+Mundo"
          );
        boton2.text("Mostrar")
        $("#parrafo2").text("Breve descripcion")
        variable1 = true;
    }
    
  }
});


