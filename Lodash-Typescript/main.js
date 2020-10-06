var arr = ["a", "b", "c", "d"];
var size = 2;
var numArr = [1, 2, 3, 4, 5];
var ele = 3;
// 1. Chunk
var arrChunck = function (arr, size) {
    var res = [];
    var tempRes = [];
    arr.forEach(function (ele, index) {
        if ((index + 1) % size === 0) {
            res.push(tempRes);
            tempRes = [];
        }
        tempRes.push(ele);
    });
    console.log(res);
};
arrChunck(arr, size);
// 2. Find
var arrFind = function (arr, ele) {
    arr.forEach(function (element, index) {
        if (element === ele) {
            return ele;
        }
    });
};
console.log(arrFind(numArr, ele));
// 3. Reduce
var arrReduce = function (arr, size, acc) {
    if (acc === undefined) {
        acc = arr[0];
    }
    arr.forEach(function (ele) {
        console.log(acc);
        acc += ele;
    });
    return acc;
};
console.log(arrReduce(numArr, size));
// 4. compact
var arrCompact = function (arr) {
    var res = [];
    arr.forEach(function (element) {
        if (element === false ||
            element === null ||
            element === 0 ||
            element === undefined ||
            element === NaN ||
            element === "") {
        }
        else {
            res.push(element);
        }
    });
    return res;
};
console.log(arrCompact(arr));
//5. sum
var arrSum = function (arr) {
    var res = 0;
    arr.forEach(function (ele) {
        res += ele;
    });
    return res;
};
console.log(arrSum(numArr));
