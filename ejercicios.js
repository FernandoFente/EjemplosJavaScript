function producto( a, b ){
    return a * b;
}

var resultado = producto( 2, 5 );

document.getElementById("caja").innerHTML = resultado;

function mayor ( a, b ){
    if(a > b){
        document.getElementById("caja2").innerHTML = a+" es mayor que "+b;
    } else if(a < b) {
        document.getElementById("caja2").innerHTML = b+" es mayor que "+a;
    } else {
        document.getElementById("caja2").innerHTML = a+" tiene el mismo valor que "+b;
    }
}

var resultado2 = mayor( 100, 100 );

function nombre( nombre , apellido ){
    return nombre+ " " + apellido;
}

resultado3 = nombre( "Fernando", "Fente");
document.getElementById("caja3").innerHTML = resultado3;


function calcularDesc( monto, medioPago ){
    if( monto < 200){
        document.getElementById("caja4").innerHTML = "usted no tiene ningun descuento, su monto a pagar es " + monto;
    } else if( monto >= 200 && monto < 400) {
        switch( medioPago ){
            case 'E':
                resulDesc = monto - (monto * 0.3);
                document.getElementById("caja4").innerHTML = "Su monto a pagar con un desc del 30% es "+resultDesc;
                break;
            case 'D':
                resultDesc = monto - (monto * 0.2);
                document.getElementById("caja4").innerHTML = "Su monto a pagar con un desc del 20% es "+resultDesc;
                break;
            case 'C':
                resultDesc = monto - (monto * 0.1);
                document.getElementById("caja4").innerHTML = "Su monto a pagar con un desc del 10% es "+resultDesc;
            default:
                document.getElementById("caja4").innerHTML = "Ha ocurrido un error";
        }
    } else {
        let resultado = monto - (monto * 0.4);
        document.getElementById("caja4").innerHTML = "Su monto a pagar con un desc del 40 % es "+resultado;
    }
}

calcularDesc(300, 'C');
