const fs = require('fs');
const { stderr } = require('process');

function cat() {
  fs.readFile(arguments[0], (err, content) => {
    if (err) {
      throw err;
    } else {
      process.stdout.write(content);
      process.stdout.write('\nprompt > ');
    }
  })
}

module.exports = cat;
