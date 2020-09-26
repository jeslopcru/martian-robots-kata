const chart = require('./../chart/chart');

const execute = mission => {
  let chartData = chart.create(mission.map);

  mission.robots[0].instructions.forEach(command => {
  });
}
module.exports = {
  execute
}
