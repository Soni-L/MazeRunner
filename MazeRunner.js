const explore = require("./Helpers").explore;

//#region shared memory - we use these variables as global memory for the algorithm
//The maze currently being worked on, (this will mutate state)
let workingMaze = [];

//This is an array that we will use like a stack (only push and pop ops allowed)
let mazePathStack = [];

//The que for the BFS algorithm
let mazePathQue = [];

//#endregion

//1) receives the current coordinate and an array of all possible moves
//2) visits the next coordinate in the array
//--if there are several possible paths, the visitation is done in this order going clockwise -> down, left, up, right
//--if there is only one potential path from the current coordinate or no paths at all, marks the current coordinate as visited (1) 
//  and moves to the next (0) coordinate, if there is one.
const visit = (currentCoordinate, coordinatePathsArray) => {
  let visitForwardCoord = [];
  [currentRow, currentCol] = currentCoordinate;

  if ((coordinatePathsArray.length = 1)) {
    inputMaze[currentRow][currentRow] = 1;
  }
};


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

  //// Step 2
  //We initialize the maze_path stack with the entry coordinate:[row, column] of the inputMaze
  mazePathStack.push([0, 1]);

  //
  console.log(explore([0, 1], workingMaze));
})();
