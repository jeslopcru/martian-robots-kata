const getMissionData = input => {
  const lines = input.split('\n');
  return {
    map: getMap(lines.shift()),
    robots: [
      {
        position: {x: 1, y: 1, o: 'E'},
        instructions: ['R', 'F', 'R', 'F', 'R', 'F', 'R', 'F'],
      }
    ]
  };

  function getMap(rawStringData) {
    stringData = rawStringData.split(' ')
    return {
      width: parseInt(stringData[0]),
      height: parseInt(stringData[1])
    };
  }
};

module.exports = {
  getMissionData
}
