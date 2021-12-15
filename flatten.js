//TestData:
const testArray1 = [1, 2, 3, 4];
const testArray2 = [1, [2, 3], [4, [5, 6]], 7];
const testArray3 = [23, [40], 36, [12, 13, [45, 76, [80, 82, [91, 92], 29]], 13]];
const testArray4 = [100, [200, [300, [400, [500, 600], 700], 800], 900], 1000];
const testArray5 = ["a", ["b", "c"], ["d", ["e", "f"], "g"], "h", "i"];

//Flatten function:
const flatten = (arr) => {
  let resultArray = [];

  //iterate through array and recursively flatten as subarrays are detected
  arr.forEach((element) => {
    if (Array.isArray(element)) {
      //this if statement will be entered if a nested array is detected
      //Need to recursively call flatten and add result to resultArray
    } else {
      resultArray.push(element);
    }
  });

  return resultArray;
};

//Application of flatten function using test data:

const resultArray1 = flatten(testArray1);
const resultArray2 = flatten(testArray2);
const resultArray3 = flatten(testArray3);
const resultArray4 = flatten(testArray4);
const resultArray5 = flatten(testArray5);

//Test-case 1
console.log("--TestArray1--");
console.log("BEFORE:");
console.log(testArray1);
console.log("AFTER:");
console.log(resultArray1);
console.log("-------------");

//Test-case 2
console.log("--TestArray2--");
console.log("BEFORE:");
console.log(testArray2);
console.log("AFTER:");
console.log(resultArray2);
console.log("-------------");

//Test-case 3
console.log("--TestArray3--");
console.log("BEFORE:");
console.log(testArray3);
console.log("AFTER:");
console.log(resultArray3);
console.log("-------------");

//Test-case 4
console.log("--TestArray4--");
console.log("BEFORE:");
console.log(testArray4);
console.log("AFTER:");
console.log(resultArray4);
console.log("-------------");

//Test-case 5
console.log("--TestArray5--");
console.log("BEFORE:");
console.log(testArray5);
console.log("AFTER:");
console.log(resultArray5);
console.log("-------------");
