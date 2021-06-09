import  { SumArray, ReduceArray, LongCardNumber } from "./SumArray.js"

const card_string ="4137894711755904";
const card_string2 = "4095571174987314";
const card_string3 = "5117444488188614";
const card_string4 = "6165397064636554";
const card_string5 = "4083952015273";


const CardValidator = (digit) => {
    let arrayCard = []
    let arrayAux = []
    arrayCard = digit.split("")

    for(let i = 0; i < arrayCard.length; i++) {
        const mod = i % 2
        const mult = 2 * (arrayCard[i])
        const sum = SumArray(mult)

        if (mod === 0 && mult >= 10) {
            arrayAux [i] = sum.toString()
        } else if (mod === 0 && mult < 10) {
            arrayAux [i] = mult.toString()
        } else {
            arrayAux [i] = arrayCard [i]
        }
    }
    const ValidDigit = arrayAux.reduce(ReduceArray, 0)
    return ValidDigit
}

const valid1 = CardValidator(card_string)
console.log(valid1)

const valid2 = CardValidator(card_string2)
console.log(valid2)

const valid3 = CardValidator(card_string3)
console.log(valid3)

const valid4 = CardValidator(card_string4)
console.log(valid4)

const valid5 = CardValidator(card_string5)
console.log(valid5)