function wrongInput(){
    let userNumber = parseFloat(prompt('You did not choose an odd number, try again.'))
}
let userNumber = parseFloat(prompt('Choose a number between 1 and 50.'))

if (userNumber % 2 !== 2) {
    for (let i = 1; i <= 50; i++) {

        if (i % 2 === 0) {
            continue;
        }
        if (i === userNumber) {
            continue;
        }

        console.log('Here is an odd number: ' + i);
    }
}
else {
    wrongInput();
}