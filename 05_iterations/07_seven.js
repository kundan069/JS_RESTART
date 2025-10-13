const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const newNumber = myNumbers.map( (num)=> num+10 )

//chaining function
const newNumber = myNumbers.map( (num)=> num*10 ).map( (num)=> num+1).filter( (item)=> item >=42)

console.log(newNumber);