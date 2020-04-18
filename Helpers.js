//receives params: [row, col] of a maze coordinate
//explores the possible paths to move forward from that point -> down, left, up, right (NOT diagonal!)
//returns an array of all paths forward [[row, colon], [row, colon], ...]
const explore = (coordinates, workingMaze) => {
  let [row, col] = coordinates;
  let pathsFowardArray = [];

  //is there a down path
  if (row + 1 <= workingMaze.length && workingMaze[row + 1][col] === 0) {
    pathsFowardArray.push([row + 1, col]);
  }

  //is there a left path
  if (col - 1 >= 0 && workingMaze[row][col - 1] === 0) {
    pathsFowardArray.push([row, col - 1]);
  }

  //is there an up path
  if (row - 1 >= 0 && workingMaze[row - 1][col] === 0) {
    pathsFowardArray.push([row - 1, col]);
  }

  //is there a right path
  if (col + 1 <= workingMaze[0].length && workingMaze[row][col + 1] === 0) {
    pathsFowardArray.push([row, col + 1]);
  }

  return pathsFowardArray;
};


//1) receives the current coordinate and an array of all possible moves
//2) visits the next coordinate in the array, if there is one, marks the current coordinate with a (1)
//   as visited and pushes the next coordinate on the stack to be explored
//-if there are several possible paths, the visitation is done in clockwise order -> down, left, up, right
const visit = (currentCoordinate, coordinatePathsArray, workingMaze, mazePathStack) => {
  //mark current coordinate
  [currentRow, currentCol] = currentCoordinate;
  workingMaze[currentRow][currentCol] = 1;

  //move to the next
  if (coordinatePathsArray.length >= 1) {
    [nextRow, nextCol] = coordinatePathsArray[0];
    mazePathStack.push([nextRow, nextCol]);
  }

  return[workingMaze, mazePathStack];
};

module.exports = [visit, explore];