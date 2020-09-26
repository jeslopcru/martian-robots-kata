const chart = require('./chart');

describe('chart', () => {
  it('should create a chart, given dimensions', () => {
    const dimensionsData = {width: 3, height: 2};
    const expectedMap = [
      [false, false],
      [false, false],
      [false, false]
    ];

    const result = chart.create(dimensionsData);

    expect(result).toEqual(expectedMap);
    expect(result.length).toEqual(dimensionsData.width);
  });
});
