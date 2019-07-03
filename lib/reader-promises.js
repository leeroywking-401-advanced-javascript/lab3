'use strict';

const fs = require('fs');
const { promisify } = require('util');
const readFile = promisify(fs.readFile);


let contents = [];
/**
 * Our module exports a single function that expects an array of files
 * @type {function(*=)}
 */
module.exports = exports = (files, callback) => {
  readAll([...files], callback);
  contents = [];
};


/**
 * Reads and returns the contents of 3 files
 * Requires 3 paths, otherwise, it'll fail with aggression
 * @param paths
 */
const readAll = (paths, callback) => {
  readFile(paths[0])
    .then(data => {
      contents.push(data.toString());
      readFile(paths[1])
        .then(data => {
          contents.push(data.toString());
          readFile(paths[2]).then(data => {
            contents.push(data.toString());
            callback(undefined, contents);
          });
        });
    });
};