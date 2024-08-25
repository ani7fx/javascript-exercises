const palindromes = function (str) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

    // let arr = str.split("");
    let arr = str
        .toLowerCase()
        .split("")
        .filter(char => alphanumerical.includes(char))
        .join("");

    let reverse = arr.split("").reverse().join("");
    return (arr == reverse);
};

// Do not edit below this line
module.exports = palindromes;
