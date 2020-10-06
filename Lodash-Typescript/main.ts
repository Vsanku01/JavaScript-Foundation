let arr: string[] = ["a", "b", "c", "d"];
let size: number = 2;
let numArr: number[] = [1, 2, 3, 4, 5];
let ele = 3;

// 1. Chunk
let arrChunck = (arr: any[], size: number) => {
  let res = [];
  let tempRes = [];
  arr.forEach((ele, index) => {
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
const arrFind = (arr: number[], ele: number) => {
  arr.forEach((element, index) => {
    if (element === ele) {
      return ele;
    }
  });
};

console.log(arrFind(numArr, ele));

// 3. Reduce
const arrReduce = (arr: number[], size: number, acc?: number) => {
  if (acc === undefined) {
    acc = arr[0];
  }
  arr.forEach((ele) => {
    console.log(acc);
    acc += ele;
  });
  return acc;
};

console.log(arrReduce(numArr, size));

// 4. compact
const arrCompact = (arr: any[]) => {
  let res = [];
  arr.forEach((element) => {
    if (
      element === false ||
      element === null ||
      element === 0 ||
      element === undefined ||
      element === NaN ||
      element === ""
    ) {
    } else {
      res.push(element);
    }
  });
  return res;
};

console.log(arrCompact(arr));

//5. sum
const arrSum = (arr: number[]) => {
  let res = 0;
  arr.forEach((ele) => {
    res += ele;
  });
  return res;
};

console.log(arrSum(numArr));
