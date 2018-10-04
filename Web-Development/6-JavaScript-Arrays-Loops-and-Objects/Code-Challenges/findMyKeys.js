// Write your code here:

const findMyKeys = arr => arr.includes('keys') ? arr.indexOf('keys') : -1;

// Feel free to comment out the code below to test your function

const randomStuff = ['credit card', 'screwdriver', 'receipt', 'gum', 'keys', 'used gum', 'plastic spoon'];

console.log(findMyKeys(randomStuff))
// Should print 4

const moreRandomStuff = ['credit card', 'screwdriver', 'receipt', 'gum', 'used gum', 'plastic spoon'];

console.log(findMyKeys(moreRandomStuff))
// Should print -1