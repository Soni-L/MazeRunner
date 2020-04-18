const [visit, explore, printResult] = require("./Helpers");

//#region Shared Memory - we use these variables as global memory for the algorithm
//The maze currently being worked on, (this will mutate state)
let workingMaze = [];

//This is an array that we will use like a stack for the DFS (only push and pop operations)
let mazePathStack = [];
//#endregion

//Depth First Search
const dfs = () => {
  //The stack is empty
  //No way out of the maze, we exhausted all possible paths 
  if (mazePathStack.length === 0) {
    return 0;
  }

  //Get the current location point from the stack, and check if we are in the last row
  let currentLocation = mazePathStack[mazePathStack.length - 1];
  if (currentLocation[0] == workingMaze.length - 1) {
    return mazePathStack;
  }

  //Continue the traversal
  let pathsArray = explore(currentLocation, workingMaze);
  //if there are no paths, mark the current location and pop it off the stack
  if (pathsArray.length === 0) {
    workingMaze[currentLocation[0]][currentLocation[1]] = 1;
    mazePathStack.pop();
  } else {
    //visit the next point, update the stack and workingmaze
    [workingMaze, mazePathStack] = visit(
      currentLocation,
      pathsArray,
      workingMaze,
      mazePathStack
    );
  }

  //And go again...
  return dfs();
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

  //value copy the constant inputMaze into the mutable workingMaze
  for (var i = 0, len = inputMaze.length; i < len; i++) {
    workingMaze[i] = inputMaze[i].slice();
  }

  // Step 2
  //We initialize the mazePathStack with the entry point coordinate:[row, column] of the maze
  mazePathStack.push([0, workingMaze[0].indexOf(0)]);
  console.log("Starting point: " + mazePathStack[0]);

  // Step 3 - run the algorithm
  let dfsResult = dfs();
  printResult(dfsResult, "Depth First Search", inputMaze);
})();
