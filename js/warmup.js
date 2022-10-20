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


// Create a function named "average" that takes in an array of numeric values, and returns the average. If any of the elements in the array are non-numeric, the function should return false.
//
//     Ex:
// average(["6", 5, 3, 2, 9])                       // returns 5
// average([true, 6, 9, 3, 10])                     // returns false
// average([{name: "Codey the Duck}, 10, 3, false]) // returns false
//     average([1, 2, 3, 4, 5])                         // returns 3
//     average(["5.5", "five", 3, 6, 7])                // returns false
function isNumeric (){
    !isNaN(parseFloat(x));
}
function average(arrNum){
    let arrNumAverage = 0
             for(let i = 0; i < arrNum.length; i++) {
            if (isNumeric(arrNum[i])) {
                return false
            }
            arrNumAverage = parseFloat(arrNumAverage) + parseFloat(arrNum[i]);

            if (i === (arrNum.length - 1)){
                arrNumAverage = arrNumAverage / (arrNum.length);
                if(arrNumAverage === NaN) {
                    return false;
                } else {
                    return arrNumAverage
                }
            }

        }
}
arrNum = [{name: "Codey the Duck"}, 10, 3, false];
console.log(average(arrNum))