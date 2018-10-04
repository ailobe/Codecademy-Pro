// Write your code here:
const convertToBaby = (array) => {
    let newArray = [];
    for (let animal in array) {
        newArray.push('baby ' + array[animal]);
    }
    return newArray;
};

// When you're ready to test your code,run:
const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

console.log(convertToBaby(animals))
// Should return ['baby panda', 'baby turtle', 'baby giraffe', 'baby hippo', 'baby sloth', 'baby human'];