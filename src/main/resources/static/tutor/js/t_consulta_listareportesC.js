// Espera a que el documento HTML esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {

    // Define los datos y configuraciones por defecto
    const menuPlaceholder = "Pan de granola con leche y ensalada cesar";
    const infantes = [{
        "id": "20-20-20", "nombre": "Melanie Zavala Tinoco",
    },{
        "id": "20-20-20", "nombre": "Melanie Zavala Tinoco",
    },{
        "id": "20-20-20", "nombre": "Melanie Zavala Tinoco",
    },{
        "id": "20-20-20", "nombre": "Melanie Zavala Tinoco",
    },{
        "id": "20-20-20", "nombre": "Melanie Zavala Tinoco",
    }];

    // Función que crea un nuevo menú
    const createButton = (id) => {
        const menuD = document.createElement("button");
        menuD.setAttribute("type", "submit");
        menuD.classList.add("form-control");
        menuD.setAttribute("id", "mf" + id);
        menuD.innerText = "Ver";
        return menuD;
    }
    

    // Función que crea una nueva fila de infante
    const createInfanteRow = (infante) => {
        const row = document.createElement("tr");
        row.setAttribute("id", "idf");

        row.appendChild(document.createElement("td")).textContent = infante.id;
        row.appendChild(document.createElement("td")).textContent = infante.nombre;
        row.appendChild(document.createElement("td")).appendChild(createButton(infante.id));

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
