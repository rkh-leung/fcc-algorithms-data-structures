function checkCashRegister(price, cash, cid) {
    const value = [
        ['PENNY', 0.01],
        ['NICKEL', 0.05],
        ['DIME', 0.1],
        ['QUARTER', 0.25],
        ['ONE', 1],
        ['FIVE', 5],
        ['TEN', 10],
        ['TWENTY', 20],
        ['ONE HUNDRED', 100],
    ]
    const arr = []
    const obj = {
        status: 'OPEN',
    }
    let currentChange = cash - price
    let currencyOnHand
    let changeRequired
    let sum = cid.reduce((a, b) => a + b[1], 0)
    console.log(sum)

    for (let i = value.length - 1; i >= 0; i--) {
        currencyOnHand = Math.round(cid[i][1] / value[i][1])
        changeRequired = (currentChange / value[i][1]).toFixed(2)
        console.log(currencyOnHand)
        console.log(changeRequired)

        if (sum === currentChange) {
            let temp = currencyOnHand * value[i][1]
            currentChange -= temp
            arr.push([value[i][0], temp])
        } else if (changeRequired > 1 && currentChange >= 0) {
            if (changeRequired > currencyOnHand) {
                let temp = currencyOnHand * value[i][1]
                currentChange -= temp
                arr.push([value[i][0], temp])
            } else if (currencyOnHand > changeRequired) {
                let temp = Math.floor(changeRequired) * value[i][1]
                currentChange -= temp
                arr.push([value[i][0], temp])
            } else {
                let temp = Math.floor(changeRequired) * value[i][1]
                currentChange -= temp
                arr.push([value[i][0], temp])
            }
        }
    }

    if (+changeRequired > currencyOnHand) {
        obj.status = 'INSUFFICIENT_FUNDS'
        obj.change = []
    } else if (currencyOnHand === +changeRequired) {
        obj.status = 'CLOSED'
        obj.change = arr.reverse()
    } else {
        obj.change = arr
    }

    return obj
}

checkCashRegister(3.26, 100, [
    ['PENNY', 1.01],
    ['NICKEL', 2.05],
    ['DIME', 3.1],
    ['QUARTER', 4.25],
    ['ONE', 90],
    ['FIVE', 55],
    ['TEN', 20],
    ['TWENTY', 60],
    ['ONE HUNDRED', 100],
])
