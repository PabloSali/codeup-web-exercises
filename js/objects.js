(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are string with your first and last name. Store this object in a variable named`person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    let person = {
        firstName: 'Pablo',
        lastName: 'Salinas'
    }
//---------------------------------------------------------------------------------------
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    person.sayHello = function(){
        console.log('Hello from ' + person.firstName + ' ' + person.lastName);
    }
    //-------------------------------------------------------------------------------------
    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    let shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];
shoppers.forEach(function (element){
        if (element.amount >= 200) {
            console.log(element.name + ' you spent ' + element.amount + '. Your discounted price is: ' + (element.amount * .12) + '. ' + 'Your new total is: ' + (element.amount - (element.amount * .12) + '.'));
        } else {
            console.log(element.name + ' you spent ' + element.amount + '. You did not meet the requirement for the discount. Your total is: ' + element.amount + '.');
        }
    });

//----------------------------------------------------------------------------------------
    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    let books = [
        {title: 'Meditations', autor:{ firstName:'Marcus', lastName:'Aurelius'}},
        {title: 'Extreme Ownership', autor:{ firstName:'Jocko', lastName:'Willink'}},
        {title: 'Chaos', autor:{ firstName:'Tom', lastName:"O'Neill"}},
        {title: "Can't Hurt Me", autor:{ firstName:'David', lastName:'Goggins'}},
        {title: 'Atomic Habit', autor:{ firstName:'James', lastName:'Clear'}},
    ]
 //----------------------------------------------------------------------------------
    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    books.forEach(function (x){
        console.log('Book #' + books.indexOf(x) + 1);
        console.log('Title: ' + x.title);
        console.log('Author: ' + (x.autor.firstName + ' ' + x.autor.lastName))
    });
//--------------------------------------------------------------------------------------------------------
    function createBook(){
        let bookTitle = prompt('Enter Book Title.');
        let bookAuthorLastName = prompt("Enter Author's Last Name.");
        let bookAuthorFirstName = prompt("Enter Author's First Name.");
        let addedBook = { title:bookTitle, author:{ firstName:bookAuthorFirstName, lastName:bookAuthorLastName} }
        books.push(addedbook)
    }
})();
