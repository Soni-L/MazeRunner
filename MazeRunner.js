const [visit, explore, printResult] = require("./Helpers");

//#region shared memory - we use these variables as global memory for the algorithm
//The maze currently being worked on, (this will mutate state)
let workingMaze = [];

//This is an array that we will use like a stack for the DFS (only push and pop ops allowed)
let mazePathStack = [];

//The que for the BFS algorithm
let mazePathQue = [];

//#endregion

//Depth first search
const dfs = () => {
  //No paths out of the maze, we exhaustead all possible paths
  if (mazePathStack.length === 0) {
    return 0;
  }

  //get the current location from the stack, and check if we are done
  let currentLocation = mazePathStack[mazePathStack.length - 1];
  if (currentLocation[0] == workingMaze.length - 1) {
    return mazePathStack;
  }

  //continue the traversal
  let pathsArray = explore(currentLocation, workingMaze);
  //if there are no paths, mark the current location and
  //pop it off the stack
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

  //and again...
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
  //workingMaze init
  workingMaze = [...inputMaze];

  // Step 2
  //We initialize the mazePathStack with the entry coordinate:[row, column] of the inputMaze
  mazePathStack.push([0, 1]);

  // Step 3 - run the algorithm
  //Default DFS
  let dfsResult = dfs();
  printResult(dfsResult, "Depth First Search");
  console.log(inputMaze);

})();
