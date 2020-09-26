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
});
