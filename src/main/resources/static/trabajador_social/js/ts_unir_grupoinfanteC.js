// Espera a que el documento HTML esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {

    // Define los datos y configuraciones por defecto
    const menuPlaceholder = "Pan de granola con leche y ensalada cesar";
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

    // Función que crea un nuevo select de cantidad
    const createGrupos = (id) => {
        const cantidadD = document.createElement("select");
        cantidadD.classList.add("form-select");
        cantidadD.setAttribute("id", "cf" + id);

        const options = ["3BM1", "2BV3", "1SC3"];
        options.forEach(optionText => {
            const option = document.createElement("option");
            option.text = optionText;
            cantidadD.appendChild(option);
        });

        return cantidadD;
    }

    // Función que crea una nueva fila de infante
    const createInfanteRow = (infante) => {
        const row = document.createElement("tr");
        row.setAttribute("id", "idf");

        row.appendChild(document.createElement("td")).textContent = infante.id;
        row.appendChild(document.createElement("td")).textContent = infante.nombre;
        row.appendChild(document.createElement("td")).appendChild(createGrupos(infante.id));

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
