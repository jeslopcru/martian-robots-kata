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

  return {
    map: getMap(lines.shift()),
    robots: [
      {
        position: getPosition(lines.shift()),
        instructions: ['R', 'F', 'R', 'F', 'R', 'F', 'R', 'F'],
      }
    ]
  };
};

module.exports = {
  getMissionData
}
