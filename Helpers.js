//Receives params: [row, col] of a maze coordinate
//Explores the possible paths to move forward from that point -> down, left, up, right (NOT diagonal!)
//Returns an array of all free paths forward: [[row, colon], [row, colon], ...]
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

//1) Receives the current coordinate and an array of all possible moves
//2) visits the next coordinate in the array, if there is one, marks the current coordinate with a (1)
//   as visited and pushes the next coordinate on the stack to be explored
//3) If there are several possible paths, the visitation is done in clockwise order -> down, left, up, right
const visit = (
  currentCoordinate,
  coordinatePathsArray,
  workingMaze,
  mazePathStack
) => {
  //Mark current point coordinate with a (1)
  [currentRow, currentCol] = currentCoordinate;
  workingMaze[currentRow][currentCol] = 1;

  //Move to the next point coordinate
  if (coordinatePathsArray.length >= 1) {
    [nextRow, nextCol] = coordinatePathsArray[0];
    mazePathStack.push([nextRow, nextCol]);
  }

  return [workingMaze, mazePathStack];
};

const printResult = (result, algorithm, inputMaze) => {
  console.log(`Algorithm Used: ${algorithm}`);

  if (result === 0) {
    console.log("There are no paths through this maze!");
  } else {
    result.forEach((element) => {
      inputMaze[element[0]][element[1]] = "*";
    });
    console.log("Solved Maze: ");
    console.table(inputMaze);
    console.log("Path coordinates: ");
    let json = result.map(function (x) {
      return {
        row: x[0],
        column: x[1],
      };
    });
    console.table(json);
  }
};

module.exports = [visit, explore, printResult];
