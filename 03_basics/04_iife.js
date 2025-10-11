// Imediately Invoked Function Expression (IIFE)

//global scope ke pollution ko hatane k liye use krte iife

// syntax  :  (function declaration)()


(function one(){
    console.log("DB Connected")
})();                          // always write " ; " at end to end the block code of iife

// ##. Note  : " ; " use krna hoga to end line in iife

// ------------ arrow function iife ------------

((name)=>{
    console.log(`DB Connected for ${name}`)
})("Kundan");


