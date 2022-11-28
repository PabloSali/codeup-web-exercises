
$.get("http://api.openweathermap.org/data/2.5/forecast", {
    APPID: OPEN_WEATHER_APPID,
    q:     "San Antonio, US",
    units: "imperial"
}).done(function(data) {
    console.log(data); // Entire Object Console Log
    console.log(data.list[0].main.temp_max); // Max Temp Console Log
});





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