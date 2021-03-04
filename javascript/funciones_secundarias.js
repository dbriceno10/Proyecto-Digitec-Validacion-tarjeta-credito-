function sumar(num) {//función que toma un número y suma todas sus cifras
    let arr = [];
    let n = num.toString();
    arr = n.split("");
    return arr.reduce((acumulador,valor_actual) => acumulador = acumulador + parseInt(valor_actual),0);
}

function enmascarar (num) {//función que muestra los últimos 4 números de la tarjeta y oculta los demás
    if (num !=0) {
        let arr1 = [];
        let arr2 = [];
        let n = num.toString();
        arr1 = n.split("");
        for (let i = 0; i < n.length -4; i++) {
            arr2 [i] = "#";
            arr1 [i] = arr2 [i];
        }
        return arr1.reduce((acumulador,valor_actual) => acumulador + valor_actual);
    }
    else {
        return 0
    }
}