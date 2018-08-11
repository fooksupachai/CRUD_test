console.log('Start app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./note.js');

fs.appendFile('message.txt', `data is : ${notes.testNumber} and ${notes.calc(5, 6, 7)}` , (err) => {
    if (err) throw err;
    console.log('The "data to append" was appended to file!');
  });





var z = (a, b) => {
    return a + b;
}

// var x = z(5, 6);

// console.log(x);

// console.log('Start');

