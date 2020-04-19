const [visit, explore, printResult] = require("./Helpers");

//#region Shared Memory
//The working maze
let workingMaze = [];

//This is an array that we will use like a stack for the DFS (only push and pop operations)
let mazePathStack = [];
//#endregion

//Depth First Search
const dfs = () => {
  // 1) The stack is empty. No way out of the maze, we exhausted all possible paths in the graph.
  if (mazePathStack.length === 0) {
    return 0;
  }

  // 2) Check if current top stack coordinate is in the last row, which means we found the exit.
  let currentLocation = mazePathStack[mazePathStack.length - 1];
  if (currentLocation[0] == workingMaze.length - 1) {
    return mazePathStack;
  }

  // 3) Proceed to traverse the maze/graph.
  let pathsArray = explore(currentLocation, workingMaze);
  // 3.1) If there are no paths (we hit a dead end), mark the current location and pop it off the stack (BACKTRACK!)
  if (pathsArray.length === 0) {
    workingMaze[currentLocation[0]][currentLocation[1]] = 1;
    mazePathStack.pop();
  }
  // 3.2) Visit the next point coordinate.
  else {
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
  //We provide a maze as a 2D Array, 1s are walls and 0s are paths, outer-elements are the rows, the inner-array element indices are the columns.
  //The exit point will be considered any (0) element in the last row.
  const inputMaze = [
    [1, 0, 1, 1, 1, 1],
    [0, 0, 0, 0, 1, 1],
    [1, 0, 1, 0, 0, 0],
    [1, 0, 1, 1, 1, 0],
    [1, 1, 1, 0, 0, 0],
    [1, 1, 1, 0, 1, 1],
  ];

  //Value-copy the constant inputMaze into the mutable workingMaze
  for (var i = 0, len = inputMaze.length; i < len; i++) {
    workingMaze[i] = inputMaze[i].slice();
  }

  // Step 2
  //We initialize the mazePathStack with the entry point coordinate:[row, column]
  mazePathStack.push([0, workingMaze[0].indexOf(0)]);
  console.log("Starting point: " + mazePathStack[0]);

  // Step 3 - run the algorithm
  let dfsResult = dfs();
  printResult(dfsResult, "Depth First Search", inputMaze);
})();
