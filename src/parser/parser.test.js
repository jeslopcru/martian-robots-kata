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
});
