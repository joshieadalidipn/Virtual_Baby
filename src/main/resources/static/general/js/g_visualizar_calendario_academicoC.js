$(document).ready(() => {
    var  calendarBody = $('#calendar-body');

    // Generando un arrelgo con los meses del año
    const monthsArray = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre"
    ];

    // Obtener la fecha actual
    var  date = new Date();
    var  year = date.getFullYear();
    var  month = date.getMonth();

    // Obtener el primer día del mes
    var  firstDay = new Date(year, month, 1);
    var  startingDay = firstDay.getDay();

    // Obtener el número de días en el mes
    var  lastDay = new Date(year, month + 1, 0);
    var  totalDays = lastDay.getDate();

    // Generar las celdas del calendario
    let day = 1;
    for (let row = 0; row < 6; row++) {
        // Crear una fila en la tabla
        var  newRow = $('<tr></tr>');

        // Crear celdas para cada día de la semana
        for (let col = 0; col < 7; col++) {
            if (row === 0 && col < startingDay) {
                // Rellenar las celdas vacías antes del primer día
                var  emptyCell = $('<td></td>');
                newRow.append(emptyCell);
            } else if (day > totalDays) {
                // Salir del bucle si ya hemos agregado todos los días del mes
                break;
            } else {
                // Crear una celda para el día actual
                var  cell = $('<td></td>').addClass("text-center").text(day);
                newRow.append(cell);
                day++;
            }
        }

        calendarBody.append(newRow);
    }
    $("#mes-calendario-academico").addClass("text-center").text(monthsArray[month] + " de " + year);
});