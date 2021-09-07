function palindrome(str) {
    const newStr = str.replace(/\W|_/g, '').toLowerCase()
    const length = newStr.length
    console.log(length)
    console.log(newStr[4])
    console.log(newStr[5])
    for (let i = 0; i < length; i++) {
        if (newStr[i] !== newStr[length - i - 1]) {
            return false
        }
    }
    return true
}

palindrome('almostomla')
