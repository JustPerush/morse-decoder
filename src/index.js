const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const SPACE = `**********`
    const DOT = `10`
    const DASH = `11`
    const LEFT_PAD = `00`
    const SHIFT = 10
    const MORSE_TABLE_ARRAY = Object.entries(MORSE_TABLE)
    let startSymbolIndex = 0
    let numberOfEncodedSymbols = expr.length/10
    let symbolsDecoded = 0
    let decodedExpr = ``
    while (symbolsDecoded < numberOfEncodedSymbols){
        let encodedSymbol = expr.slice(startSymbolIndex, startSymbolIndex+SHIFT)
        if (encodedSymbol === SPACE) {
            decodedExpr += ` `
            startSymbolIndex += SHIFT
            symbolsDecoded++
            continue
        }
        let decodedSymbol = ``
        for (let i = 0; i < encodedSymbol.length; i += 2){
            let encodedSubSymbol = encodedSymbol[i] + encodedSymbol[i+1]
            if (encodedSubSymbol === LEFT_PAD) continue
            if (encodedSubSymbol === DOT) {
                decodedSymbol +=`.`
            }
            if (encodedSubSymbol === DASH) {
                decodedSymbol += `-`
            }
        }
        MORSE_TABLE_ARRAY.forEach(([value, key]) => {
            if (value === decodedSymbol) {
                decodedExpr += key
            }
        })
        startSymbolIndex += SHIFT
        symbolsDecoded++
    }
    return decodedExpr
}




