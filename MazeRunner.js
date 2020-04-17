//Maze as a 2D Array, 1s are walls and 0s are paths
//the number of elements in each row must be equal for this program to complete without errors
const explore = require('./Helpers').explore;
const inputMaze = [
  [1, 0, 1, 1, 1, 1],
  [0, 0, 0, 0, 1, 1],
  [1, 1, 0, 1, 1, 1],
  [1, 0, 0, 1, 1, 1],
  [1, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 0, 1],
];

//mutable maze (same as input) for the algorithm's use
let workingMaze = inputMaze;

//This is an array that we will use like a stack (only push and pop ops allowed)
let exitPath = [];

//receives the current coordinate and an array of all possible moves
//visits the next point
//--if there are several possible paths, the visitation order is clockwise -> down, left, up, right
//--if there is only one potential path or no paths, marks the current point as visited (assigns it a 1) and moves to the next point
//returns the next point (or current one if there are no paths from it);
const visit = (currentCoordinate, coordinatePathsArray) => {};

console.log(explore([1, 1], workingMaze));
