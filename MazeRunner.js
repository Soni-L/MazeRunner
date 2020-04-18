const [visit, explore] = require("./Helpers");

//#region shared memory - we use these variables as global memory for the algorithm
//The maze currently being worked on, (this will mutate state)
let workingMaze = [];

//This is an array that we will use like a stack for the DFS (only push and pop ops allowed)
let mazePathStack = [];

//The que for the BFS algorithm
let mazePathQue = [];

//#endregion

//Start Here!
(() => {
  // Step 1
  //We provide a maze as a 2D Array, 1s are walls and 0s are paths
  //the array must have the same numer of elements in each row and there should be a
  //single point of entry (0) in the first row, for this program to complete without errors
  //the exit point will be considered any (0) in the last row
  const inputMaze = [
    [1, 0, 1, 1, 1, 1],
    [0, 0, 0, 0, 1, 1],
    [1, 1, 0, 1, 1, 1],
    [1, 0, 0, 1, 1, 1],
    [1, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 0, 1],
  ];
  //workingMaze init
  workingMaze = inputMaze;

  // Step 2
  //We initialize the mazePathStack with the entry coordinate:[row, column] of the inputMaze
  mazePathStack.push([0, 1]);

  [workingMaze, mazePathStack] = visit(
    [0, 1],
    [[1, 1]],
    workingMaze,
    mazePathStack
  );
  console.log(workingMaze);
  console.log(mazePathStack);
  //console.log(explore([0, 1], workingMaze));
})();
