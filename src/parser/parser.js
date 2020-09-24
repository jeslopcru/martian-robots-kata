const getMissionData = input => {
  return {
    map: {width: 5, height: 3},
    robots: [
      {
        position: {x: 1, y: 1, o: 'E'},
        instructions: ['R', 'F', 'R', 'F', 'R', 'F', 'R', 'F'],
      }
    ]
  };
};

module.exports = {
  getMissionData
}
