// Warm-up:
//
// Write a function that takes in a number and returns the number passed multiplied by the number 5. If we pass anything other than a number into the function, the function should return the number 0.

const multiplyByFive = (x) => {
    if (parseFloat(x) !== x){
        return 0
    }
    return x*5
}

//---------------------------------------------------------
//Morning Warm-Up:
//
// Create a function named "typePrinter" that accepts an array as an input, and logs the data type of each element to the console.
//
 let arr = [true, "Icon", 25, "66", false, 0];
 let x = 0
function typePrinter(array){
     while (x < array.length){
         console.log(typeof array[x])
         x = x + 1
     }
}
typePrinter(arr);