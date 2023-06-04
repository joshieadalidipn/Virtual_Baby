$(document).ready(function () {
    alert("Everything is fine");
  
    var nombreUsuario = "SERGIO ULISES ROJAS ALARCON";
    var infante = {
      "id": 2017200325,
      "nombre": "Melanie",
    }

    $("#nombreusuarioprint").text(nombreUsuario.toUpperCase());
    $("#nombreinfanteprint").text("REPORTE DE " + infante.nombre.toUpperCase());
  
  
  });
  