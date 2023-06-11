document.addEventListener("DOMContentLoaded", function () {
  const menudefault = "Pan de granola con leche y ensalada cesar";
  const infante = {
    "id": 2017200325,
    "nombre": "Melanie",
  }

  document.getElementById("menuf").value = menudefault;
  document.getElementById("nombreinfanteprint").textContent = "REPORTE DE " + infante.nombre.toUpperCase();
});
