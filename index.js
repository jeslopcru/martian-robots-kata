const parser = require('./src/parser/parser');
const fs = require('fs');

const fileInput = './input/input.txt';

const run = (fileInput) => {
  const text = fs.readFileSync(fileInput, 'utf-8');
  const data = parser.getMissionData(text);
}

run(fileInput);
