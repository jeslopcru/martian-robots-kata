const create = dimensionsData => {
  const chart = [];
  const {width, height} = dimensionsData;
  while (width > chart.length) {
    chart.push(new Array(height).fill(false));
  }

  return chart;
}
module.exports = {
  create
}
