  fs = require("fs");
const path = require('path');
var myDir = process.argv.slice(2);

fs.watch(myDir, { persistent: true }, function (event, fileName) {
  console.log("Event: " + event);
  console.log(fileName + "\n");
 var fullpath = path.join(myDir,fileName);
    fs.readFile(fullpath, 'utf8', function(err, data) {
    if (err) throw err;
    console.log(data);
});
});