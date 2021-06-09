export const SumArray = (digit) => {//función que toma un número y suma todas sus cifras
    let arr = [];
    let n = digit.toString();
    arr = n.split("");
    return arr.reduce((acum,val) => acum = acum + parseInt(val),0);
}

export const ReduceArray = (acum,val) => {
    return acum + parseInt(val)
}

export const LongCardNumber = (number) => {
    const long = number.length
    if ((long < 13) || (long > 19)) {
        return false
    } else {
        return true
    }
}

