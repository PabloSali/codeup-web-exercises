// Warm-up:
//
// Write a function that takes in a number and returns the number passed multiplied by the number 5. If we pass anything other than a number into the function, the function should return the number 0.

function multiplyByFive(x){
    if (typeOf x === number){
    return x * 5;
}
    else {
        return 0
}
}
