// ================ !! Mini-exercises !!

// Write a function, returnFive, that returns the number five. No inputs should be defined.

function returnFive(){
    return 5;
}

// Write a function, isFive, that takes in an input and returns the boolean value true if the passed argument is the number 5 or the string "5". Return false otherwise.
function isFive(num){
    return num === 5;
}

// how many inputs should the function have? 1
// what are the data types for the inputs? numbers
// what is the data type of the output/return value? boolean



// Write a function, isShortWord, that takes in a string and returns the boolean value true if the passed argument is shorter than 5 characters. Return false otherwise.
function isShortWord(string){
    return string.length < 5 ;
}
// how many inputs? 1
// what data type for inputs? strings
// what is the return type? boolean


// Write a function, isSameLength, that takes in two string inputs and returns the boolean value true if the passed arguments are the same length. Return false otherwise.
function isSameLength(string1, string2){
    return string1.length === string2.length;
}
// How many inputs? 2
// What type of input? strings
// What type of output? boolean