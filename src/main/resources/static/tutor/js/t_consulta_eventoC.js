$(document).ready(function () {
    alert("Everything is f");

    var nombreUsuario = "SERGIO ULISES ROJAS ALARCON";

    var evento = {
        "fecha": "12/12/12",
        "descripcion": "Va a haber kermes",
        "poster": "img/k2.jpg"

    }


    var imagenHtml = "<img src='" + evento.poster + "' alt='Descripción de la imagen' class='d-block w-25'>";
    
    // Método append():
    $("#posterp").append(imagenHtml);

    $("#descp").text(evento.descripcion);
    $("#nombreusuarioprint").text(nombreUsuario.toUpperCase());
    $("#nombreinfanteprint").text("EVENTO DEL " + evento.fecha);


});
