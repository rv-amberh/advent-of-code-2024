let input = [[1, 1, 2, 3],
             [1, 2, 3, 2],
             [2, 1, 2, 1], 
             [2, 1, 1, 1]];

// console.log(input, 'input');

//iterate through the nested array with [r, c] or [i, j] 
//check for one cell to the right and down
//check if there is a valid place at arrs[i][j + 1] or arrs[i+ i][j]
//if so check if its the same num, if so increment val in holder

const findConnectedCells = (arrs) => {
    const holder = {};

    for (let i = 0; i < arrs.length - 1; i++) {
        for(let j = 0; j < arrs[i].length - 1; j++) {
            if (arrs[i + 1][j] == arrs[i][j]) {
                holder[arrs[i][j]] ? holder[arrs[i][j]]++ : holder[arrs[i][j]] = 1;
                console.log(i, j,  "found at")
            }
            console.log(holder, "holder");
        }
    }
 }

 findConnectedCells(input);

 class LinkedList {
    constructor()
 }