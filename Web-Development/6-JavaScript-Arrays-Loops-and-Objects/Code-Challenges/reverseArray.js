// Write your code here:
const reverseArray = (array) => {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(array[array.length - (1 + i)]);
    }
    return result;
};

// When you're ready to test your code, run:
const sentence = ['sense.', 'make', 'all', 'will', 'This'];

console.log(reverseArray(sentence))
// Should print ['This', 'will', 'all', 'make', 'sense.'];