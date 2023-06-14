document.addEventListener("DOMContentLoaded", function () {
    const jwt = localStorage.getItem('jwt');

    if (!jwt) {
        console.error("JWT no encontrado. El usuario necesita iniciar sesión.");
        return;
    }

    const infantesData = sessionStorage.getItem('infantesData');

    if (!infantesData) {
        fetch('/infantes/', {
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
                sessionStorage.setItem('infantesData', JSON.stringify(data));
                setInfantesData(data);
            })
            .catch(error => console.error('Error:', error));
    } else {
        setInfantesData(JSON.parse(infantesData));
    }
});

function setInfantesData(infantes) {
    infantes.forEach(infante => {
        const infantesPrintElement = document.getElementById("infantesprint");
        const tbodyElement = infantesPrintElement.querySelector("tbody");
        const newRow = createInfanteRow(infante);
        tbodyElement.appendChild(newRow);
    });
}

function createInfanteRow(infante) {
    const row = document.createElement("tr");
    row.setAttribute("id", "idf");

    row.appendChild(document.createElement("td")).textContent = infante.id;
    row.appendChild(document.createElement("td")).textContent = infante.nombre;
    row.appendChild(document.createElement("td")).appendChild(createFoodButton(infante.id));
    row.appendChild(document.createElement("td")).appendChild(createBathButton(infante.id));
    row.appendChild(document.createElement("td")).appendChild(createIrButton(infante.id));

    return row;
}


const createFoodButton = (id) => {
    // Crear botón
    const btn = document.createElement("a");
    btn.setAttribute("href", "#");
    btn.setAttribute("id", "report" + id);
    btn.classList.add("btn", "btn-dark", "text-center", "d-flex", "align-items-center", "justify-content-center");

    // Crear ícono
    const icon = document.createElement("i");
    icon.classList.add("fa-solid", "fa-flag", "fa-2x", "me-2");
    icon.style.color = "#ffffff";

    // Agregar el ícono y el texto al botón
    btn.appendChild(icon);

    return btn;
};

const createBathButton = (id) => {
    // Crear botón
    const btn = document.createElement("a");
    btn.setAttribute("href", "#");
    btn.setAttribute("id", "report" + id);
    btn.classList.add("btn", "btn-dark", "text-center", "d-flex", "align-items-center", "justify-content-center");

    // Crear ícono
    const icon = document.createElement("i");
    icon.classList.add("fa-solid", "fa-flag", "fa-2x", "me-2");
    icon.style.color = "#ffffff";

    // Agregar el ícono y el texto al botón
    btn.appendChild(icon);

    return btn;
};

const createIrButton = (id) => {
    // Crear botón
    const btn = document.createElement("a");
    btn.setAttribute("href", "#");
    btn.setAttribute("id", "report" + id);
    btn.classList.add("btn", "btn-dark", "text-center", "d-flex", "align-items-center", "justify-content-center");

    // Crear ícono
    const icon = document.createElement("i");
    icon.classList.add("fa-solid", "fa-user", "fa-2x", "me-2");
    icon.style.color = "#ffffff";

    // Agregar el ícono y el texto al botón
    btn.appendChild(icon);

    return btn;
};