$(document).ready(function () {
  alert("Everything is fine");

  var nombreUsuario = "ALEJANDRO ZÁRATE CÁRDENAS";
  


  var nombreInfante = "Melissa"; // Asume que este es el nombre del infante.
  

  var reporte = {
      "idinfante": "2023040212",
      "idmedico": "1092019302",
      "fecha": "2003-12-24",
      "nombremedico": "Hernandez Cruz Albortante",
      "detalles": "Le dolía la panza y le dimos paracetamol, no ha comido nada todavia."
  }


  $("#frep").val(reporte.fecha);
  $("#nombreusuarioprint").text(nombreUsuario.toUpperCase());
  $("#detallesprint").text(reporte.detalles);
  $("#nombreinfanteprint").text("REPORTE DE " + nombreInfante.toUpperCase());
  $("#medicoprint").text(reporte.nombremedico);


});
