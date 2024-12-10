// const testArr = [3, 4, 2, 1, 3, 3];
// const testArr2 = [4, 3, 5, 3, 9, 3];

// const mergeSort = (arr) => {
//   if (arr.length <= 1) return arr;

//   const midArr = Math.floor(arr.length / 2);
//   const left = mergeSort(arr.slice(0, midArr));
//   const right = mergeSort(arr.slice(midArr));

//   return merge(left, right);
// };

// const merge = (left, right) => {
//   let sorted = [];

//   while (left.length && right.length) {
//     if (left[0] < right[0]) sorted.push(left.shift());
//     else sorted.push(right.shift());
//   }
//   return [...sorted, ...left, ...right];
// };

const fs = require("fs");
const obj = {};

const parseInputFile = (filePath) => {
  const data = fs.readFileSync(filePath, "utf-8");

  const lines = data.split("\n");

  const list1 = [];
  const list2 = [];

  lines.forEach((line) => {
    if (line.trim()) {
      const [key, value] = line.split(/\s+/);
      list1.push(key);
      list2.push(value);
      obj[key] = 0;

    }
  });

  return { list1, list2 };
};

const { list1, list2 } = parseInputFile("./input.txt");

const returnDifferenceOfArrays = (arr, arr2) => {
  const sortedArr1 = arr.sort((a, b) => a - b);
  const sortedArr2 = arr2.sort((a, b) => a - b);
  let res = 0;
  let sims = 0;
  

  for (let i = 0; i < sortedArr1.length; i++) {
    let differences = sortedArr2[i] - sortedArr1[i];
    

    if (Object.keys(obj).includes(sortedArr2[i])) {
      obj[sortedArr2[i]]++;
    }

    // console.log(
    //   sortedArr1[i] + " - " + sortedArr2[i] + " = " + Math.abs(differences)
    // );

    res +=  Math.abs(differences);
  }
  Object.keys(obj).map((k) => {sims += obj[k] * k});
  console.log(sims, "sims");
  return res;
};

returnDifferenceOfArrays(list1, list2);
// console.log(obj, "obj");
