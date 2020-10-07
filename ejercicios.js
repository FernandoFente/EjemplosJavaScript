function producto( a, b ){
    a = parseInt(prompt("Indique un numero"));
    b = parseInt(prompt("Indique un numero"));

    resultado = a * b;

    document.getElementById("caja").innerHTML = resultado;

}

function mayor ( a, b ){
    a = parseInt(prompt("escoja un numero"));
    b = parseInt(prompt("escoja un numero"));

    if(a > b){
        document.getElementById("caja2").innerHTML = a+" es mayor que "+b;
    } else if(a < b) {
        document.getElementById("caja2").innerHTML = b+" es mayor que "+a;
    } else {
        document.getElementById("caja2").innerHTML = a+" tiene el mismo valor que "+b;
    }
}

function nombre( nombre , apellido ){
    return nombre+ " " + apellido;
}

resultado3 = nombre( "Fernando", "Fente");
document.getElementById("caja3").innerHTML = resultado3;


function calcularDesc( monto, medioPago ){
    monto = document.getElementById("monto").value
    medioPago = document.getElementById("medioPago").value

    if( monto < 200){
        document.getElementById("caja4").innerHTML = "usted no tiene ningun descuento, su monto a pagar es " + monto;
    } else if( monto >= 200 && monto < 400) {
        switch( medioPago ){
            case 'E':
                resultDesc = monto - (monto * 0.3);
                document.getElementById("caja4").innerHTML = "Su monto a pagar con un desc del 30% es = "+resultDesc;
                break;
            case 'D':
                resultDesc = monto - (monto * 0.2);
                document.getElementById("caja4").innerHTML = "Su monto a pagar con un desc del 20% es = "+resultDesc;
                break;
            case 'C':
                resultDesc = monto - (monto * 0.1);
                document.getElementById("caja4").innerHTML = "Su monto a pagar con un desc del 10% es = "+resultDesc;
                break;
            default:
                document.getElementById("caja4").innerHTML = "Ha ocurrido un error";
        }
    } else {
        let resultado = monto - (monto * 0.4);
        document.getElementById("caja4").innerHTML = "Su monto a pagar con un desc del 40 % es "+resultado;
    }
}

function button(edad){
    edad = prompt("indique su edad");
    if(edad < 18){
        document.getElementById("caja5").innerHTML = "Usted es menor, NO tiene edad para conducir";
    } else{
        document.getElementById("caja5").innerHTML = "Usted ya es mayor, tiene edad para conducir";
    }
}

function button2(nota){
    nota = parseInt(prompt("indique la calificacion"));
    switch(nota){
        case 0:
        case 1:
        case 2:
        case 3:
            document.getElementById("caja6").innerHTML = "Muy deficiente";
            break;
        case 4:
        case 5:
            document.getElementById("caja6").innerHTML = "Insuficiente";
            break;
        case 6:
            document.getElementById("caja6").innerHTML = "Suficiente";
            break;
        case 7:
            document.getElementById("caja6").innerHTML = "Bien";
            break;
        case 8:
        case 9:
            document.getElementById("caja6").innerHTML = "Notable";
            break;
        case 10:
            document.getElementById("caja6").innerHTML = "Sobresaliente";
            break;
        default:
            document.getElementById("caja6").innerHTML = "Nota erronea";
    }
}
