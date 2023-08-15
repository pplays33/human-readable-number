const prefixs = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety"
}

module.exports = function toReadable(number) {
    let literal = " hundred";

    if (number <= 20) {
        return prefixs[number];
    }

    if (number < 100) { //54
        return number % 10 === 0 ? prefixs[number] : prefixs[((number / 10) | 0) * 10] + " " + toReadable(number % 10);
    }

    if (number < 1000) { //154
        return number % 100 === 0 ? prefixs[((number / 100) | 0)] + literal : prefixs[((number / 100) | 0)] + literal + " " + toReadable(number % 100);
    }
}
