$(document).ready(function () {
    alert("Everything is f");
  
    var nombreUsuario = "SERGIO ULISES ROJAS ALARCON";
    var infante = {
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
    }
    

    $("#1pf").text(infante.parto);
    $("#2pf").text(infante.alergias);
    $("#3pf").text(infante.padecimientos);
    $("#4pf").text(infante.enfermedades);
    $("#5pf").text(infante.peso);
    $("#6pf").text(infante.altura);
    $("#7pf").text(infante.talla);
    $("#8pf").text(infante.alma);
    $("#nombreinfanteprint").text("ANTECEDENTES DE " + infante.nombre.toUpperCase());
  
  
  });
  