$(document).ready(function () {
    alert("Everything is fine");
  
    var nombreUsuario = "ALEJANDRO ZÁRATE CÁRDENAS";
    var grupos = [{ "id": "1020", "nombre": "2BM1" }, { "id": "1030", "nombre": "2BM2" }, { "id": "1040", "nombre": "2BM3" }]
    var salones = [{"id":"0023", "nombre":"Estrella"}, {"id":"0028", "nombre":"Planeta"}]

    $("#nombreusuarioprint").text(nombreUsuario.toUpperCase());
    $.each(grupos, function (key, grupo) {
      var opt = $("<option>").val(grupo.id).text(grupo.nombre);
      $("#idgf").append(opt);
    });
    $.each(salones, function (key, salon) {
      var opt = $("<option>").val(salon.id).text(salon.nombre);
      $("#idsf").append(opt);
    });

  });
  