const fs = require("fs");
let arr = [];

const parseInputFile = (filePath) => {
  const data = fs.readFileSync(filePath, "utf-8");
  const lines = data.split("\n");

  lines.forEach((line) => {
    arr.push(line.trim()); // Trim whitespace and push each line
  });
};

// Read the file
let lines = parseInputFile("./input.txt");


const decodeString = (str) => {
  const regex = /mul\((\d+),(\d+)\)/g;
  let total = 0;

  let match;

  while ((match = regex.exec(str)) !== null) {
    let num1 = Number(match[1]);
    let num2 = Number(match[2]);
    total += num1 * num2;
  }

  return total;
};

const inptStr = arr.join(""); // Join array to form the complete input string

// Run the decode function on the input string
console.log(decodeString(inptStr));
