$(document).ready(function(){
    var archivo=uploadFile(); 

    var fechaActual = new Date();
    var dia = fechaActual.getDate();
    var mes = fechaActual.getMonth() + 1; // Los meses se indexan desde 0
    var año = fechaActual.getFullYear();
    var fechaFormateada = dia + '/' + mes + '/' + año;

    $("#fecha-modificacion-plan-estudios").text(fechaFormateada);

});
function uploadFile() {
    var fileInput = document.getElementById('file-input');
    var file = fileInput.files[0];
    
    if (file) {
        var reader = new FileReader();
        
        reader.onload = function(e) {
        var fileContents = e.target.result;
        // Aquí puedes hacer algo con el contenido del archivo cargado, como visualizarlo usando PDF.js
        console.log('Se encontró un archivo y se cargo correctamente');
        }
        
        reader.readAsDataURL(file);
    } else {
        console.log("No se seleccionó ningún archivo.");
    }
    }