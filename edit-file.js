'use strict';

const fs = require('fs');
const faker = require('faker')
const files = process.argv;

let dataToWrite = []
for (let i = 0; i < 100; i++) {
    dataToWrite.push(faker.hacker.noun())
}
fs.readFile(files[2], (err, data) => {
    let buff = data.toString()
    if (err) { console.log(err); }

    else { console.log(buff); return (buff); }
})

fs.appendFile(files[2], dataToWrite, function (err) {
    if (err) throw err;
    console.log('Saved!');
});

fs.readFile(files[2], (err, data) => {
    let buff = data.toString()
    if (err) { console.log(err); }

    else { console.log(buff); return (buff); }
})


// from root of repo run the following command
// node lib/edit-file.js files/test.txt