//takes [row, col] tuple of coordinates of a singular location in the maze
//explores the possible paths to move forward from that point -> down, left, up, right (NOT diagonal!)
//returns an array of all paths forward [[row, colon], ...]
module.exports.explore = (coordinates, workingMaze) => {
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
