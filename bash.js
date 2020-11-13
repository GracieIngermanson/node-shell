const pwd = require('./pwd');
//const { lstat } = require('fs');
const ls = require('./ls');
const cat = require('./cat');

process.stdout.write ('prompt > ');
process.stdin.on('data',  (data) => {
  let cmd = data.toString().trim();
  let cmdWords = cmd.split(' ');
  if (cmd === 'pwd') {
    pwd();
  } else if (cmd === 'ls') {
    ls();
  } else if (cmdWords[0] === 'cat') {
    cat(...cmdWords.splice(1));
  } else {
    process.stdout.write('You typed ' + cmd);
    process.stdout.write('\nprompt > ');
  }
});

