// Code to get object information from api
    $.get("http://api.openweathermap.org/data/2.5/forecast", {
        APPID: OPEN_WEATHER_APPID,
        q:     "San Antonio, US",
        units: "imperial"
    }).done(function(data) {
        console.log(data); // Entire Object Console Log
        console.log(data.list[0].main.temp_max); // Max Temp Console Log
    });
//------------- Map Box Code ----------------------
    //---------- Creates Map ------------
    mapboxgl.accessToken = MAPBOX_TOKEN;
    let map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        zoom: 10,
        center: [-96.80331225411656, 32.77771008020435]
    });

//------------- Map Box Code ˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆ
//------------- Forecast Card Code ˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆ

// function makeForecastCard() {
//
//     let coffeeCards = '<div class="card coffeeCard" style="width: 18rem;">';
//     coffeeCards += '<img src="' + coffee.image +'" className="card-img-top" alt="...">';
//     coffeeCards += '<div class="card-body">'
//     coffeeCards += '<h5 class="card-title headerFont"> '+ coffee.name +' </h5>'
//     coffeeCards += '<p class="card-text">' + coffee.roast + ' roast</p>'
//     coffeeCards += '</div>'
//     coffeeCards += '</div>'
//
//     return coffeeCards;
// }
//
// function place all(coffees) {
//     let html = '';
//     for(let i = 0; i < coffees.length; i++) {
//         // if ()
//         html += makeForecastCard(coffees[i]);
//     }
//     return html;
// }
//
// let tbody = document.querySelector('#coffees');
// tbody.innerHTML = renderCoffees(coffees);

/* --------------------------------------
Op Plan

- Put Map on page
    - import mapbox code
    - review Ajax lessons

- Make map show Dallas
    - display weather for Dallas

- Create 5 Day forecast Cards
    - Use coffeecard code
    - create function(s) that makes HTML for card
    - create eventlisteners that add HTML to doc

- Make Project able to change locations

- Make Page look better
    - Use bootstrap to style HTML while building
    - make colors more apealing
 */