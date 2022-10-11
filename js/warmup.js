// Warm-up:
//
// Write a function that takes in a number and returns the number passed multiplied by the number 5. If we pass anything other than a number into the function, the function should return the number 0.

const multiplyByFive = (x) => {
    if (parseFloat(x) !== x){
        return 0
    }
    return x*5
}