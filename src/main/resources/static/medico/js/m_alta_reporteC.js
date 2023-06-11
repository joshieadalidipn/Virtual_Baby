$(document).ready(function () {
    alert("Everything is f");
  
    var nombreUsuario = "SERGIO ULISES ROJAS ALARCON";
    var infante = {
      "id": 2017200325,
      "nombre": "Melissa",
    }

    $("#nombreusuarioprint").text(nombreUsuario.toUpperCase());
    $("#infanteprint").text("Visita de " + infante.nombre);
  
  });