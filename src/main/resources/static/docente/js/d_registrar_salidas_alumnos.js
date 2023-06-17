$(document).ready(()=>{
    var opcionUsuario='';
    alert('La página se cagó correctamente');
    //Obteniendo la fecha actual 
    var fechaActual = new Date();
    var dia = fechaActual.getDate();
    var mes = fechaActual.getMonth() + 1; // Los meses se indexan desde 0
    var año = fechaActual.getFullYear();
    var fechaFormateada = dia + '/' + mes + '/' + año;

    $("#fecha-registro-salidas").text(fechaFormateada);

    alumnos = [
    {
        "id_alumno": 50010,
        "primer_apellido": "Hernandez",
        "segundo_apellido": "Galdeano",
        "nombres_infante": "Patricio",
        "grupo": "maternal A",
        "asistente": "presente"
    },
    {
        "id_alumno": 50011,
        "primer_apellido": "Gonzalez",
        "segundo_apellido": "Lopez",
        "nombres_infante": "Camila",
        "grupo": "maternal A",
        "asistente": "presente"
    },
    {
        "id_alumno": 50012,
        "primer_apellido": "Martinez",
        "segundo_apellido": "Ramirez",
        "nombres_infante": "Sebastian",
        "grupo": "maternal A",
        "asistente": "ausente"
    },
    {
        "id_alumno": 50013,
        "primer_apellido": "Rodriguez",
        "segundo_apellido": "Vargas",
        "nombres_infante": "Valentina",
        "grupo": "maternal A",
        "asistente": "ausente"
    },
    {
        "id_alumno": 50014,
        "primer_apellido": "Lopez",
        "segundo_apellido": "Fernandez",
        "nombres_infante": "Mateo",
        "grupo": "maternal A",
        "asistente": "presente"
    },
    {
        "id_alumno": 50015,
        "primer_apellido": "Garcia",
        "segundo_apellido": "Hernandez",
        "nombres_infante": "Lucia",
        "grupo": "maternal A",
        "asistente": "ausente"
    },
    {
        "id_alumno": 50016,
        "primer_apellido": "Perez",
        "segundo_apellido": "Gonzalez",
        "nombres_infante": "Benjamin",
        "grupo": "maternal A",
        "asistente": "ausente"
    },
    {
        "id_alumno": 50017,
        "primer_apellido": "Sanchez",
        "segundo_apellido": "Rodriguez",
        "nombres_infante": "Emma",
        "grupo": "maternal A",
        "asistente": "presente"
    },
    {
        "id_alumno": 50018,
        "primer_apellido": "Flores",
        "segundo_apellido": "Sanchez",
        "nombres_infante": "Santiago",
        "grupo": "maternal A",
        "asistente": "presente"
    },
    {
        "id_alumno": 50019,
        "primer_apellido": "Romero",
        "segundo_apellido": "Flores",
        "nombres_infante": "Isabella",
        "grupo": "maternal A",
        "asistente": "ausente"
    },
    {
        "id_alumno": 50020,
        "primer_apellido": "Ramirez",
        "segundo_apellido": "Romero",
        "nombres_infante": "Liam",
        "grupo": "maternal A",
        "asistente": "presente"
    },
    {
        "id_alumno": 50021,
        "primer_apellido": "Gomez",
        "segundo_apellido": "Vargas",
        "nombres_infante": "Mia",
        "grupo": "maternal A",
        "asistente": "ausente"
    },
    {
        "id_alumno": 50022,
        "primer_apellido": "Jimenez",
        "segundo_apellido": "Gomez",
        "nombres_infante": "Daniel",
        "grupo": "maternal A",
        "asistente": "ausente"
    },
    {
        "id_alumno": 50023,
        "primer_apellido": "Hernandez",
        "segundo_apellido": "Jimenez",
        "nombres_infante": "Valeria",
        "grupo": "maternal A",
        "asistente": "presente"
    },
    {
        "id_alumno": 50024,
        "primer_apellido": "Lopez",
        "segundo_apellido": "Hernandez",
        "nombres_infante": "Alexander",
        "grupo": "maternal A",
        "asistente": "ausente"
    },
    {
        "id_alumno": 50025,
        "primer_apellido": "Gonzalez",
        "segundo_apellido": "Lopez",
        "nombres_infante": "Sofia",
        "grupo": "maternal A",
        "asistente": "presente"
    }
    ];

    //Declarando una variable para guardar el valor seleccionado por el usuario 
    
    
    // Función para marcar la asistencia y escribir la hora actual en el <th> correspondiente

   //Funcion para generar los elementos de la tabla según el valor de su tabla
function generarRegistros(){
    $("#tabla-infantes-salidas tbody").empty();
    $.each(alumnos, function(key,val){
        if(val.asistente == "presente"){
            var row = $("<tr>");
            $("#tabla-infantes-salidas tbody").append(row);
            row.append($("<td>").addClass("text-center").text(val.nombres_infante + " " + val.primer_apellido + " " + val.segundo_apellido));
            row.append($("<td>").addClass("text-center").html(`<input type="checkbox" id="casilla-${val.id_alumno}" class="casilla-asistencia">`));
            row.append($("<th>").addClass("text-center hora-asistencia").text(""));
        } else if(val.asistente == "ausente"){
            var row = $("<tr>");
            $("#tabla-infantes-salidas tbody").append(row);
            row.append($("<td>").addClass("text-center").text(val.nombres_infante + " " + val.primer_apellido + " " + val.segundo_apellido));
            row.append($("<td>").addClass("text-center").text("Este alumno no asistió"));
            row.append($("<td>").addClass("text-center").text("Este alumno no asistió"));
        } else {
            console.log('No se encontró coincidencia con el id');
        }
    });
}

function marcarAsistencia() {
    const fecha = new Date();
    const hora = fecha.getHours();
    const minutos = fecha.getMinutes();
    const segundos = fecha.getSeconds();
    const horaFormateada = `${hora}:${minutos}:${segundos}`;

    const idBoton = $(this).attr("id");
    $(this).closest("tr").find("th.hora-asistencia").text(horaFormateada);
}

// Asociar el evento click a los botones de casilla
$(document).on("click", ".casilla-asistencia", marcarAsistencia);
// Llamar a la función generarRegistros con la opción deseada
generarRegistros();


})