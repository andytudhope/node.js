/* This program prints a list of files in a given directory,  
  filtered by the extension of the files. I was provided a directory  
  name as the first argument to the program (e.g. '/path/to/dir/') and a  
  file extension to filter by as the second argument.
  
  I have provided a test file in this folder to be used with the program
  in this form */
  
  var fs = require("fs");
  var path = require("path");
  
  var folder = process.argv[2];
  var ext = '.' + process.argv[3];
  
  fs.readdir(folder, function(err, files) {
      if (err) return console.error(err);
      files.forEach(function(file) {
          if (path.extname(file) === ext) {
              console.log(file);
          }
      });
  });