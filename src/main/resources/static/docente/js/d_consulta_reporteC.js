document.addEventListener("DOMContentLoaded", function () {

  const comidas = [
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

  const evacuaciones = [
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

  const observaciones = [
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

  comidas.forEach(val => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${val.hora}</td><td>${val.alimento}</td><td>${val.cantidadIngerida}</td>`;
    document.querySelector("#comidaprint tbody").appendChild(row);
  });

  evacuaciones.forEach(val => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${val.hora}</td><td>${val.tipo}</td><td>${val.obs}</td>`;
    document.querySelector("#evaprint tbody").appendChild(row);
  });

  observaciones.forEach(val => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${val.hora}</td><td>${val.letras}</td>`;
    document.querySelector("#obsprint tbody").appendChild(row);
  });
});
