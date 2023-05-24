$(document).ready(function () {
  alert("Everything is fine");

  var nombreUsuario = "SERGIO ULISES ROJAS ALARCON";
  $("#nombreusuarioprint").text(nombreUsuario.toUpperCase());


  var menudefault = "Pan de granola con leche y ensalada cesar";
  var infantes = [
    {
      "id": 2017200325,
      "nombre": "Melanie Zavala Tinoco",
    },
    {
      "id": 2017200326,
      "nombre": "Juan Carlos García López"
    },

    {
      "id": 2017200327,
      "nombre": "Ana María Rodríguez Torres"
    },

    {
      "id": 2017200328,
      "nombre": "Carlos Hernández Sánchez"
    },

    {
      "id": 2017200329,
      "nombre": "María Fernández García"
    },

    {
      "id": 2017200330,
      "nombre": "Javier Torres Méndez"
    },

    {
      "id": 2017200331,
      "nombre": "Laura Martínez Ramírez"
    },
    {
      "id": 2017200325,
      "nombre": "Melanie Zavala Tinoco",
    },
    {
      "id": 2017200326,
      "nombre": "Juan Carlos García López"
    },

    {
      "id": 2017200327,
      "nombre": "Ana María Rodríguez Torres"
    },

    {
      "id": 2017200328,
      "nombre": "Carlos Hernández Sánchez"
    },

    {
      "id": 2017200332,
      "nombre": "Luis López Torres"
    }

  ];


  $.each(infantes, function (key, val) {
    var row = $("<tr>");
    var mf = "mf"+val.id;
    var cf = "cf"+val.id;
    var menuD = $("<input>").attr("type", "text").addClass("form-control").attr("id", mf).val(menudefault);
    var cantidadD = $("<select>").addClass("form-select").attr("id", cf).append($("<option>Todo</option><option>Algo</option><option>Nada</option>"));
    $("#infantesprint tbody").append(row);
    row.append($("<td>").text(val.id)).attr("id", "idf");
    row.append($("<td>").text(val.nombre));
    row.append($("<td>").append(menuD));
    row.append($("<td>").append(cantidadD));
  });
});
