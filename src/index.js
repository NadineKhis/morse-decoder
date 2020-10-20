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
    '**********': ' ',
};


function sliding(arr, n) {
    let res = []
    for (let i = 0; i < arr.length; i += n) {
        res.push(arr.slice(i, i + n))
    }
    return res
}

const encoding = {
    '10': '.',
    '11': '-',
    '00': '',
    '**': '**'
}

function decode(expr) {
    let words = sliding(expr, 10)

    let morseCode =
        words.map(word =>
            sliding(word, 2).map(pair => encoding[pair]).join('')
        )
    return morseCode.map(seq => MORSE_TABLE[seq]).join('')
}


module.exports = {
    decode
}