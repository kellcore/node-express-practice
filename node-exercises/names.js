// local
const secret = 'SUPER SECRET';
// global
const drew = "Drew";
const caitlin = "Caitlin";

console.log(module);
// need to set up the export to share values between modules
// set up the exports object with two properties
// es6 syntax -> key name is exactly the same as the value so we can just pass it
module.exports = { drew, caitlin };

// Module {
//     id: '.',
//     path: '/Users/',
//    (exports is an object - anything you put in exports, you'll be able to access anywhere in the application)
//     exports: {},
//     parent: null,
//     filename: '/Users/',
//     loaded: false,
//     children: [],
//     paths: [
//       '/Users/Code/node-express/exercises/node_modules',
//       '/Users/Code/node-express/node_modules',
//       '/Users/Code/node_modules',
//       '/Users/node_modules',
//       '/Users/node_modules',
//       '/node_modules'
//     ]
//   }

// we're only sharing the minimum so it's up to us to set those values in the exports object -> we decide what goes in there!