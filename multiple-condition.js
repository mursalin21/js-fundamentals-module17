var gotJob = true;
var moneySaved = 150000;
var hasFlat = false;
var hasHouse = true;

// if (gotJob == true && moneySaved > 200000) {
//     console.log('cholo biya kore feli');
// }
// else {
//     console.log('tor kopale biya nai');
// }


// if (gotJob == true && moneySaved > 200000 && hasFlat == true) {
//     console.log('cholo biya kore feli');
// }
// else {
//     console.log('tor kopale biya nai');
// }


if ((gotJob == true && moneySaved > 200000) || hasHouse == true) {
    console.log('cholo biya kore feli');
}
else {
    console.log('tor kopale biya nai');
}