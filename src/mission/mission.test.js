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

    expect(missionResults[0].position).toEqual(expectedPositionResult);
    expect(missionResults[0].isLost).toBeFalsy();
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

    expect(missionResults[0].position).toEqual(expectedPositionResult);
    expect(missionResults[0].isLost).toBeTruthy();

  });

  it('should obtain result to various robots', () => {
    const missionData = {
      map: {width: 5, height: 3},
      robots: [
        {
          position: {x: 3, y: 2, o: 'N'},
          instructions: ['F', 'R', 'R', 'F', 'L', 'L', 'F', 'F', 'R', 'R', 'F', 'L', 'L'],
        },
        {
          position: {x: 1, y: 1, o: 'E'},
          instructions: ['R', 'F', 'R', 'F', 'R', 'F', 'R', 'F'],
        }
      ]
    };
    const expectedPositionResultFirst = {x: 3, y: 3, o: 'N'};
    const expectedPositionResultSecond = {x: 1, y: 1, o: 'E'};


    const missionResults = mission.execute(missionData);

    expect(missionResults[0].position).toEqual(expectedPositionResultFirst);
    expect(missionResults[0].isLost).toBeTruthy();

    expect(missionResults[1].position).toEqual(expectedPositionResultSecond);
    expect(missionResults[1].isLost).toBeFalsy();
  });
});
