// const user = {
//     username: "Kundan",
//     loginCount: 8,
//     signedIn : true,

//     getUserDetails: function(){
//         console.log("Got userDetails from DataBase");
//         console.log(this);
//     }

// }

// console.log(user.username);
// console.log(user.getUserDetails());


function User(username , loginCountOne , isLoggedIn){
    this.username = username
    this.loginCountOne = loginCountOne
    this.isLoggedIn  = isLoggedIn
    console.log("created user ");
    console.log((this));
    return this
}

const userOne = new  User("Rishu", 11 , false)
const userTwo = new User("Sandy", 22 , true)

console.log("Outside : ", userOne );