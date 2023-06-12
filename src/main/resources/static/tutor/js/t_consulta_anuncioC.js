$(document).ready(function () {
    alert("Everything is f");

    var nombreUsuario = "SERGIO ULISES ROJAS ALARCON";

    var anuncio = {
        "fecha": "12/12/12 12:00pm",
        "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum vehicula malesuada. Morbi vulputate vulputate ex ut mattis. Duis pellentesque scelerisque vestibulum. Phasellus auctor at enim faucibus eleifend. Proin vestibulum massa id pharetra consequat. Fusce vel gravida felis. Integer sed justo felis. Integer consequat in ligula eget volutpat. Proin nec molestie nulla, id finibus ex. Nunc enim leo, volutpat at odio in, dignissim ultrices neque. Nulla sagittis lacus urna. Proin nulla orci, blandit nec facilisis nec, suscipit semper odio. Mauris mattis elit nec tempus vestibulum. Quisque convallis scelerisque libero quis cursus. Aenean porttitor consectetur velit et efficitur. Ut at diam id justo lobortis scelerisque gravida gravida massa.  Nullam euismod leo nisi, vitae scelerisque ligula lobortis in. Nunc et mollis arcu. Aenean enim diam, bibendum a enim consectetur, laoreet finibus sapien. Integer tellus ex, pellentesque eget laoreet in, vulputate vel diam. Praesent euismod velit et urna congue fringilla. Curabitur dapibus eros mauris, eu tincidunt diam luctus quis. Vestibulum tristique risus vitae dolor bibendum, hendrerit pellentesque nulla eleifend. Praesent placerat egestas ante a porta.  Sed enim urna, placerat vitae pretium nec, sollicitudin nec nulla. Maecenas luctus placerat imperdiet. Morbi odio elit, bibendum in vulputate vitae, molestie volutpat felis. Mauris convallis eu arcu et vehicula. Donec nec quam libero. Quisque eleifend maximus dui sit amet semper. Donec vel molestie enim.  Sed cursus ullamcorper sem ut porttitor. Praesent lectus tortor, tempus a sollicitudin et, fermentum non erat. Quisque quis quam id odio pellentesque viverra. Donec vitae magna id ipsum ullamcorper dignissim nec lobortis ex. Proin eu lacus ex. Nam quis odio pellentesque, efficitur ante ac, euismod augue. Nam cursus erat eget turpis gravida laoreet non ac nulla. Etiam faucibus molestie lorem, ut dictum diam vehicula sed. Integer sodales nibh quis nunc pharetra, ac fringilla metus ultrices. Aenean et lacus non eros tincidunt mollis. Nunc aliquam luctus est sit amet mattis. Maecenas et magna auctor, aliquet sem ut, lobortis eros. Proin ultricies felis ac massa vulputate dictum. Etiam non libero eu mi dignissim mollis aliquet at sem. Nam blandit lectus ac nulla maximus auctor. Donec hendrerit ante aliquam urna tristique aliquam. Nulla rutrum ut nunc finibus scelerisque. Suspendisse felis diam, posuere a ultrices in, tincidunt et ante. Nulla venenatis massa pulvinar mi aliquet volutpat. Integer imperdiet lacus a nisi tristique tincidunt. Sed a enim leo. Vestibulum sit amet bibendum quam. Praesent a consectetur diam, eget semper erat.",
        "poster": "img/k.jpg"

    }

    var comentarios = [
        {
            "idComentario": "12389179201",
            "idUsuario": "2019032112",
            "usuarioNombre": "Juana Garcia",
            "texto": "No le entiendo"
        },
        {
            "idComentario": "55389179201",
            "idUsuario": "9019032112",
            "usuarioNombre": "Roberto Torres",
            "texto": "Yo te explico, mandame privado por whats"
        }
    ]

    
    $("#descp").text(anuncio.descripcion);
    $("#nombreusuarioprint").text(nombreUsuario.toUpperCase());

    $.each(comentarios, function (key, comm) {
        var nuevoElemento = '<li class="list-group-item">' +
            '<strong>' + comm.usuarioNombre + ':</strong>' +
            '<p>' + comm.texto + '</p>' +
            '</li>';

        $('#commentp').append(nuevoElemento);
    });

});
