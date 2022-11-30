
// All selectors for the Forecast Cards
    // Forecast 1 Query Selectors
    let forecastOneTitle = document.querySelector('#forecast1-title');
    let forecastOneHigh = document.querySelector('#forecast1-temp-high');
    let forecastOneLow = document.querySelector('#forecast1-temp-low');
    let forecastOneFeel = document.querySelector('#forecast1-feel-temp');
    let forecastOneHum = document.querySelector('#forecast1-humidity');

    // Forecast 2 Query Selectors
    let forecastTwoTitle = document.querySelector('#forecast2-title');
    let forecastTwoHigh = document.querySelector('#forecast2-temp-high');
    let forecastTwoLow = document.querySelector('#forecast2-temp-low');
    let forecastTwoFeel = document.querySelector('#forecast2-feel-temp');
    let forecastTwoHum = document.querySelector('#forecast2-humidity');

    // Forecast 3 Query Selectors
    let forecastThreeTitle = document.querySelector('#forecast3-title');
    let forecastThreeHigh = document.querySelector('#forecast3-temp-high');
    let forecastThreeLow = document.querySelector('#forecast3-temp-low');
    let forecastThreeFeel = document.querySelector('#forecast3-feel-temp');
    let forecastThreeHum = document.querySelector('#forecast3-humidity');

    // Forecast 4 Query Selectors
    let forecastFourTitle = document.querySelector('#forecast4-title');
    let forecastFourHigh = document.querySelector('#forecast4-temp-high');
    let forecastFourLow = document.querySelector('#forecast4-temp-low');
    let forecastFourFeel = document.querySelector('#forecast4-feel-temp');
    let forecastFourHum = document.querySelector('#forecast4-humidity');

    // Forecast 5 Query Selectors
    let forecastFiveTitle = document.querySelector('#forecast5-title');
    let forecastFiveHigh = document.querySelector('#forecast5-temp-high');
    let forecastFiveLow = document.querySelector('#forecast5-temp-low');
    let forecastFiveFeel = document.querySelector('#forecast5-feel-temp');
    let forecastFiveHum = document.querySelector('#forecast5-humidity');

let currentCityArray = []

// selector for search button and event listener that initiates user city search
let userCitySearch = document.querySelector('#citySearchButton');
userCitySearch.addEventListener('click', loadUserCity);

// Function that takes user search input and sends get request
function loadUserCity() {
    event.preventDefault();
    // Variable Gets City from Search Bar
    let city = document.getElementById('userCity').value;

    // Get request to pull JSON of City variable
    $.get("http://api.openweathermap.org/data/2.5/forecast", {
        APPID: OPEN_WEATHER_APPID,
        q: city,
        units: "imperial"
    }).done(function (data) {
        let arrayData = [data]
        console.log(data); // Entire Object Console Log
        currentCityArray.push(arrayData);
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
        let dayOneDate = currentCityInfo[0].list[0].dt_txt
        let dayOneMax = currentCityInfo[0].list[0].main.temp_max;
        let dayOneMin = currentCityInfo[0].list[0].main.temp_min;
        let dayOneFeel = currentCityInfo[0].list[0].main.feels_like;
        let dayOneHum = currentCityInfo[0].list[0].main.humidity;
        forecastOneTitle.innerHTML = "Date: " + dayOneDate;
        forecastOneHigh.innerHTML = "High: " + dayOneMax;
        forecastOneLow.innerHTML = "Low: " + dayOneMin;
        forecastOneFeel.innerHTML = "Feels Like: " + dayOneFeel;
        forecastOneHum.innerHTML = "Humidity: " + dayOneHum;

        // Day 2
        let dayTwoDate = currentCityInfo[0].list[8].dt_txt;
        let dayTwoMax = currentCityInfo[0].list[8].main.temp_max;
        let dayTwoMin = currentCityInfo[0].list[8].main.temp_min;
        let dayTwoFeel = currentCityInfo[0].list[8].main.feels_like;
        let dayTwoHum = currentCityInfo[0].list[8].main.humidity;
        forecastTwoTitle.innerHTML = "Date: " + dayTwoDate;
        forecastTwoHigh.innerHTML = "High: " + dayTwoMax;
        forecastTwoLow.innerHTML = "Low: " + dayTwoMin;
        forecastTwoFeel.innerHTML = "Feels Like: " + dayTwoFeel;
        forecastTwoHum.innerHTML = "Humidity: " + dayTwoHum;

        // Day 3
        let dayThreeDate = currentCityInfo[0].list[16].dt_txt;
        let dayThreeMax = currentCityInfo[0].list[16].main.temp_max;
        let dayThreeMin = currentCityInfo[0].list[16].main.temp_min;
        let dayThreeFeel = currentCityInfo[0].list[16].main.feels_like;
        let dayThreeHum = currentCityInfo[0].list[16].main.humidity;
        forecastThreeTitle.innerHTML = "Date: " + dayThreeDate;
        forecastThreeHigh.innerHTML = "High: " + dayThreeMax;
        forecastThreeLow.innerHTML = "Low: " + dayThreeMin;
        forecastThreeFeel.innerHTML = "Feels Like: " + dayThreeFeel;
        forecastThreeHum.innerHTML = "Humidity: " + dayThreeHum;

        // Day 4
        let dayFourDate = currentCityInfo[0].list[24].dt_txt;
        let dayFourMax = currentCityInfo[0].list[24].main.temp_max;
        let dayFourMin = currentCityInfo[0].list[24].main.temp_min;
        let dayFourFeel = currentCityInfo[0].list[24].main.feels_like;
        let dayFourHum = currentCityInfo[0].list[24].main.humidity;
        forecastFourTitle.innerHTML = "Date: " + dayFourDate;
        forecastFourHigh.innerHTML = "High: " + dayFourMax;
        forecastFourLow.innerHTML = "Low: " + dayFourMin;
        forecastFourFeel.innerHTML = "Feels Like: " + dayFourFeel;
        forecastFourHum.innerHTML = "Humidity: " + dayFourHum;

        // Day 5
        let dayFiveDate = currentCityInfo[0].list[32].dt_txt;
        let dayFiveMax = currentCityInfo[0].list[32].main.temp_max;
        let dayFiveMin = currentCityInfo[0].list[32].main.temp_min;
        let dayFiveFeel = currentCityInfo[0].list[32].main.feels_like;
        let dayFiveHum = currentCityInfo[0].list[32].main.humidity;
        forecastFiveTitle.innerHTML = "Date: " + dayFiveDate;
        forecastFiveHigh.innerHTML = "High: " + dayFiveMax;
        forecastFiveLow.innerHTML = "Low: " + dayFiveMin;
        forecastFiveFeel.innerHTML = "Feels Like: " + dayFiveFeel;
        forecastFiveHum.innerHTML = "Humidity: " + dayFiveHum;
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