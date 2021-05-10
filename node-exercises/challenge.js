const num1 = 12;
const num2 = 10;

const addValues = () => {
    console.log(`The sum is: ${num1 + num2}`)
};

addValues();

// if we have a function inside of the module that we invoke, the code will run even if you don't assign it to a variable (see notes.js)
// common with 3rd party modules!
// when you import a module, you invoke it
// when the node exports the code, it wraps it in the function