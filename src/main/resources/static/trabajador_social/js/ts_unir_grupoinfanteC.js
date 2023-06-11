$(document).ready(function () {
  alert("Everything is fine");

  var nombreUsuario = "ALEJANDRO ZÁRATE CÁRDENAS";
  var grupos = [{ "id": "1020", "nombre": "2BM1" }, { "id": "1030", "nombre": "2BM2" }, { "id": "1040", "nombre": "2BM3" }]







  $("#nombreusuarioprint").text(nombreUsuario.toUpperCase());
  
  $.each(grupos, function (key, grupo) {
    var opt = $("<option>").val(grupo.id).text(grupo.nombre);
    $("#idgf").append(opt);
  });
});
