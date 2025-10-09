// +++++++++++ Dates ++++++++++

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toDateString());

// console.log(typeof myDate);

// #.Note  ----> Interview Perspective
// Date is an OBJECT

//let myCreatedDate = new Date(2025,9,1)
//let myCreatedDate = new Date(2025,9,9,15,30)
// let myCreatedDate = new Date("2025-10-09")
// let myCreatedDate = new Date("yyyy-mm-dd")
// let myCreatedDate = new Date("mm-dd-yyyy")
 
// console.log(myCreatedDate.toLocaleString());

// Month start from 0 i.e,  0 => january


// +++++++++++++++ Time Stamp +++++++++++++++++

// let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(Math.floor((Date.now()/1000)));

let newDate = new  Date()
//console.log(newDate.toLocaleString());
console.log(newDate.getDay());
console.log(newDate.getMonth() + 1);
console.log(newDate.getHours());

console.log(newDate.toLocaleString('en-IN',{
    //weekday: "long",
    // timeZone : 'indian'
}))