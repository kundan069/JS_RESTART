const myObj = {
    js: "javascript",
    cpp: "c++",
    rb:"ruby",
    swift:"swift by apple"
}

//##.Note : " for-in " loop is used to iterate in objects
for (const key in myObj) {
    // console.log(key); // key print keys
    // console.log(myObj[key]);  // myObje[key] print values
   // console.log(`${key} is shortcut for ${myObj[key]}`);
}

const arr = [1,2,3,4,5,6]

//##.Note Imp : " for-in " print the index of array
for (const i in arr) {
    // console.log(i);      // print index number   
}

//##. Note  *** array index  is a key ***



// for of loop
// for (const i of arr) {
//    console.log(arr[i]);
// }

//Note.
// console.log(arr[i]);   ::  This line is trying to access the ith index of the array, but since i is actually the value, not the index

// arr[1] → 2

// arr[2] → 3

// arr[3] → 4

// arr[4] → 5

// arr[5] → 6

// arr[6] → undefined


// Map k upr ** for-in ** loop use nhi hoga run nhi krega 