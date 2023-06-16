async function fetchUserData() {
    const jwt = localStorage.getItem('jwt');

    if (!jwt) {
        console.error("JWT no encontrado. El usuario necesita iniciar sesión.");
        return;
    }

    let userData = sessionStorage.getItem('userData');

    if (!userData) {
        try {
            const response = await fetch('/usuarios/self', {
                headers: {
                    'Authorization': `Bearer ${jwt}`
                }
            });

            if (!response.ok) {
                throw new Error('Respuesta de red no fue ok');
            }

            userData = await response.json();
            sessionStorage.setItem('userData', JSON.stringify(userData));
        } catch (error) {
            console.error('Error:', error);
            return;
        }
    } else {
        userData = JSON.parse(userData);
    }

    setUserData(userData);
}

function setUserData(userData) {
    const nombreCompleto = `${userData.nombre} ${userData.primerApellido} ${userData.segundoApellido}`
    document.getElementById("nombreusuarioprint").textContent = nombreCompleto.toUpperCase();
}
