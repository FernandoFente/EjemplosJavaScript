function borrar(){
    document.getElementById("depto").value = "";
    document.getElementById("piso").value = "";
}

function llamar(depto,piso){
    depto = document.getElementById("depto").value;
    piso = document.getElementById("piso").value;
    /*alert(piso);
    alert(depto);*/
    let mensaje = "llamando a piso "+piso+" departamento "+depto;
    /*alert(mensaje);*/
    if(piso<=48 && depto<=9){
        document.getElementById("llamando").value = mensaje;
    }else if(piso > 49){
        alert("el piso no existe");
        document.getElementById("llamando").value = "el piso " +piso+" no existe";
    }
}

function rellenar(num){
    document.getElementById("piso").value = num + num;
}


