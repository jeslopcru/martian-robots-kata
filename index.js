const parser = require('./src/parser/parser');
const mission = require('./src/mission/mission');
const output = require('./src/output/text');
const fs = require('fs');

const fileInput = './input/input.txt';

run = (fileInput) => {
  const input = fs.readFileSync(fileInput, 'utf-8');
  const data = parser.getMissionData(input);
  const misionResult = mission.execute(data);
  const text = output.print(misionResult);
  console.log(text);
}

run(fileInput);
