document.addEventListener("DOMContentLoaded", function () {
    const jwt = localStorage.getItem('jwt');
    if (!jwt) {
        console.error("JWT no encontrado. El usuario necesita iniciar sesión.");
        return;
    }

    const form = document.querySelector('form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const fecha = document.getElementById('frep').value;
        getInfanteReporte(fecha, jwt);
    });
});


function getInfanteReporte(fecha, jwt) {
    fetch(`/infante/reportes/1/${fecha}`, {
        headers: {
            'Authorization': `Bearer ${jwt}`
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Respuesta de red no fue ok');
            }
            return response.json();
        })
        .then(data => {
            fillReport(data);
        })
        .catch(error => console.error('Error:', error));
}

function fillReport(data) {
    const tablaComidas = document.getElementById('comidaprint');
    const tablaEvacuaciones = document.getElementById('evaprint');
    const tablaObservaciones = document.getElementById('obsprint');
    console.log(data);
    // Limpiar las tablas
    tablaComidas.getElementsByTagName('tbody')[0].innerHTML = '';
    tablaEvacuaciones.getElementsByTagName('tbody')[0].innerHTML = '';
    tablaObservaciones.getElementsByTagName('tbody')[0].innerHTML = '';

    // Llenar las tablas
    data[0].subreportesComida.forEach(subreporteComida => {
        tablaComidas.getElementsByTagName('tbody')[0].innerHTML += `<tr><td>${subreporteComida.horaComida}</td><td>${subreporteComida.comida}</td><td>${subreporteComida.cantidad}</td></tr>`;
    });

    data[0].subreportesEvacuacion.forEach(evacuacion => {
        tablaEvacuaciones.getElementsByTagName('tbody')[0].innerHTML += `<tr><td>${evacuacion.hora}</td><td>${evacuacion.tipoEvacuacion}</td><td>${evacuacion.observaciones}</td></tr>`;
    });

    data[0].subreportesObservaciones.forEach(anexo => {
        tablaObservaciones.getElementsByTagName('tbody')[0].innerHTML += `<tr><td>${anexo.hora}</td><td>${anexo.descripcion}</td></tr>`;
    });
}

