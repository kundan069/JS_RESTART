// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scorevalue = 101.9
const isLogged = false
const insideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 9527346587367634785687473883n



// Reference  (Non primitive)

// Array, Objects, Functions

const badmas = ["Shakal" , "Bogambo" , "AmreshPuri","Gabbar Singh"]; // => array

let myObj = { 
    name : " Kundan",
    age : 22,
}

const myFunc = function(){
    console.log("Hello! Mr. Kundan");    
}

//https://262.ecma-international.org/5.1/#sec-11.4.3