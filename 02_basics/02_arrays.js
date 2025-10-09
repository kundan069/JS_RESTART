const marvel_heros = ["thor","Ironman","Spiderman"]
const dc_heros = ["superman","flas","batman"]

// marvel_heros.push(...dc_heros)
// console.log(marvel_heros);

// const all_heros = [...marvel_heros,...dc_heros]
// console.log(all_heros);

// const another_array = [1,2,3,[4,5],6,[7,8,[9]]]
// const real_another_array = another_array.flat(Infinity); //depth should be provided inside flat method
// console.log(real_another_array);

console.log(Array.isArray("Kundan"));
console.log(Array.from("Kundan"));
console.log(Array.from({name : "Kundan"})); // interesting  => we have to provide  on what basis it convert to array (on key basis ,on value basis)

let score1 = 100
let score2 = 200
let score3 = 300

const scoreArray = Array.of(score1,score2,score3)
console.log(scoreArray);
