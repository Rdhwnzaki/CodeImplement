//Deteksi Palindrom
const deteksiPalindrom = (kata) => {
    let newkata = kata.toLowerCase()
    const splitKata = newkata.split('')
    const revKata = splitKata.reverse()
    const joinKata = revKata.join('')
    if (newkata === joinKata) {
        console.log(`${newkata} adalah kata palindrom`)
    } else {
        console.log(`${newkata} bukan kata palindrom`)
    }
}
deteksiPalindrom('tidur')

// Reverse Word
const reverseWord = (kalimat) => {
    const splitKalimat = kalimat.split(' ')
    const revKalimat = splitKalimat.reverse()
    const joinKalimat = revKalimat.join(' ')
    return console.log(joinKalimat)
}
reverseWord('Aku adalah Ridhwan')