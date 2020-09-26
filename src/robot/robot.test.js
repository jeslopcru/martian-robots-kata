const robot = require('./robot');

describe('robot', () => {

  it('should change to S, when actual orientation is W and turnLeft', () => {

    const actualOrientation = 'W';
    const expectedOrientation = 'S';

    const orientationResult = robot.turnLeft(actualOrientation);

    expect(orientationResult).toEqual(expectedOrientation);
  });

  it('should change to W, when actual orientation is N and turnLeft', () => {

    const actualOrientation = 'N';
    const expectedOrientation = 'W';

    const orientationResult = robot.turnLeft(actualOrientation);

    expect(orientationResult).toEqual(expectedOrientation);
  });

  it('should change to N, when actual orientation is E and turnLeft', () => {

    const actualOrientation = 'E';
    const expectedOrientation = 'N';

    const orientationResult = robot.turnLeft(actualOrientation);

    expect(orientationResult).toEqual(expectedOrientation);
  });

  it('should change to E, when actual orientation is S and turnLeft', () => {

    const actualOrientation = 'S';
    const expectedOrientation = 'E';

    const orientationResult = robot.turnLeft(actualOrientation);

    expect(orientationResult).toEqual(expectedOrientation);
  });

  it('should change to N, when actual orientation is W and turnRight', () => {

    const actualOrientation = 'W';
    const expectedOrientation = 'N';

    const orientationResult = robot.turnRight(actualOrientation);

    expect(orientationResult).toEqual(expectedOrientation);
  });

  it('should change to E, when actual orientation is N and turnRight', () => {

    const actualOrientation = 'N';
    const expectedOrientation = 'E';

    const orientationResult = robot.turnRight(actualOrientation);

    expect(orientationResult).toEqual(expectedOrientation);
  });

  it('should change to S, when actual orientation is E and turnRight', () => {

    const actualOrientation = 'E';
    const expectedOrientation = 'S';

    const orientationResult = robot.turnRight(actualOrientation);

    expect(orientationResult).toEqual(expectedOrientation);
  });

  it('should change to W, when actual orientation is S and turnRight', () => {

    const actualOrientation = 'S';
    const expectedOrientation = 'W';

    const orientationResult = robot.turnRight(actualOrientation);

    expect(orientationResult).toEqual(expectedOrientation);
  });


  it('should move to next position, when moveFront North', () => {

    const actualPosition = {x: 1, y: 1, o: 'N'};
    const expectedPosition = {x: 1, y: 2, o: 'N'};

    const PositionResult = robot.moveFront(actualPosition);

    expect(PositionResult).toEqual(expectedPosition);
  });

  it('should move to next position, when moveFront South', () => {

    const actualPosition = {x: 1, y: 1, o: 'S'};
    const expectedPosition = {x: 1, y: 0, o: 'S'};

    const PositionResult = robot.moveFront(actualPosition);

    expect(PositionResult).toEqual(expectedPosition);
  });

  it('should move to next position, when moveFront West', () => {

    const actualPosition = {x: 1, y: 1, o: 'W'};
    const expectedPosition = {x: 0, y: 1, o: 'W'};

    const PositionResult = robot.moveFront(actualPosition);

    expect(PositionResult).toEqual(expectedPosition);
  });

  it('should move to next position, when moveFront East', () => {

    const actualPosition = {x: 1, y: 1, o: 'E'};
    const expectedPosition = {x: 2, y: 1, o: 'E'};

    const PositionResult = robot.moveFront(actualPosition);

    expect(PositionResult).toEqual(expectedPosition);
  });

});
