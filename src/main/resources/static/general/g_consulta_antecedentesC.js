document.addEventListener("DOMContentLoaded", function() {
    alert("Everything is fine");

    const nombreUsuario = "SERGIO ULISES ROJAS ALARCON";
    const infante = {
        "id": "123",
        "nombre": "Melissa",
        "parto": "Natural",
        "alergias": "Polen, azucar",
        "padecimientos": "Hipertensión",
        "enfermedades": "Diabetes",
        "peso": 70.5,
        "altura": 175.0,
        "talla": 42.0,
        "alma": "Azul"
    };

    document.getElementById("1pf").textContent = infante.parto;
    document.getElementById("2pf").textContent = infante.alergias;
    document.getElementById("3pf").textContent = infante.padecimientos;
    document.getElementById("4pf").textContent = infante.enfermedades;
    document.getElementById("5pf").textContent = infante.peso;
    document.getElementById("6pf").textContent = infante.altura;
    document.getElementById("7pf").textContent = infante.talla;
    document.getElementById("8pf").textContent = infante.alma;
    document.getElementById("nombreinfanteprint").textContent = "ANTECEDENTES DE " + infante.nombre.toUpperCase();
    document.getElementById("nombreusuarioprint").textContent = nombreUsuario.toUpperCase();
});
