const mission = require('./mission');

describe('mission', () => {
  it('should obtain mission results', () => {
    const missionData = {
      map: {width: 5, height: 3},
      robots: [
        {
          position: {x: 1, y: 1, o: 'E'},
          instructions: ['R', 'F', 'R', 'F', 'R', 'F', 'R', 'F'],
        }
      ]
    };

    const expectedMissionResults = [[1, 1, 'E', false]];

    const missionResults = mission.execute(missionData);

    expect(missionResults).toEqual(expectedMissionResults);
  });
});
