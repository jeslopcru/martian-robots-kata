const getMissionData = input => {
  const lines = input.split('\n');

  function getMap(rawStringData) {
    stringData = rawStringData.split(' ');
    return {
      width: parseInt(stringData[0]),
      height: parseInt(stringData[1])
    };
  }

  function getPosition(rawStringData) {
    stringData = rawStringData.split(' ');
    return {
      x: parseInt(stringData[0]),
      y: parseInt(stringData[1]),
      o: stringData[2],
    };
  }

  function getInstructions(rawStringData) {
    return rawStringData.split('');
  }

  function getRobots(lines) {
    const robots = []
    for (let i = 0; i < lines.length - 1; i = i + 2) {
      robots.push({
        position: getPosition(lines[i]),
        instructions: getInstructions(lines[i + 1]),
      });
    }
    return robots;
  }

  return {
    map: getMap(lines.shift()),
    robots: getRobots(lines)
  };
};

module.exports = {
  getMissionData
}
