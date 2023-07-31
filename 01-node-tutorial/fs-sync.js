const { readFileSync, writeFileSync } = require("fs");

// Reading  files
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

// console.log(first, second);

writeFileSync(
  "./content/result-sync.txt",
  `:::::::::Here is the result for both files::::::::::: ${first} and ${second}::::::::`,
  { flag: "a" }
);
