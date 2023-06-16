$(document).ready(function () {
    var archivo = uploadFile();
    $('#3p').on('input', function () {
        var fechaNacimiento = $(this).val();
        var fechaActual = new Date();
        var edad = calcularEdad(fechaNacimiento, fechaActual);
        $('#edad-actual').text('Edad: ' + edad + ' años');
    });

    function calcularEdad(fechaNacimiento, fechaActual) {
        var nacimiento = new Date(fechaNacimiento);
        var edad = fechaActual.getFullYear() - nacimiento.getFullYear();
        var mes = fechaActual.getMonth() - nacimiento.getMonth();

        if (mes < 0 || (mes === 0 && fechaActual.getDate() < nacimiento.getDate())) {
            edad--;
        }

        return edad;
    }

    function uploadFile() {
        var fileInput = document.getElementById('file-input');
        var file = fileInput.files[0];

        if (file) {
            var reader = new FileReader();

            reader.onload = function (e) {
                var fileContents = e.target.result;
                // Aquí puedes hacer algo con el contenido del archivo cargado, como visualizarlo usando PDF.js
                console.log('Se encontró un archivo y se cargo correctamente');
            }

            reader.readAsDataURL(file);
        } else {
            console.log("No se seleccionó ningún archivo.");
        }
    }
});


