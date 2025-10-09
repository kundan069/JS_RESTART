// +++++++++++++ Array +++++++++++

const myArr = [1,2,3,4,5,6]
//console.log(myArr);

const cricketers = ["Rohit","Shikhar","virat","M.S.D","Jassi"]

const newArr = new Array(1,2,3,4,5)
// console.log(newArr[3])
// newArr.push(55)
// newArr.push(35)
// console.log(newArr)
// newArr.pop()
// console.log(newArr)

// newArr.shift()    // Remove/shift towards left first element in an array
// console.log(newArr)
// newArr.unshift(10)   // Add/shift towards right elemet in an array
// console.log(newArr)

// // console.log(newArr.includes(9))
// // console.log(newArr.indexOf(9))


// // ++++++++++ JOIN +++++++++++++
// const newArr2 = newArr.join()

// console.log(newArr);
//console.log(newArr2);


// +++++++++++++ SLICE  &  SPLICE  +++++++++++++++

// ##. IMPORTANT : SLICE => slice donot modify original array
//                 SPLICE => splice modify the original array (remove that elements from original array)

//SLICE
console.log("A",newArr);
const myn1 = newArr.slice(1,3)

console.log(myn1);
console.log("B",newArr);

//SPLICE
const myn2 = newArr.splice(1,3)
console.log("C",newArr);
console.log(myn2);