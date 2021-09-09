const longPalindrome = 'Dammit I’m mad.\n' +
    'Evil is a deed as I live.\n' +
    'God, am I reviled? I rise, my bed on a sun, I melt.\n' +
    'To be not one man emanating is sad. I piss.\n' +
    'Alas, it is so late. Who stops to help?\n' +
    'Man, it is hot. I’m in it. I tell.\n' +
    'I am not a devil. I level “Mad Dog”.\n' +
    'Ah, say burning is, as a deified gulp,\n' +
    'In my halo of a mired rum tin.\n' +
    'I erase many men. Oh, to be man, a sin.\n' +
    'Is evil in a clam? In a trap?\n' +
    'No. It is open. On it I was stuck.\n' +
    'Rats peed on hope. Elsewhere dips a web.\n' +
    'Be still if I fill its ebb.\n' +
    'Ew, a spider… eh?\n' +
    'We sleep. Oh no!\n' +
    'Deep, stark cuts saw it in one position.\n' +
    'Part animal, can I live? Sin is a name.\n' +
    'Both, one… my names are in it.\n' +
    'Murder? I’m a fool.\n' +
    'A hymn I plug, deified as a sign in ruby ash,\n' +
    'A Goddam level I lived at.\n' +
    'On mail let it in. I’m it.\n' +
    'Oh, sit in ample hot spots. Oh wet!\n' +
    'A loss it is alas (sip). I’d assign it a name.\n' +
    'Name not one bottle minus an ode by me:\n' +
    '“Sir, I deliver. I’m a dog”\n' +
    'Evil is a deed as I live.\n' +
    'Dammit I’m mad.'

function palindrome(str) {
    const newStr = str.replace(/\W|_/g, '').toLowerCase()
    const reversed = newStr.split('').reverse().join('')
    return newStr === reversed
}

function palindromeLoop(str) {
    const newStr = str.replace(/\W|_/g, '').toLowerCase()
    const length = newStr.length
    for (let i = 0; i < length; i++) {
        if (newStr[i] !== newStr[length - i - 1]) {
            return false
        }
    }
    return true
}

const performance = (fn, str, iteration) => {
    const data = []
    for (let i = 0; i < iteration; i++) {
        const start = process.hrtime.bigint()
        fn(str)
        const end = process.hrtime.bigint()
        data.push(end - start)
    }
    const ns = data.reduce((a, v) => (a + v), BigInt(0)) / BigInt(data.length)
    return console.log(`Passage is ${longPalindrome.length} chars.\nTimelapsed for running ${fn.name} ${iteration} times. \nAn average time of ${ns} nanoseconds`)
}

performance(palindromeLoop, longPalindrome, 20)
performance(palindrome, longPalindrome, 20)
