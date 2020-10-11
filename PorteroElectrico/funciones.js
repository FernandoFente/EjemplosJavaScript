function borrar(){
    document.getElementById("depto").value = "";
    document.getElementById("piso").value = "";
    document.getElementById("llamando").value = "";
    let audio = new Audio("beep_short.ogg");
    audio.play();
}

function llamar(depto,piso){
    depto = document.getElementById("depto").value;
    piso = document.getElementById("piso").value;
    /*alert(piso);
    alert(depto);*/
    let mensaje = "llamando a piso "+piso+" departamento "+depto;
    /*alert(mensaje);*/
    if(piso > 48){
        document.getElementById("llamando").value = "el piso "+piso+" no existe (01 - 48)";
        document.getElementById("llamando").style.color = "red";
    }else if( depto > 6){
        document.getElementById("llamando").value = "el depto " +depto+" no existe (1 - 6)";
        document.getElementById("llamando").style.color = "red";
    } else {
        document.getElementById("llamando").value = mensaje;
        document.getElementById("llamando").style.color = "green";
    }
}

function rellenar(num){
    let valor = document.getElementById("piso").value + num;
    if(valor.length <= 2){
        document.getElementById("piso").value = valor;
    } else{
        document.getElementById("depto").value = num;
    }

    let audio = new Audio("beep_short.ogg");
    audio.play();
}
