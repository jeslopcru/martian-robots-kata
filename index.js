const parser = require('./src/parser/parser');
const mision = require('./src/mission/mission');
const fs = require('fs');

const fileInput = './input/input.txt';

run = (fileInput) => {
  const text = fs.readFileSync(fileInput, 'utf-8');
  const data = parser.getMissionData(text);
  const misionData = mision.execute(data)
}

run(fileInput);
