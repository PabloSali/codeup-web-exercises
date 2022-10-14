num = 1;
while(num < 65536){
    console.log(num *= 2);
}

//---------------------------------------------------------------------

let conesNeededToSell = Math.floor(Math.random() * 50) + 50;
do{
    let clientBuying = Math.floor(Math.random() * 5) + 1;
    let conesRemaining = conesNeededToSell - clientBuying
    if(clientBuying <= conesRemaining){
        console.log(clientBuying + ' cones sold');
        conesNeededToSell -= clientBuying;
    } else {
        console.log('Sorry we do not have the inventory to sell that many.');
    }
} while (conesNeededToSell !== 0)

console.log('We sold all our cones!')

