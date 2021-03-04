let b = document.getElementById("ingresar")//Entrada de los datos de la tarjeta
b.addEventListener("click",cardValidator);//Evento que invoca los datos y activa la verificación

function cardValidator() {

    let n = document.getElementById("num_tarjeta");//lectura de los dígitos de la tarjeta
    let card_number = n.value.toString();
    console.log("numerito")
    console.log(card_number)
    if ((card_number.length < 13) || (card_number.length >19) ) {//revisa que la tarjeta contenga 16 dígitos(caracteres), esta tiene que ser de los primeros condicionales
        if (card_number.length < 13)
        alert("Error, el número de la tarjeta no puede ser menor a 13 dígitos")
        else if (card_number.length > 19)
        alert("Error, el número de la tarjeta no puede ser mayor a 19 dígitos")
    }


    //paso 1, guardar un número dentro de un array 
    let array_card = [];//array que va a contener el número de la tarjeta
    array_card = card_number.split("");//Guardar número de la tarjeta en un arreglo (de tipo string, cada número separado por comas)
    
    // paso 2 invertir el orden del arreglo
    //array_card.reverse();//En esta línea invertimos el array que contiene los números de la tarjeta

    let array_operaciones1 = [];//Array donde guardaremos las operaciones realizadas

    for (let i = 0; i < array_card.length; i++) {

        let pos_par = i % 2;//paso 3 verficar que elementos están en posiciones pares

        let multiplicar = 2*(array_card[i]);//paso 4 multiplicar por 2 esos elementos

        let suma_digitos = sumar(multiplicar);//aquí guardaremos la súma de los dígitos cuya multiplicación es mayor o igual a 10

        if (pos_par == 0 && multiplicar >= 10) {//paso 5 si el resultado de la multipiplicación es mayor o igual a 10, sumar ambos dígitos
            array_operaciones1 [i] = suma_digitos.toString();
        }
        else if (pos_par == 0 && multiplicar < 10) {
            array_operaciones1 [i] = multiplicar.toString();
        }
        else {
            array_operaciones1 [i] = array_card [i];
        }//paso 6 guardar esos resultados en un array
    }
    console.log(array_operaciones1)
    //paso 7 sumamos todos los dígitos del array de resultados
    const reducir = (acumulador,valor_actual) => acumulador + parseInt(valor_actual);//Función flecha, contiene los parámetros para sumar todos los dígitos de la tarjeta
    const numero_valido = array_operaciones1.reduce(reducir,0);//Sumamos todos los dígitos y lo guardamos en una constante
    
    //paso 8 verificar si la tarjeta es válida
    // número válido termina en 0, la tarjeta es válida (ej: 80). Excepto si número valido es igual a 0, en cuyo caso la tarjeta no es valida
    if ((numero_valido % 10 == 0) && (numero_valido == 0)) {
        alert("ERROR!: La tarjeta no es válida, el número de la tarjeta no puede ser 0");
        console.log("(numero_valido % 10 == 0) && (numero_valido == 0)");
        console.log(numero_valido);
    }
    else if ((numero_valido % 10 == 0) && ((card_number.length < 13) || (card_number.length >19))) {
        alert("La tarjeta no es válida");
        console.log("(numero_valido % 10 == 0) && ((card_number.length < 13) || (card_number.length >19))")
        console.log(numero_valido);
    }
    else if ((numero_valido % 10 == 0) && (13 <= card_number.length <= 19)) {
        const enma = enmascarar(card_number);
        alert("La tarjeta es válida, su compra ha sido procesada con éxito, los últimos dígitos de su tarjeta son: " + enma);
        console.log("(numero_valido % 10 == 0) && (13 <= card_number.length <= 19)")
        console.log(numero_valido);
    }
    else {
        alert("ERROR!: La tarjeta no es válida");
        console.log(numero_valido)
    } 
        /*
        const enma = enmascarar(card_number);
        console.log(enma);
        console.log(array_card);
        */
}