function convertToRoman(num) {
    let digits = num.toString().split('');
    const roman = {
        1: 'I',
        2: 'II',
        3: 'III',
        4: 'IV',
        5: 'V',
        6: 'VI',
        7: 'VII',
        8: 'VIII',
        9: 'IX',
        10: 'X',
        40: 'XL',
        50: 'L',
        60: 'LX',
        70: 'LXX',
        80: 'LXXX',
        90: 'XC',
        100: 'C',
        400: 'CD',
        500: 'D',
        600: 'DC',
        700: 'DCC',
        800: 'DCCC',
        900: 'CM',
        1000: 'M',
    };

    if (digits.length === 2) {
        digits[0] += '0';
    } else if (digits.length === 3) {
        digits[0] += '00';
        digits[1] += '0';
    } else if (digits.length === 4) {
        digits[0] += '000';
        digits[1] += '00';
        digits[2] += '0';
    }

    for (let i = 0; i < digits.length; i++) {
        if (digits[i] == 0) {
            digits.splice(i, 1)
        }
    }

    for (let i = 0; i < digits.length; i++) {
        if (roman.hasOwnProperty(digits[i])) {
            digits[i] = roman[digits[i]];
        } else {
            let temp = '';
            for (let j = 0; j < digits[i][0]; j++) {
                temp += roman[digits[i] / digits[i][0]];
            }
            digits[i] = temp;
        }
    }
    digits = digits.join('');

    return digits;
}


// ! Tests
/* 
    convertToRoman(2) should return the string II.
    convertToRoman(3) should return the string III.
    convertToRoman(4) should return the string IV.
    convertToRoman(5) should return the string V.
    convertToRoman(9) should return the string IX.
    convertToRoman(12) should return the string XII.
    convertToRoman(16) should return the string XVI.
    convertToRoman(29) should return the string XXIX.
    convertToRoman(44) should return the string XLIV.
    convertToRoman(45) should return the string XLV.
    convertToRoman(68) should return the string LXVIII
    convertToRoman(83) should return the string LXXXIII
    convertToRoman(97) should return the string XCVII
    convertToRoman(99) should return the string XCIX
    convertToRoman(400) should return the string CD
    convertToRoman(500) should return the string D
    convertToRoman(501) should return the string DI
    convertToRoman(649) should return the string DCXLIX
    convertToRoman(798) should return the string DCCXCVIII
    convertToRoman(891) should return the string DCCCXCI
    convertToRoman(1000) should return the string M
    convertToRoman(1004) should return the string MIV
    convertToRoman(1006) should return the string MVI
    convertToRoman(1023) should return the string MXXIII
    convertToRoman(2014) should return the string MMXIV
    convertToRoman(3999) should return the string MMMCMXCIX
*/