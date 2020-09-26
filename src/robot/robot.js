const turnLeft = command => {
  const orientations = ['N', 'W', 'S', 'E'];
  const index = orientations.indexOf(command);
  return command !== 'E' ? orientations[index + 1] : 'N';
};

const turnRight = command => {
  const orientations = ['N', 'E', 'S', 'W'];

  const index = orientations.indexOf(command);
  return command !== 'W' ? orientations[index + 1] : 'N';
};

const moveFront = initialPosition => {
  switch (initialPosition.o) {
    case 'N':
      return {...initialPosition, y: initialPosition.y + 1};
    case 'S':
      return {...initialPosition, y: initialPosition.y - 1};
    case 'E':
      return {...initialPosition, x: initialPosition.x + 1};
    case 'W':
      return {...initialPosition, x: initialPosition.x - 1};
    default:
      return initialPosition;
  }
};


module.exports = {
  turnLeft,
  turnRight,
  moveFront
}
