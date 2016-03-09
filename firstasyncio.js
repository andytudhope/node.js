/*This file was used to write a program that uses a single asynchronous filesystem operation to  
  read a file and print the number of newlines it contains to the console  
  (stdout), similar to running cat file | wc -l.  
   
  The full path to the file to read was provided as the first  
  command-line argument.
*/

var fs = require('fs');

fs.readFile(process.argv[2], 'utf8', function (err, data) {
    if (err) return console.error(err);
    var lines = data.toString().split("\n").length;
    if (lines > 0) lines -= 1;
    console.log(lines);
});