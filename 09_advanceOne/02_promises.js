// ************  PROMISES  ***********

// ########### Promise Creation ##########


//###. Important  : async  Await   used  ###
const promiseOne = new Promise(function (resolve, reject) {
  //To do Async Task
  //To do Cryptography

  setTimeout(function () {
    console.log("Async 1 Completed");
    resolve();
  }, 1000);
});

// ########### Promise Consumption ##########

promiseOne.then(function () {
  console.log("promise consumed !");
});

//##. 2

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Promise 2 created!");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Promise 2 consumed");
});

//##. 3

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("promise 3 created");
    resolve({ userName: "Kundan", email: "alpha@example.com" });
  }, 1001);
});

promiseThree.then(function (user) {
  console.log(user);
});

/*
example :

const promiseExample = new Promise(function(resolve,reject){
    setTimeout(function(){
    resolve({user:"Kundan",email:"bandana@kbandana.com"})
    },1000)
})

promiseExample.then(function(user){
    console.log(user) ;
})
*/



// ##. 4

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("promise 4 created");
    let errorFlag = true;
    if (!errorFlag) {
      resolve({ userName: "Bunty", pass: 123 });
    } else {
      reject("ERROR : Something went  wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.userName;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("promise  4 is either consumed or rejected !");
  });

// ** then() --> resolve()  :   catch() --> reject()  :  finally()  -->  default
//   .then().then().then()        chaining of resolve()




// ##. 5

//###. Important  : async  Await   used .###

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("promise 5 created ");
        let errorFlag = true;
        if(!errorFlag){
            resolve({user: "Batista" , occup : "Wrestling"})
        }else{
            reject("ERROR : error in Loading")
        }
    },1000)
})

async function consumePromiseFive(){

    try {
        const response = await promiseFive;
        console.log(response);        
    } catch (error) {
        console.log(error);
    }

}

consumePromiseFive();




//##. Important : use of Async

// console.log("Async function !");

// async function getUserData() {
//   try {
//     const response = await fetch(
//       "https://api.github.com/users/hiteshchoudhary"
//     );
//     //console.log(response);
//     const data = await response.json(); //  conversion to json takes time : use await
//     console.log(data);
//   } catch (error) {
//     console.log("E: ", error);
//   }
// }

//getUserData();

//##. Important : use of .then() an .catch()

fetch("https://api.github.com/users/hiteshchoudhary")
  .then((response) => {
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
