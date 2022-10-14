// Step 2
function multiplicationTable(num){
    for(let i = 1; i <= 10; i++) {
        console.log(num + " x " + i, " = " + num * i);
    }
}
multiplicationTable(6);
//---------------------------------------------------------------
// Step 3

for(let i = 0; i < 20; ++i){
    let randNum = Math.floor(Math.random() * 100) + 20;
    if (randNum % 2 === 0){
        console.log(randNum + ' is even');
    } else {
        console.log(randNum + ' is odd');
    }
}

//----------------------------------------------------------------
// Step 4

for(let i = 1; i < 10; i++){
   let num = i;
    let numToStr = num.toString();
    console.log(numToStr.repeat(num));
}

//----------------------------------------------------------------
// Step 5

for(let i = 100; i > 0; i = i - 5){
    console.log(i);
}
