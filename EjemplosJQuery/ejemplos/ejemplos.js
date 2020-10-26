$(document).ready(function(){
    $("#capa").html("<p>READY</p>");
});

$("#botonA").click(function(){
    $("ol").append("<li>Item 4</li>");
});

$("#botonB").click(function(){
    $("ol").prepend("<li>Item 0</li>");
})

$("#botonC").click(function(){
    $("#cajita").show(2000, function(){
            $("body").append("<footer><p>Todos los derechos reservados</p></footer>");
        })
    });
