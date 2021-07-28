let fs = require("fs");
let path = process.argv[2];
let ext = process.argv[3];
fs.readdir(path, (err, files) => {
  if (err) {
    return console.log(err.stack);
  }
  var filtered = files.filter((file) => file.endsWith(". ${ext}"));
  filtered.forEach((file) => console.log(file));
});
