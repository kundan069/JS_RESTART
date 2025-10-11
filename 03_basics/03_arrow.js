const user = {
    username : "Kundan",
    price : 599,
    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`);
        //console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "Sandeep"
// user.welcomeMessage()

// #. Note :-  THIS keyword refer to current context

//console.log(this);
//##. V.Important : In "NODE" **this** will refer to " empty {} " in global context
//                : In "Browser"  **this** will refer to " window " in global context


// function one(){
//     let name = "KUNDAN"
//     console.log(this.name);
// }
//one()
// #1. "This" for function will refer to undefined


// +++++++++++++ Arrow Function +++++++++++++++++
// +++++++++++++ () => {} +++++++++++

const one = () =>{
    let name = "Kundan"
    console.log("My name is : ", name)
    console.log(this.name);
}
//one()
// #2. "This" for Arrow function will also refer to undefined


// 1.
// const addTwo = (num1 ,num2)=>{
//     return num1+num2
// }
// console.log(addTwo(3,6));

//2.
//const addTwo = (num1 ,num2)=> num1+num2   // Implicit return (arrow function : for one line of code)
//const addTwo = (num1 ,num2)=> (num1+num2)   
const addTwo = (num1 ,num2)=> ({username : "Badmas"})    // object return krne k liye "()" wrap krna he padega "
console.log(addTwo(3,6))


// ##. very important Note : if {} likhte hai arrow fnc mein to "return" likhna padega 
//                         : if () likhte hai arrow fnc mein to "return" nhi likhna padega
//  =>{return a+b}    ||  => (a+b) 


const myArray = [10,20,30,40]
//syntax
// myArray.forEach(function() {})
// myArray.forEach(() => {})
// myArray.forEach(() =>()) // expression likhna padega 