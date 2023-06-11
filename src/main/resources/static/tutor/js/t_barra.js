$(document).ready(function () {

    var infantes = [{
        "id": "2089345612",
        "nombre": "Melissa Lopez"
    }, {
        "id": "2089345645",
        "nombre": "Juan Jimenez"
    }]

    var infanteactivo = {
        "id": "2089345645",
        "nombre": "Juan Jimenez"
    }

    $.each(infantes, function (key, infante) {
        var opt = $("<option>").val(infante.id).text(infante.nombre);

        $("#infant").append(opt);
        if (infanteactivo.id === infante.id) {
            $("#infant").val(infante.id);
        } else {
        }
    });

    $("#infant").change(function () {
        var selectedValue = $(this).val();
        location.reload();
    });

});
