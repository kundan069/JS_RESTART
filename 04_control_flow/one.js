// *************** Control Flow *****************

// ---- if ----
const isUserLoggedIn = true;
if(isUserLoggedIn){
    console.log("User is Logged IN !");
}
else{
    console.log("User Logged Out");
}

// comparision operator :  < , > , <= , >= , == , != , ===
/*  if(condition){
    } else {
    }
 */

// -------- scope ---------
// let score = 200;
// if(score > 100){
//     let power = "fly";
//     console.log(`user power : ${power}`);
// }
// console.log(`user power : ${power}`);


// ---------- short hand noation ---------  
// const balance = 1000
// if(balance > 500) console.log("test1"),   // implicit scope
// console.log("test2");

// ----------- nested if-else -------------
// const num1 = 500 
// if(num1>300){
//     if(num1 > 1000){
//         console.log(`${num1} is greater than  1000 `);
//     }else{
//         console.log(`${num1} is greater than 300 but less than 1000`);
//     }
// }else{
//     console.log(`${num1} is less than 300`);
// }


const userLoggedIn = true;
const debitCard = true;
if(userLoggedIn && debitCard){
    console.log("Allow to buy course ! ");
}

//  Nullish Coalescing Operator (??): null undefined

let val1;
//val1 = 5 ?? 10;
//val1 = null ?? 10;
//val1 = undefined ?? 10;

//val1 = null ?? 10 ?? 20;
console.log(val1);


// Terniary Operator

// Syntax :-     condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice >=80  ? console.log("less tha 80") : console.log("more tahn 80");