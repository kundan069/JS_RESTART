// singleton -> is a type of object 
// #. Note :- when we declare object as literal then singleton nhi bnta hai
//            when we declare object as constructor then singleton hmesa bnta hai

//Object.create    =>  constructor method  => singleton bnega


// declaring Symbol -----> Symbol
const  mySym = Symbol("key1")

// 1. Object literals     (singleton nhi bnega)
const jsUser = {
    [mySym] : "myKey1",    //  using symbol as key in object (-- Note --)
    name: "Kundan",
    "full name" : "Kundan Kumar Singh",
    age: 22,
    location: "Chandigarh",
    email: "alpha@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(jsUser);

// access dot(.)  & bracket([""]) notation
// console.log(jsUser.email);
// console.log(jsUser["email"]);

// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);
//console.log(typeof [mySym]);

// TO LOCK object  == use freez

// jsUser["full name"] = "Chauhan ji"
// Object.freeze(jsUser)
// jsUser["full name"] = "Kundan badmas"
// console.log(jsUser);

// adding a function in object

jsUser.greeting = function(){
    console.log("Welcome ji!");
}

// console.log(jsUser.greeting);
// console.log(jsUser.greeting());

jsUser.greetingTwo = function(){
    console.log(`Hello User , ${this.name}`);   // this keyword point to parent object
}
console.log(jsUser.greetingTwo);
console.log(jsUser.greetingTwo());