(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
       let names = ['John', 'Jacob', 'Jingle', 'Heimersmith'];
    //-----------------------------------------------------------------
    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
        console.log(names)
    //-----------------------------------------------------------------
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    let i = 0
    while(i < 4) {
        console.log(names[i]);
        i += 1;
    }
    //-----------------------------------------------------------------
    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
       for(let i = 0; i < 4; i++){
           console.log(names[i]);
       }
    //-----------------------------------------------------------------
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    names.forEach(function(name){
            console.log(names)
    })
    //-----------------------------------------------------------------
    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
// 1
    function return1 (inputtedArray){
        return inputtedArray[0];
    }

// 2
    function return2 (inputtedArray){
        return inputtedArray[2];
    }
// 3
    function return3 (inputtedArray){
        return inputtedArray[inputtedArray.length - 1];
    }
    //-----------------------------------------------------------------
})();
