// Espera a que el documento HTML esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {

    // Define los datos y configuraciones por defecto

    const infantes = [{
        "id": 2017200325, "nombre": "Melanie Zavala Tinoco",
    }, {
        "id": 2017200326, "nombre": "Juan Carlos García López"
    }, {
        "id": 2017200327, "nombre": "Ana María Rodríguez Torres"
    }, {
        "id": 2017200328, "nombre": "Carlos Hernández Sánchez"
    }, {
        "id": 2017200329, "nombre": "María Fernández García"
    }, {
        "id": 2017200330, "nombre": "Javier Torres Méndez"
    }, {
        "id": 2017200331, "nombre": "Laura Martínez Ramírez"
    }, {
        "id": 2017200325, "nombre": "Melanie Zavala Tinoco",
    }, {
        "id": 2017200326, "nombre": "Juan Carlos García López"
    }, {
        "id": 2017200327, "nombre": "Ana María Rodríguez Torres"
    }, {
        "id": 2017200328, "nombre": "Carlos Hernández Sánchez"
    }, {
        "id": 2017200332, "nombre": "Luis López Torres"
    }];

    // Función que crea un nuevo menú


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
    
    


    // Función que crea una nueva fila de infante
    const createInfanteRow = (infante) => {
        const row = document.createElement("tr");
        row.setAttribute("id", "idf");

        row.appendChild(document.createElement("td")).textContent = infante.id;
        row.appendChild(document.createElement("td")).textContent = infante.nombre;
        row.appendChild(document.createElement("td")).appendChild(createFoodButton(infante.id));
        row.appendChild(document.createElement("td")).appendChild(createBathButton(infante.id));
        row.appendChild(document.createElement("td")).appendChild(createIrButton(infante.id));

        return row;
    }

    // Recorre cada infante y crea su respectiva fila
    infantes.forEach(infante => {
        const infantesPrintElement = document.getElementById("infantesprint");
        const tbodyElement = infantesPrintElement.querySelector("tbody");
        const newRow = createInfanteRow(infante);
        tbodyElement.appendChild(newRow);
    });
});
