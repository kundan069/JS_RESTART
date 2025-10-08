// Type consversion

let num = true
// console.log(typeof num);
// console.log(num);
console.log(Number(num));
console.log(typeof Number(num));

// ---- NaN => Not a Number ; typeof NaN => number ----

// ------------ Anything => Number() -------------
// "33" => 33 ; "Kun" => NaN
// null => 0 ; undefined => NaN
// true => 1 ; false => 0

// ------------ Anything => String() -------------
/*
let myName = undefined ;
let newName = String(myName);
console.log(`type of myName is : ${typeof myName}`);
console.log(`type of newName is : ${typeof newName}`);
console.log("myName is : " + myName);
console.log("newName is : " + newName);
*/
// 33 => "33" ; "kundan" => "kundan"
// null => "null" ; undefined => "undefined"
// ture => "true" ; false => "false"

// ------------ Anything => Boolean() -------------
let isLogged = "";
console.log(`type of isLogged : ${typeof isLogged}`);
console.log(`isLogged : ${isLogged}`);

let newLogged = Boolean(isLogged);
console.log(`type of newLogged : ${typeof newLogged}`);
console.log(`newLogged : ${newLogged}`);
// 0 => false ; any number except 0 => true
// null => false ; undefined => null;
// "kun878" => true ; "" => false