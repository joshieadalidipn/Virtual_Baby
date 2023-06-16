// Función para decodificar y parsear el token JWT
async function decodeJWT(jwtToken) {
    const base64Url = jwtToken.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}

// Función para redirigir al usuario basado en su rol
async function redirectBasedOnRole(payload) {
    // Define el orden de prioridad para los roles
    const rolesPriority = ["DOCENTE", "TUTOR", "CAPITAL_HUMANO", "TRABAJADOR_SOCIAL", "USUARIO"];
    const rolePages = {
        "DOCENTE": "../docente/d_home.html",
        "TUTOR": "../tutor/t_home.html",
        "CAPITAL_HUMANO": "../capital_humano/ch_home.html",
        "TRABAJADOR_SOCIAL": "../trabajador_social/ts_home.html",
        "USUARIO": "../tutor/t_home.html"
    };

    // Itera sobre los roles en orden de prioridad
    for (let i = 0; i < rolesPriority.length; i++) {
        const role = rolesPriority[i];

        // Verifica si el usuario tiene el role actual
        if (payload.roles.some(r => r.authority === role)) {
            // Si el usuario tiene el role, redirige a la página correspondiente
            window.location.href = rolePages[role];
            break;
        }
    }
}

document.addEventListener("DOMContentLoaded", async function () {
    document.querySelector("form").addEventListener("submit", async function (event) {
        event.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("pwd").value;

        const response = await fetch("/auth/login", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({"email": email, "password": password})
        });

        if (response.ok) {
            const jwtToken = await response.text();
            localStorage.setItem("jwt", jwtToken);

            const payload = await decodeJWT(jwtToken);

            await redirectBasedOnRole(payload);
        }
    });
});
