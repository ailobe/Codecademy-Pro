let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

// original length of array
console.log('original lenght: ', secretMessage.length);

// remove last string and logging it
console.log(secretMessage.pop());

// log array
console.log(secretMessage);

// length after pop
console.log('length after pop: ', secretMessage.length);

// add 2 new words at the end and log
console.log(secretMessage.push('to', 'Program')); // returns length

// log array
console.log(secretMessage);

// store index of word eaily
const indexOfeasily = secretMessage.indexOf('easily');

// change word using stored index
secretMessage[indexOfeasily] = 'right';

// log array
console.log(secretMessage);

// remove first item
secretMessage.shift();

// log array
console.log(secretMessage);

// add word to the beginning
secretMessage.unshift('Programming');

// log array
console.log(secretMessage);

// store index of word get
const indexOfget = secretMessage.indexOf('get');

// store index of word time
const indexOftime = secretMessage.indexOf('time');

// change slice using stored index
secretMessage.splice(indexOfget, 5, 'know,');

// log joined array
console.log(secretMessage.join(' '));