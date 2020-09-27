const chart = require('./../chart/chart');
const robot = require('./../robot/robot');

const execute = mission => {
  let chartData = chart.create(mission.map);

  let initial = mission.robots[0];
  let result = mission.robots[0];
  initial.instructions.forEach(command => {
    if (command === 'R') {
      result.position.o = robot.turnRight(initial.position.o);
    } else if (command === 'L') {
      result.position.o = robot.turnLeft(initial.position.o);
    } else if (command === 'F') {
      result.position = robot.moveFront(
        result.position,
        chartData
      );
    }
  });
  return result.position;
}
module.exports = {
  execute
}
