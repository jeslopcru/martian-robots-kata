const turnLeft = command => {
  const orientations = ['N', 'W', 'S', 'E'];
  const index = orientations.indexOf(command);
  return command !== 'E' ? orientations[index + 1] : 'N';
}
module.exports = {
  turnLeft
}
