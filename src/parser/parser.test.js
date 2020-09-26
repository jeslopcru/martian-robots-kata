const parser = require('./parser');

describe('parser', () => {

  it('should obtain Mission Data, when user submits input', () => {

    const userInput = '5 3\n1 1 E\nRFRFRFRF';
    const expectedMissionData = {
      map: {width: 5, height: 3},
      robots: [
        {
          position: {x: 1, y: 1, o: 'E'},
          instructions: ['R', 'F', 'R', 'F', 'R', 'F', 'R', 'F'],
        }
      ]
    };
    const missionData = parser.getMissionData(userInput)
    expect(missionData).toEqual(expectedMissionData)
  });

  it('should calculate map dimensions correctly, when parser getMissionData', () => {
    const userInput = '2 3\n1 1 E';
    const expectedMapDimensions = {width: 2, height: 3};

    const missionData = parser.getMissionData(userInput);

    expect(missionData.map).toEqual(expectedMapDimensions);
  });

  it('should calculate robot position correctly, when parser getMissionData', () => {
    const userInput = '2 2\n0 0 W';
    const expectedRobotPosition = {x: 0, y: 0, o: 'W'};

    const missionData = parser.getMissionData(userInput);

    expect(missionData.robots[0].position).toEqual(expectedRobotPosition);
  });
});
