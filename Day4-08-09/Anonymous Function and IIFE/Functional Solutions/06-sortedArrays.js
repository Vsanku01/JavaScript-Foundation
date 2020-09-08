let ar1 = [1, 12, 15, 26, 38];
let ar2 = [2, 13, 17];

var medianOfSorted = function (ar1, ar2) {
  let mergedArray = ar1.concat(ar2);
  let sortedArray = mergedArray.sort((a, b) => {
    return a - b;
  });
  let mid = sortedArray.length / 2;
  if (sortedArray.length % 2 !== 0) {
    return sortedArray[mid];
  } else {
    return sortedArray[mid - 1] + sortedArray[mid] / 2;
  }
};

console.log(medianOfSorted(ar1, ar2));
