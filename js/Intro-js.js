// 'use strict';
//
// let greeting = 'Hello from an external source!';
// console.log(greeting);
//
// let myAge = 25
//
// alert("You've been hacked!")
//
// let username = prompt("What is your name?");
// console.log(username);
//
// let isFull = confirm('is the class full?');
// console.log(isFull);
function calculateChange(totalPaid, totalCost){
    if(parseFloat(totalPaid) == totalPaid && parseFloat(totalCost) == totalCost){
        let change = (totalPaid - totalCost);
        let newChange = change.toFixed(2)
        return '$' + newChange.toString();
    }else{
        return false;
    }
}

console.log(calculateChange(23, 21));

console.log('wow');