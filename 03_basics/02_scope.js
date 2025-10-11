// ##. Important : Interview Perspective :-  scope in browser(window) and scope in node(environment) is different

let a = 10
const b = 20
var c = 30
// console.log(a);
// console.log(b);
// console.log(c);
 
// Important
// #. Note :  " {} " when comes with if-else,function,loop then it becomes "SCOPE"
//         :  " {} " when comes with object it become object declaration

// #. Note : Code within  {} is " block scope " : and code outside {} is " Global scope "

if(true){
    let a1 = 10
    const b1  = 20
    var c1 = 30
}

//console.log("a1 : ",a1); // scope of a1 is withn " if condition "
//console.log("b1 : ",b1);  // scope of b1 is withn " if condition "
//console.log("c1 : ",c1);


// ------------------ Nested Scope -----------------

function one(){
    const username = " Kundan"
    
    function two(){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);
    //two()
}
//one()



if(true){
    const firstname = "Kundan"
    if(firstname === "Kundan"){
        const lastname = " Singh"
        //console.log("My name is " , firstname+lastname);
    }
    //console.log(lastname);
}
//console.log(firstname);



// +++++++++++++++++++ interesting +++++++++++++++++++

// 1. function
function addone(num){
    return num + 1
}
addone(5)


// 2. function : function Expression
//addTwo(5)
const addTwo = function(num){
    return num+2
}
addTwo(5)

// #. Note :- Error = addTwo function cannot access before initialization  ( ** in function expression ** )
