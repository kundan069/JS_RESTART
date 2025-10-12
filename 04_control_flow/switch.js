// --------------- SWITCH --------------

// ------ syntax ------
// switch(key){
//     case value:

//         break;
    
//     default:
//         break;
// }
const month = 3;

switch (month) {
    case 1:
        console.log("JAN")
        break;
    case 2:
        console.log("FEB")
        break;
    case 3:
        console.log("MAR")
        break;
    case 4:
        console.log("APR")
        break;
    case 5:
        console.log("MAY")
        break;

    default:
        console.log("Default case reached!")
        break;
}

// #. Note: if break statement na ho to sare case run hoga except default