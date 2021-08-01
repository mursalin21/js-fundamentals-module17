var danishPrice = 50;
var butterBreadPrice = 25;
var toastPrice = 10;
var myBudget = 100;
var packedWell = false;

//Using else if
if (danishPrice < myBudget) {
    console.log('Danish kheye danish jabo!');
}
else if (butterBreadPrice < myBudget) {
    console.log('Butter bon diye cha khamu');
}
else if (toastPrice < myBudget) {
    console.log('Toast biscuit khamu');
}
else {
    console.log('Batasha diye cha khamu');
}

//Using Nested Conditions
if (danishPrice < myBudget) {
    if (packedWell == true) {
        console.log('Danish khabo!');
    }
    else {
        console.log('Danish khamu na! karon ami khawar age machi keye ordek!!!');
    }
}