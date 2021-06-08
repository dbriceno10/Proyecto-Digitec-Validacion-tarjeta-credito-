const SumArray = (digit) => {//función que toma un número y suma todas sus cifras
    let arr = [];
    let n = digit.toString();
    arr = n.split("");
    return arr.reduce((acum,val) => acum = acum + parseInt(val),0);
}

export default SumArray