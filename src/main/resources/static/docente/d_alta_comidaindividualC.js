$(document).ready(function () {
  alert("Everything is fine");

  var nombreUsuario = "SERGIO ULISES ROJAS ALARCON";
  $("#nombreusuarioprint").text(nombreUsuario.toUpperCase());


  var menudefault = "Pan de granola con leche y ensalada cesar";
  var infante = {
    "id": 2017200325,
    "nombre": "Melanie",
  }


  $("#menuf").val(menudefault);
  $("#nombreinfanteprint").text("REPORTE DE " + infante.nombre.toUpperCase());


});
