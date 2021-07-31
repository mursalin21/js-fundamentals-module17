var lastBench = ['kalam', 'balam', 'salam'];
// console.log(lastBench);

//pushing new element into array
lastBench.push('jalam');
lastBench.push('palam');
lastBench.push('nalam');
// console.log(lastBench);

var friendsAge = [12, 13, 14, 15, 17];
// friendsAge.push(11);
console.log(friendsAge);

//popping element out of array
friendsAge.pop()

// friendsAge.pop();
console.log(friendsAge);

//Since pop() returns your element
var lastItem = friendsAge.pop();
console.log(friendsAge);
console.log(lastItem);

//Add element to beginning of an array
friendsAge.unshift(11);
console.log(friendsAge);

//Remove element from beginning of an array

friendsAge.shift();
console.log(friendsAge);