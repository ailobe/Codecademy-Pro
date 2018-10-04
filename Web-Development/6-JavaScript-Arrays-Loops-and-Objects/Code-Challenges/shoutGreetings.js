// Write your code here:
// Using map:
const shoutGreetings = arr => arr.map(word => word.toUpperCase() + '!');

/*
// Using a loop:
const shoutGreetings = arr => {
    newArr = [];
    for (let item of arr) {
        newArr.push(item.toUpperCase() + '!')
    }
    return newArr;
};
*/

// Feel free to uncomment out the code below to test your function!
const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];

console.log(shoutGreetings(greetings))
// Should print [ 'HELLO!', 'HI!', 'HEYA!', 'OI!', 'HEY!', 'YO!' ]