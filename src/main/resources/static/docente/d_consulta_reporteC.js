$(document).ready(function () {
  alert("Everything is fine");

  var nombreUsuario = "ALEJANDRO ZÁRATE CÁRDENAS";
  $("#nombreusuarioprint").text(nombreUsuario.toUpperCase());


  var nombreInfante = "Pedro"; // Asume que este es el nombre del infante.
  $("#nombreinfanteprint").text("REPORTE DE " + nombreInfante.toUpperCase());


  var comidas = [
    {
      "id": 1,
      "hora": "01:02",
      "alimento": "Manzana",
      "cantidadIngerida": "Todo"
    },
    {
      "id": 2,
      "hora": "02:12",
      "alimento": "Arroz",
      "cantidadIngerida": "Nada"
    },
    {
      "id": 3,
      "hora": "10:23",
      "alimento": "Pollo",
      "cantidadIngerida": "Algo"
    }
  ];

  var evacuaciones = [
    {
      "id": 1,
      "hora": "01:02",
      "tipo": "Pipi",
      "obs": "Sin observaciones"
    },
    {
      "id": 2,
      "hora": "02:12",
      "tipo": "Diarrea",
      "obs": "Le da impulsos negativos"
    },
    {
      "id": 3,
      "hora": "10:23",
      "tipo": "Popo",
      "obs": "Fue morada"
    }
  ];

  var obses = [
    {
      "id": 1,
      "hora": "10:23",
      "letras": "Se peleó",
    },
    {
      "id": 2,
      "hora": "10:23",
      "letras": "Vomitó",
    },
    {
      "id": 3,
      "hora": "10:23",
      "letras": "Se escapó del edificio",
    }
  ];

  $.each(comidas, function (key, val) {
    var row = $("<tr />");
    $("#comidaprint tbody").append(row);
    row.append($("<td>" + val.hora + "</td>"));
    row.append($("<td>" + val.alimento + "</td>"));
    row.append($("<td>" + val.cantidadIngerida + "</td>"));
  });

  $.each(evacuaciones, function (key, val) {
    var row = $("<tr />");
    $("#evaprint tbody").append(row);
    row.append($("<td>" + val.hora + "</td>"));
    row.append($("<td>" + val.tipo + "</td>"));
    row.append($("<td>" + val.obs + "</td>"));
  });

  $.each(obses, function (key, val) {
    var row = $("<tr />");
    $("#obsprint tbody").append(row);
    row.append($("<td>" + val.hora + "</td>"));
    row.append($("<td>" + val.letras + "</td>"));
  });
});
