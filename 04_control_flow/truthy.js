// ------------ truthy / falsy -----------

const userEmail = "alpha@gmail.com";

if (userEmail) {
    console.log("Got User Email!");
} else {
    console.log("Don't have user Email!");
}


// ************ falsy values *************  IMP

//false, 0 , -0 , BigInt : 0n, "" , null , undefined , NaN


// ************ truthy values *************  IMP

// "0" , 'false' , " " , [] , {} , function(){}


//check empty object or not 
// const emptyObj = {}
// if(Object.keys(emptyObj).length === 0){
//     console.log("Object is empty!");
// }