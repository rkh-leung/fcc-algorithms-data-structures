function convertToRoman(num) {
    const digit = num.toString().split('').length - 1
    let value = num.toString().split('e')
    let temp = num
    const arr = []
    const counter = []
    const romanObj = {
        1: 'I',
        5: 'V',
        10: 'X',
        50: 'L',
        100: 'C',
        500: 'D',
        1000: 'M',
    }
    const srcKeys = Object.keys(romanObj)

    console.log(value, 'digit:', digit)
    for (let i = digit; i >= 1; i--) {
        // loop through the the number of digits in a number
        value = Math.floor(+(value[0] + 'e' + -i))
        value = value.toString().split('e')
        value = +(value[0] + 'e' + i)
        temp -= value
        if (value) arr.push(value)
        value = temp.toString().split('e')
    }
    if (temp) arr.push(temp)
    for (let i = 0; i < arr.length; i++) {
        let n = 10
        let k = 0
        for (let j = 0; j < srcKeys.length; j++) {
            if (
                Math.floor(arr[i] / srcKeys[j]) !== 0 &&
                Number.isInteger(arr[i] / srcKeys[j]) <= n
            ) {
                n = arr[i] / srcKeys[j]
                k = j
            }
        }
        if (Number.isInteger(n)) {
            if (n > 3) {
                counter.push(romanObj[srcKeys[k]].concat(romanObj[srcKeys[k + 1]]))
            } else {
                counter.push(romanObj[srcKeys[k]].repeat(n))
            }
        } else {
            console.log(arr[i], srcKeys[k])
            console.log((arr[i] - srcKeys[k]) / srcKeys[k - 1])
            if ((arr[i] - srcKeys[k]) / srcKeys[k - 1] > 3) {
                counter.push(romanObj[srcKeys[k - 1]] + romanObj[srcKeys[k + 1]])
            } else {
                counter.push(
                    romanObj[srcKeys[k]] +
                    romanObj[srcKeys[k - 1]].repeat(
                        (arr[i] - srcKeys[k]) / srcKeys[k - 1]
                    )
                )
            }
        }
    }
    console.log('counter:', counter)
    return counter.join('')
}

convertToRoman(2014)
