document.addEventListener("DOMContentLoaded", function () {
    const jwt = localStorage.getItem('jwt');

    if (!jwt) {
        console.error("JWT no encontrado. El usuario necesita iniciar sesión.");
        return;
    }

    const userData = sessionStorage.getItem('userData');

    if (!userData) {
        fetch('/usuario/datos', {
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
                sessionStorage.setItem('userData', JSON.stringify(data));
                setUserData(data);
            })
            .catch(error => console.error('Error:', error));
    } else {
        setUserData(JSON.parse(userData));
    }
});

function setUserData(userData) {
    const nombreCompleto = userData.nombre + " " + userData.primerApellido + " " + userData.segundoApellido;
    document.getElementById("nombreusuarioprint").textContent = nombreCompleto.toUpperCase();
}
