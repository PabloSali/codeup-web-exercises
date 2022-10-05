alert('Welcome to my website!');

var userFavColor = prompt("What is your favorite color?");
alert(userFavColor + " is my favorite color too!");

// Movie Rental Problem
let price = 3;
let littleMermaid = prompt("how long would you like to rent The Little Mermaid?");
let brotherBear = prompt("how long would you like to rent Brother Bear?");
let hercule = prompt("how long would you like to rent Hercules?");
let totalPrice = ((littleMermaid + brotherBear + hercule) * 3);
alert('Your total price is ' + totalPrice);

// Contractor Problem
let googlePay = prompt('How much does Google pay you per hour?');
let amazonPay = prompt('How much does Amazon pay you per hour?');
let facebookPay = prompt('How much does Facebook pay you per hour?');
let googlehours = prompt('how long did you work for Google');
let amazonhours = prompt('how long did you work for Amazon');
let facebookhours = prompt('how long did you work for Facebook');
let totalPay = (googlePay * googlehours) + (amazonPay * amazonhours) + (facebookhours + facebookPay);
alert('Your total payment should be $' + totalPay + '.00')

// Student Enrollment
let isClassFull = confirm('Was this class full? Press okay if its not full, press cancel if it is.')
let isThereScheduleConflict = confirm('Does this class conflict with our schedule? Press okay if there is no conflict, press cancel is there is a conflict.')
if((isClassFull == true) && (isThereScheduleConflict == true)){
    alert("You can enroll in this class.");
}
else{
    alert('You cannot enroll in this class.');
}

// Discount Problem
let premiumMember = confirm('are you a premium member? select okay if you are or cancel if you are not');
let howManyItems = Number(prompt('How many items are you purchasing? Only input numberical value'));
let hasOfferExpired = confirm ('Has this offer expired? Press okay if it is or cancel if it is not.');
if(((premiumMember) || (howManyItems > 2)) && hasOfferExpired == false){
    alert('You are eligible for the product offer.');
}
else{
    alert('You are not eligible for the product offer.');
}
