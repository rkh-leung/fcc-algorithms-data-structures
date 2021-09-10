const {longPalindrome, palindrome, palindromeLoop} = require('./palindrome')

const performance = (fn, str, iteration) => {
    const data = []
    for (let i = 0; i < iteration; i++) {
        const start = process.hrtime.bigint()
        fn(str)
        const end = process.hrtime.bigint()
        data.push(end - start)
    }
    const ns = data.reduce((a, v) => (a + v), BigInt(0)) / BigInt(data.length)
    console.log(`\nPassage is ${longPalindrome.length} chars. \nAverage runtime of ${fn.name} after ${iteration} times is: ${ns} nanoseconds. \nIs the passage a palindrome? ${fn(longPalindrome)}`)
    return ns
}

const iteration = 5
console.log(`\nPalindrome is better than PalindromeLoop by ${performance(palindromeLoop, longPalindrome, iteration) - performance(palindrome, longPalindrome, iteration)} nanoseconds`)
