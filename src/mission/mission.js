const chart = require('./../chart/chart');
const robot = require('./../robot/robot');

const execute = mission => {
  const chartData = chart.create(mission.map);

  let initial = mission.robots[0];
  let final = {position: mission.robots[0].position, isLost: false};
  initial.instructions.forEach(command => {
    if (command === 'R') {
      final.position.o = robot.turnRight(final.position.o);
    } else if (command === 'L') {
      final.position.o = robot.turnLeft(final.position.o);
    } else if (command === 'F') {
      final.position = robot.moveFront(final.position);
      if (robot.isLost(final.position, chartData)) {
        final.isLost = true;
      }
    }
  });
  return final;
}
module.exports = {
  execute
}
