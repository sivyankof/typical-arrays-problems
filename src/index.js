exports.min = function min(array) {
    if (array == null || array.length == 0) {
        return 0;
    }
    return Math.min(...array);
};

exports.max = function max(array) {
    if (array == null || array.length == 0) {
        return 0;
    }
    return Math.max(...array);
};

exports.avg = function avg(array) {
    if (array == null || array.length == 0) {
        return 0;
    }
    let sum = [...array].reduce((a, b) => a + b, 0);
    let result = sum / array.length;
    console.log(result);
    return result.toFixed(2);
};


