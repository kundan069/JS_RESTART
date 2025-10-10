// Object creation using Constructor method


// -------- 1. Object Literals ---------
const tinderUser = {}
tinderUser.id = "123Alpha"
tinderUser.name = "Sandeep"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "alpha@gmail.com",
    fullName: {
        userfullname: {
            firstname: "Kundan",
            lastname: "Singh"
        }
    }
}

//console.log(regularUser.fullName.userfullname.firstname);

// ----------  Combining 2 or more objects ----------
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

//const obj3 = Object.assign({},obj1,obj2)  // copy the values of obj1 & obj2 in obj3 and form object
// {} is used as target and obj1,obj2,objn is source
//console.log(obj3);

// ------------- most used ------------
//**SPREAD operator   (...)
// const obj3 = {...obj1,...obj2}
// console.log(obj3);

//console.log(tinderUser);

//---------- Important --------------
// we can get access of keys : similar for values

console.log(Object.keys(tinderUser)); // return value as string[] (In array format)
console.log(Object.values(tinderUser)); // return value as string[] (In array format)
console.log(Object.entries(tinderUser)) // return array of array ([key value],[key value]...)

console.log(tinderUser.hasOwnProperty('isLogged'));


// ------------ 2. Singleton Object ------------------
//const tinderUser = new Object()

