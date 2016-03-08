/* This file was used to write a program that uses a single synchronous filesystem operation to  
  read a file and print the number of newlines (\n) it contains to the  
  console (stdout), similar to running cat file | wc -l.  
   
  The full path to the file to read was provided as the first  
  command-line argument (i.e., process.argv[2]) in the test IDE I was using.
  
  I have added a test.txt file and the necessary encoding to make this work on its own*/


var fs = require('fs');

var buf = fs.readFileSync("test.txt", "utf8", process.argv[2]);
var lines = buf.toString().split("\n").length;
if (lines > 0) lines -= 1;
console.log(lines);