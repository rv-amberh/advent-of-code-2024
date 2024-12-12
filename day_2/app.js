const fs = require("fs");

const arrOfArrs = [];

const parseInputFile = (filePath) => {
  const data = fs.readFileSync(filePath, "utf-8");

  const lines = data.split("\n");

  lines.forEach((line) => {
    let arr = [];

    if (line.trim()) {
      arr = line.split(/\s+/);
      let mappedArr = arr.map(Number);
      arrOfArrs.push(mappedArr);
    }
  });
};

parseInputFile("./input.txt");

/* Part One */

const findSafeReports = (arrs) => {
  let safe = 0;

  for (arr of arrs) {
    
    if (arr[0] == arr[1]) continue;

    if (arr[0] < arr[1]) {
      for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1] - arr[i] > 3 || arr[i + 1] - arr[i] < 1) break;
        else if (i == arr.length - 2) safe++;
      }
    } else {
      for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] - arr[i + 1] > 3 || arr[i] - arr[i + 1] < 1) break;
        else if (i == arr.length - 2) safe++;
      }
    }
  }
  return safe;
};

/* Part Two */

// const testCases = [
//     [48, 46, 47, 49, 51, 54,56],
//     [1, 1, 2, 3, 4, 5],
//     [1, 2, 3, 4, 5, 5],
//     [5, 1, 2, 3, 4, 5],
//     [1, 4, 3, 2, 1],
//     [1, 6, 7, 8, 9],
//     [1, 2, 3, 4, 3],
//     [9, 8, 7, 6, 7],
//     [7, 10, 8, 10, 11],
//     [29, 28, 27, 25, 26, 25, 22, 20],
// ]

const isValidArr = (arr) => {
  let isAscending = arr[0] < arr[1];

  for (let i = 0; i < arr.length - 1; i++) {
    let diff = isAscending ? arr[i + 1] - arr[i] : arr[i] - arr[i + 1];
    if (diff > 3 || diff < 1) {
      return false;
    }
  }
  return true;
};

const findSafeReportsWithOnePass = (arrs) => {
  let safe = 0;

  for (arr of arrs) {
    
    if (isValidArr(arr)) {
      safe++;
      continue;
    }

    for (let i = 0; i < arr.length; i++) {
      let tmpArr = arr.slice(0, i).concat(arr.slice(i + 1));

      if (isValidArr(tmpArr)) {
        safe++;
        break;
      }
    }
  }

  return safe;
};

console.log(findSafeReports(arrOfArrs));
console.log(findSafeReportsWithOnePass(arrOfArrs));
