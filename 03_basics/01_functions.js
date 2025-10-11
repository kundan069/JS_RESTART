//------------ Function Declaration/definition ------------
function sayMyName(){
    console.log("K");
    console.log("U");
    console.log("N");
    console.log("D");
    console.log("A");
    console.log("N");
    
}

// sayMyName  : function reference (without paranthesis)
// sayMyName()  : function execution (with paranthesis)

// function addTwoNumbers(number1 , number2){   // number1,number2 : Parameters
//     console.log(number1 + number2)
//}

function addTwoNumbers(number1 , number2){   // number1,number2 : Parameters
    
    // let result = number1 + number2
    // return result

    return (number1 + number2)

}

const result = addTwoNumbers(3,5)    // 3,5  : arguments
//console.log("Result : ", result);


// function loginUserMessage(username = "Sandi"){         //  Default Parameter
//     if(!username){                                     // !usrename  = !undefined ; (undefined is a false value) 
//         console.log("Please enter a username ! ")
//         return
//     }
//     return `${username} just logged in`
// }

//console.log(loginUserMessage("Kundan"))
//console.log(loginUserMessage())
// #. Note : If passed argument is empty or no argument is passed to parameter , then parameter is set to ==> UNDEFINED




//---------------------- More About Function --------------
//---------------------- Passing Multiple parameter ---------

// ++++++++++  (...) Rest/Spread Operator ++++++++++++++

function calculateCartPrice(...num1){
    return num1
}
//console.log(calculateCartPrice(200,300,500,600,900));


// #. Note : always check availability of object property  : type safety (using ? / if-else)

const user = {
    username:"Kundan",
    price: 100
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and Price is ${anyobject.price}`)
}

//console.log(handleObject(user)); // function kuch return mhi kr rha is isliye undefined arha output 

handleObject(user)

// ---------------- Pass Array in function ---------


const myArray = [100,200,300,400]

function returnSecondValue(getArray){
    return getArray[1]
}

//console.log(returnSecondValue(myArray))    // passing array variable 
console.log(returnSecondValue([100,200,300,400]))  // passing direct array value