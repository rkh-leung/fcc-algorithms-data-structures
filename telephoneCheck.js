function telephoneCheck(str) {
    const regex =
        /(^\d{10}$|(^\(\d{3}\)|^\d{3}\D)\d{3}\D\d{4}$)|^[1](\s\d{3}([ \-])|\s?\(\d{3}\)\s?)/
    return regex.test(str)
}

telephoneCheck('55553455545')
