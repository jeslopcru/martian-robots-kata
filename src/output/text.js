const print = missionData => {
  let string = '';

  for (const mission of missionData) {
    string += getRobotPosition(mission)
    string += '\n';
  }
  return string;
}
const getRobotPosition = (mission) => {
  const {x, y, o} = mission.position;
  return `${x} ${y} ${o}${mission.isLost ? ' LOST' : ''}`;
};
module.exports = {
  print,
}
