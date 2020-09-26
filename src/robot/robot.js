const turnLeft = command => {
  const orientations = ['N', 'W', 'S', 'E'];
  const index = orientations.indexOf(command);
  return command !== 'E' ? orientations[index + 1] : 'N';
}

const turnRight = command => {
  const orientations = ['N', 'E', 'S', 'W'];
  
  const index = orientations.indexOf(command);
  return command !== 'W' ? orientations[index + 1] : 'N';
}

module.exports = {
  turnLeft,
  turnRight
}
