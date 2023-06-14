document.addEventListener("DOMContentLoaded", function () {
    const jwt = localStorage.getItem('jwt');
    if (!jwt) {
        console.error("JWT no encontrado. El usuario necesita iniciar sesión.");
        return;
    }

    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id') || '1'; // Obtener el valor del parámetro "id" del URL, o usar el valor predeterminado "1" si no está presente

    const form = document.querySelector('form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const fecha = document.getElementById('fecha_reporte').value;
        getInfanteReporte(id, fecha, jwt) // Pasar el parámetro "id" a la función getInfanteReporte
            .then(data => fillReport(data))
            .catch(error => console.error('Error:', error));
    });
});

async function getInfanteReporte(id, fecha, jwt) { // Agregar el parámetro "id" a la función getInfanteReporte
    const response = await fetch(`/infantes/${id}/reportes/${fecha}`, { // Usar el parámetro "id" en la URL de la consulta
        headers: {
            'Authorization': `Bearer ${jwt}`
        }
    });

    if (!response.ok) {
        throw new Error('Respuesta de red no fue ok');
    }

    return await response.json();
}


function fillReport(data) {
    const tablaComidas = document.getElementById('tabla_comidas');
    const tablaEvacuaciones = document.getElementById('tabla_evacuaciones');
    const tablaObservaciones = document.getElementById('tabla_observaciones');
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
