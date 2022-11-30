// Code to get object information from api

    // let citySearch = document.getElementById('userCity');
    // let searchButton = document.getElementById('citySearchButton');
    // searchButton.addEventListener('click', function() {
    //
    // });

// Code to create a variable that holds api information requested through get.
// Variable is then able to be used to access City information
// Variable is used to request city info, set equal to search box info

// selector for search button and event listener that initiates user city search
let userCitySearch = document.querySelector('#citySearchButton');
userCitySearch.addEventListener('click', loadUserCity);
// Forecast 1 Query Selectors
let forecastOneTitle = document.querySelector('#forecast1-title');
let forecastOneHigh = document.querySelector('#forecast1-temp-high');
let forecastOneLow = document.querySelector('#forecast1-temp-low');
let forecastOneFeel = document.querySelector('#forecast1-feel-temp');
let forecastOneHum = document.querySelector('#forecast1-humidity');
let forecastOneCov = document.querySelector('#forecast1-coverage');

// Forecast 2 Query Selectors
let forecastTwoTitle = document.querySelector('#forecast2-title');
let forecastTwoHigh = document.querySelector('#forecast2-temp-high');
let forecastTwoLow = document.querySelector('#forecast2-temp-low');
let forecastTwoFeel = document.querySelector('#forecast2-feel-temp');
let forecastTwoHum = document.querySelector('#forecast2-humidity');
let forecastTwoCov = document.querySelector('#forecast2-coverage');

let currentCityArray = []

// Function that takes user search input and sends get request
function loadUserCity() {
    event.preventDefault();
    let city = document.getElementById('userCity').value;
    console.log(city);

    $.get("http://api.openweathermap.org/data/2.5/forecast", {
        APPID: OPEN_WEATHER_APPID,
        q: city,
        units: "imperial"
    }).done(function (data) {
        let arrayData = [data]
        console.log(data); // Entire Object Console Log
        currentCityArray.push(arrayData);
        // console.log(currentCityArray)
        variableAssignment();
        // renderCityMap();
    });
};

// function renderCityMap(){
//     let currentCityInfo = currentCityArray[0];
//     let cityLat = currentCityInfo[0].list[0].city.coord.lat;
//     let cityLon = currentCityInfo[0].list[0].city.coord.lon;
//     console.log(cityLat);
//     console.log(cityLon);
// };


function variableAssignment() {
        // Shows all JSON for city
        console.log(currentCityArray);
        // Variable to use for accessing JSON, list index is date
        let currentCityInfo = currentCityArray[0];
        // Variables assign data and push it to the Forecast Cards
        // Day 1
        let dayOneDate = currentCityInfo[0].list[0].visibility.dt_txt
        let dayOneMax = currentCityInfo[0].list[0].main.temp_max;
        let dayOneMin = currentCityInfo[0].list[0].main.temp_min;
        let dayOneFeel = currentCityInfo[0].list[0].main.feels_like;
        let dayOneHum = currentCityInfo[0].list[0].main.humidity;
        let dayOneCov = currentCityInfo[0].list[0].weather[0].description;
        console.log(dayOneCov);
        forecastOneTitle.innerHTML = "Date: " + dayOneDate;
        forecastOneHigh.innerHTML = "High: " + dayOneMax;
        forecastOneLow.innerHTML = "Low: " + dayOneMin;
        forecastOneFeel.innerHTML = "Feels Like: " + dayOneFeel;
        forecastOneHum.innerHTML = "Humidity: " + dayOneHum;
        forecastOneCov.inerHTML = "Coverage: " + dayOneCov;

        // Day 2
        // let dayTwoMax = currentCityInfo[0].list[8].main.temp_max;
        // let dayTwoMin = currentCityInfo[0].list[8].main.temp_min;
        // let dayTwoFeel = currentCityInfo[0].list[8].main.feels_like;
        // let dayTwoHum = currentCityInfo[0].list[8].main.humidity;
        // forecastTwoHigh.innerHTML = "High: " + dayTwoMax;
        // forecastTwoLow.innerHTML = "Low: " + dayTwoMin;
        // forecastTwoFeel.innerHTML = "Feels Like: " + dayTwoFeel;
        // forecastTwoHum.innerHTML = "Humidity: " + dayTwoHum;
}

//------------- Map Box Code ----------------------
    //---------- Creates Map ------------
    mapboxgl.accessToken = MAPBOX_TOKEN;
    let map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        zoom: 10,
        center: [-96.80331225411656, 32.77771008020435]
    });

// ------ Code Plan -------
/*
- Change Locations
    - Feed search input into q attribute to load new location information
    - Use a variable to get search city info from HTML into JS
    - Set Variable for lat and Lon to input into mapbox to update map

- Update Forecast Cards
    - Set Variables equal to each attribute needed (Date, Temp, Feel Like, Humidity, Coverage)
    - Feed each variable into jquery that inputs variable into innerHTML
 */

/* --------------------------------------
Op Plan

- Put Map on page
    - import mapbox code
    - review Ajax lessons

- Make map show Dallas
    - display weather for Dallas

- Create 5-day forecast Cards
    - Use coffeecard code
    - create function(s) that makes HTML for card
    - create eventlisteners that add HTML to doc

- Make Project able to change locations

- Make Page look better
    - Use bootstrap to style HTML while building
    - make colors more apealing
 */