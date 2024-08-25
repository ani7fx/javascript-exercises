const fibonacci = function(position) {
    if (typeof position != 'number'){
        position = parseInt(position)
    }
    if (position == 0) return 0
    if (position < 0) return "OOPS"
    let firstPrev = 1;
    let SecondPrev = 0;
    for (i = 2; i <= position; i++){
        let current = firstPrev + SecondPrev;
        SecondPrev = firstPrev
        firstPrev = current;
    }
    return firstPrev;
};

// Do not edit below this line
module.exports = fibonacci;
