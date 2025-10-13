// -------------- Array Loops --------------

// **** for of ****

// [{}, {}, {}]
// ["", "", ""]

const arr = [1,2,3,4,5]
for (const num of arr) {
   // console.log(num);
}

const greetings = "Hello world!";
for (const greet of greetings) {
    if(greet == " "){
        continue;
    }
    //console.log(`each char is  ${greet}`);
}


// ******** Maps ********   is a objcet 

const map = new Map();

// key value set syntax : mapName.set(key,value);

map.set('IN','India')
map.set('USA','United State of America')
map.set('Fr','France')
//map.set('IN','India')      // set unique value only & 
//console.log(map);

for (const [key,value] of map) {          // [key,value]  : map destructure
    //console.log(key, ':-',value);
}



// ##.Note : Objects are not iterable by  " for-of "  loop
const myObj = {
    game1 : 'Batista',
    game2 : 'Johan Cena'
}

// for (const [key,value] of myObj) {
//     console.log(key,':-' , value);
// }