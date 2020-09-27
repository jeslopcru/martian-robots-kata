const chart = require('./../chart/chart');
const robot = require('./../robot/robot');

function movement(command, robotData, chartData) {
  if (command === 'R') {
    robotData.position.o = robot.turnRight(robotData.position.o);
  } else if (command === 'L') {
    robotData.position.o = robot.turnLeft(robotData.position.o);
  } else if (command === 'F') {
    robotData.position = robot.moveFront(robotData.position);
    if (robot.isLost(robotData.position, chartData)) {
      robotData.isLost = true;
    }
  }
  return robotData;
}

const execute = mission => {
  const chartData = chart.create(mission.map);

  let result = [];
  for (const initial of mission.robots) {
    let final = {position: initial.position, isLost: false};
    initial.instructions.forEach(command => {
      final = movement(command, final, chartData);
    });
    result.push(final);
  }
  return result;
}
module.exports = {
  execute
}
