const repeatString = function(str, num) {
    res = "";
    if (num < 0){
        return "ERROR"
    }
    for (i = 0; i < num; i++){
        res += str;
    }
    return res
};

// Do not edit below this line
module.exports = repeatString;
