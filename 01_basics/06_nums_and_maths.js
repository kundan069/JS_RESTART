// const score = 100
// console.log(score);

// const balance =  new Number(300)
// console.log(balance);

// console.log(typeof balance.toString());
// console.log(typeof balance.toString().length);

//  Indian standard .toLocaleString('en-IN')

//to-Do  => Explore all methods of Number Object


// +++++++++++++++++++ Maths +++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.01));  // to take greater value (TOP value)
//console.log(Math.floor(4.9));  // to take smaller value (BOTTOM value)

// console.log(Math.min(2,1,7,22,-1));
// console.log(Math.max(2,1,7,22,-1));

// console.log(Math.ceil(Math.random()*10));
// console.log(Math.ceil(Math.random()*10));

// we can use ceil to avoid + 1 in random number generation

//----- to generate random number between two point MAX - MIN ------

console.log(Math.random());     // Generate random number btw  0 and 1(excluding) 
console.log((Math.random()*10) + 1); // Generate random no. btw 1 and 10 (including)
console.log(Math.floor((Math.random()*10)) + 1); // Remove decimal values


const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max - min + 1)) + min );


