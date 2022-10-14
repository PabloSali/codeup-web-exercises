// Step 2
function multiplicationTable(num){
    console.log('7 x 1 = ' + (num * 1));
    console.log('7 x 2 = ' + (num * 2));
    console.log('7 x 3 = ' + (num * 3));
    console.log('7 x 4 = ' + (num * 4));
    console.log('7 x 5 = ' + (num * 5));
    console.log('7 x 6 = ' + (num * 6));
    console.log('7 x 7 = ' + (num * 7));
    console.log('7 x 8 = ' + (num * 8));
    console.log('7 x 9 = ' + (num * 9));
    console.log('7 x 10 = ' + (num * 10));
}
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
   let num = i
    numToStr = num.toString()
    console.log(numToStr.repeat(num));

    parseFloat(i);
}

//----------------------------------------------------------------
// Step 5

for(let i = 100; i > 0; i = i - 5){

    console.log(i)
}
