document.addEventListener("DOMContentLoaded", function () {
    const infante = {"id": 20202020, "nombre": "Melanie"}
    setInfanteData(infante)
});

function setInfanteData(infante) {
    document.getElementById("nombreinfanteprint").textContent = `REPORTE DE ${infante.nombre.toUpperCase()}`;
}