// ------------------- forEach -------------------
const coding =['js','ruby','java','python','cpp']

// ****** syntax : forEach ******

// arrayName.forEach(function(varName){       // function(){} => callback function : having no name
// })

coding.forEach(function(item){
//    console.log(item);
})

coding.forEach((item)=> {
   // console.log(item);
})


// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe);

// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
// })

const myCoding = [
    {
        language: "javascript",
        languageFilename: "js"
    },
    {
        language: "java",
        languageFilename: "java"
    },
    {
        language: "python",
        languageFilename: "py"
    }
]

// myCoding.forEach((item)=>{
// for (const key in item) {
//     console.log(`${key} : ${item[key]}`)
// }
// console.log("\n");
// })




myCoding.forEach((item)=>{
console.log(`${item.language} : ${item.languageFilename}`);
})