// Global Variables - No Window in NodeJS!
// vanilla JS gives us access to the window object (query selectors, built-in fetch, etc.)
// no window in Node because there's no browser
// --------------------------
// __dirname -> path to current directory
// __filename -> file name
// require -> function to use modules (CommonJS)
// module -> info about current module (file)
// process -> info about env where the program is being executed
// --------------------------
// console.log(__dirname);
// console.log(__filename);
// --------------------------
// setInterval(() => {
//     console.log("Hello world!")
// }, 1000);
// --------------------------
// type 'node notes.js' in terminal to run
// --------------------------
// Modules - encapsulated code (only share minimum)

// as a parameter, we need to pass in where the module is located
// const names = require('./names');
// destructuring!
// const { drew, caitlin } = require('./names');
// const greetings = require('./utils');

// console.log(names);

// greetings("Kelly");
// destructured syntax
// greetings(drew);
// greetings(caitlin);
// separating our concerns
// greetings(names.drew);
// greetings(names.caitlin);
// --------------------------
// NodeJS uses CommonJS library under the hood
// Every file in Node is a module by default
// --------------------------
// const data = require('./alternate-syntax');
// console.log(data);
// destructuring
// const { items, singlePerson } = require('./alternate-syntax');
// console.log(items);
// console.log(singlePerson);
// --------------------------
// require('./challenge');
// --------------------------
// NPM
// --------------------------
// npm -> global command/comes with Node
// npm --version

// local dependency -> use it only in this project
// npm i <packageName>

// global dependency -> use it in any project
//  npm install -g <packageName>
// sudo npm install -g <packageName> (mac)
// --------------------------
// package.json -> manifest file (stores important info about project)
// manual approach (create package.json in the root, create properties, etc.)
// npm init (step by step, can press enter to skip through)
// npm init -y (default option for everything)
// --------------------------
// DEPENDENCIES
// --------------------------
// const _ = require('lodash');

// const items = [1, [2, [3, [4]]]];

// const newItems = _.flattenDeep(items);

// console.log(newItems);