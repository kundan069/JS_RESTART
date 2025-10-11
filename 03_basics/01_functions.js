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


function loginUserMessage(username = "Sandi"){         //  Default Parameter
    if(!username){                                     // !usrename  = !undefined ; (undefined is a false value) 
        console.log("Please enter a username ! ")
        return
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage("Kundan"))
console.log(loginUserMessage())
// #. Note : If passed argument is empty or no argument is passed to parameter , then parameter is set to ==> UNDEFINED