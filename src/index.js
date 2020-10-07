const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    expr = expr.split('')
    let arr = [];
    for (let i = 0; i < expr.length; i += 10) {
        const arrDown = expr.slice(i, i + 10);
        // console.log(arrDown)
        let newArrDown = [];
        for (let j = 0; j < arrDown.length; j += 2) {
            if (arrDown[j].includes('*')) continue
            const doubleArr = arrDown.slice(j, j + 2).join('')
            // console.log(doubleArr)
            newArrDown.push(doubleArr)
        }
        newArrDown = newArrDown.filter(item => item === '10' || item === '11').map(item => item === '10' ? item = '.' : item = '-').join('')
        arr.push(newArrDown)
    }
    // console.log(arr)
    const resStr = arr.map(item => item === '' ? item = ' ' : item = MORSE_TABLE[item]).join('')
    // console.log(resStr)
    return resStr
}

module.exports = {
    decode
}