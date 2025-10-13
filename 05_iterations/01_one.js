// ------------- for loop --------------

for (let i = 0; i < 10; i++) {
    const element = i;
    if(i==5){
        console.log("5 is best number!");
    }
    console.log(element);
}

// ------ Nested Loop -------
// for (let i = 0; i <= 10; i++) {
//     console.log(`Outer value is ${i}`);
//     for (let j = 0; j <= 10; j++) {
//         console.log(`Inner Loop value is ${j} and outer loop value is ${i}`);
//     } 
// }


// ******** break and continue ********

for (let i = 1; i < 20; i++) {
    // if(i == 5){
    //     console.log("Detected 5");
    //     break;
    // }

    if(i%5 == 0){
        console.log(`${i} is Multiple of 5 `);
        continue;
    }
    console.log(`Value of i is  ${i}`);
    
}