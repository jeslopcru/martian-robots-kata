const text = require('./text');

describe('text', () => {
  it('should obtain final position whe robot move inside of chart', () => {
    const missionResult = [
      {position: {x: 1, y: 1, o: 'E'}, isLost: false},
      {position: {x: 3, y: 3, o: 'N'}, isLost: true},
      {position: {x: 2, y: 4, o: 'S'}, isLost: true}
    ];

    const outputString = '1 1 E\n3 3 N LOST\n2 4 S LOST\n';

    const result = text.print(missionResult);

    expect(result).toEqual(outputString)
  });
});
