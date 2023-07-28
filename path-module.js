const path = require("path");

// Shows the path separator for the current OS
// console.log(path.sep);

const filePath = path.join("/content", "subfolder", "text.txt");
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);
