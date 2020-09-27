const mission = require('./mission');

describe('mission', () => {
  it('should obtain final position whe robot move inside of chart', () => {
    const missionData = {
      map: {width: 5, height: 3},
      robots: [
        {
          position: {x: 1, y: 1, o: 'E'},
          instructions: ['R', 'F', 'R', 'F', 'R', 'F', 'R', 'F'],
        }
      ]
    };

    const expectedPositionResult = {x: 1, y: 1, o: 'E'};


    const missionResults = mission.execute(missionData);

    expect(missionResults.position).toEqual(expectedPositionResult);
    expect(missionResults.isLost).toBeFalsy();
  });

  it('should obtain final position when robot move outside of chart', () => {
    const missionData = {
      map: {width: 5, height: 3},
      robots: [
        {
          position: {x: 3, y: 2, o: 'N'},
          instructions: ['F', 'R', 'R', 'F', 'L', 'L', 'F', 'F', 'R', 'R', 'F', 'L', 'L'],
        }
      ]
    };

    const expectedPositionResult = {x: 3, y: 3, o: 'N'};


    const missionResults = mission.execute(missionData);

    expect(missionResults.position).toEqual(expectedPositionResult);
    expect(missionResults.isLost).toBeTruthy();

  });
});
