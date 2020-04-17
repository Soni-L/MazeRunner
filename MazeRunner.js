//Maze as a 2D Array, 1s are walls and 0s are paths
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
//In order to aid the deapth first search
let exitPath = [];


//takes row and col coordinates of a singular location in the maze
//explores the possible paths to move forward from that point -> up, down, left, right (NOT diagonal!)
//returns an array of all paths forward
const explore = (coordinate) => {

}

//receives the current coordinate and an array of all possible moves
//visits the next point
//--if there are several possible paths the visitation order is clockwise -> down, left, up, right
//--if there is only one potential path, marks the current point
const visit = (currentCoordinate, coordinatePathsArray) => {

    
}

