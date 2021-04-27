const greetings = (name) => {
    console.log(`Hello, ${name}!`)
};
// only passing one value so you can set it equal to module.exports without creating an object
// export default
module.exports = greetings;