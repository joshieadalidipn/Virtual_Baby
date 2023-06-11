$(document).ready(function () {
    alert("Everything is f");
  
    var nombreUsuario = "SERGIO ULISES ROJAS ALARCON";
    var grupo = {
      "id": 2017200325,
      "nombre": "2BM1",
    }

    $("#nombreusuarioprint").text(nombreUsuario.toUpperCase());
    $("#nombreinfanteprint").text("MENU DEL DIA DE " + grupo.nombre.toUpperCase());
  
  
  });
  