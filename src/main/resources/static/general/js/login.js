document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("form").addEventListener("submit", function(event) {
        event.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("pwd").value;

        const xhr = new XMLHttpRequest();
        xhr.open("POST", "/auth/login", true);
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const jwtToken = xhr.responseText;
                localStorage.setItem("jwt", jwtToken);

                // Decodifica y parsea el token
                const base64Url = jwtToken.split('.')[1];
                const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
                const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
                    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
                }).join(''));

                const payload = JSON.parse(jsonPayload);

                // Define el orden de prioridad para los roles
                const rolesPriority = ["DOCENTE","TUTOR", "CAPITAL_HUMANO", "TRABAJADOR_SOCIAL", "USUARIO"];
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
        };
        const data = JSON.stringify({"email": email, "password": password});
        xhr.send(data);
    });
});
