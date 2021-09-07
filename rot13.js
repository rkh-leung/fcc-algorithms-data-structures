function rot13(str) {
    const newStr = str.split('')
    const arr = []

    newStr.forEach((element) => {
        if (/\W/.test(element)) {
            arr.push(element)
        } else if (/\w/.test(element)) {
            if (element.charCodeAt(0) + 13 > 90) {
                arr.push(String.fromCharCode(element.charCodeAt(0) + 12 - 90 + 65))
            } else {
                arr.push(String.fromCharCode(element.charCodeAt(0) + 13))
            }
        }
    })
    return arr.join('')
}

rot13('SERR PBQR PNZC')
