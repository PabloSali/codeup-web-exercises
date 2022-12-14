
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

// Variable that Holds JSON to manipulation later
    let currentCityArray = []

// selector for search button and event listener that initiates user city search
    let userCitySearch = document.querySelector('#citySearchButton');
    userCitySearch.addEventListener('click', loadUserCity)
// Selector for mapbox container
    let mapContainer = document.querySelector('#map-leaflet');
// Selector for Mapbox City Title h5
    let mapCity = document.querySelector('#city-map-name');
// Variable used in function meant for creating markers on map when clicked
    let clickedPoint = [];
    let currentMarkers=[];


// Function that takes user search input and sends get request
    function loadUserCity() {
        // Prevents total web refresh
        event.preventDefault();

        // Resets Map Container to delete old map
            mapContainer.innerHTML = ''
        // Variable Gets City from Search Bar
            let city = document.getElementById('userCity').value
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
                renderCityMap();
            });

    }


// Function that creates the variables to pass JSON information to the Forecast HTML Cards
    function variableAssignment() {
        // Variable to use for accessing JSON, list index is date
            let currentCityInfo = currentCityArray[currentCityArray.length -1];

        // Shows all JSON for city
            console.log(currentCityInfo);

        // Variable that assigns City Name from JSON
            let cityName = currentCityInfo[0].city.name;
            let cityCountry = currentCityInfo[0].city.country;
            console.log(cityName + ', ' + cityCountry);
            mapCity.innerHTML = "City: " + cityName + ', ' + cityCountry;

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
            let dayFiveDate = currentCityInfo[currentCityInfo.length - 1].list[32].dt_txt;
            let dayFiveMax = currentCityInfo[currentCityInfo.length - 1].list[32].main.temp_max;
            let dayFiveMin = currentCityInfo[currentCityInfo.length - 1].list[32].main.temp_min;
            let dayFiveFeel = currentCityInfo[currentCityInfo.length - 1].list[32].main.feels_like;
            let dayFiveHum = currentCityInfo[currentCityInfo.length - 1].list[32].main.humidity;
            forecastFiveTitle.innerHTML = "Date: " + dayFiveDate;
            forecastFiveHigh.innerHTML = "High: " + dayFiveMax;
            forecastFiveLow.innerHTML = "Low: " + dayFiveMin;
            forecastFiveFeel.innerHTML = "Feels Like: " + dayFiveFeel;
            forecastFiveHum.innerHTML = "Humidity: " + dayFiveHum;

    }

//------------- Map Box Code ----------------------
    // Function takes in JSON lat and Lon to render map of area
    function renderCityMap(){
        let currentCityInfo = currentCityArray[currentCityArray.length - 1];
        let cityLat = currentCityInfo[0].city.coord.lat;
        let cityLon = currentCityInfo[0].city.coord.lon;

        // makes map using MAPBOX
            mapboxgl.accessToken = MAPBOX_TOKEN;
            let map = new mapboxgl.Map({
                container: 'map-leaflet',
                style: 'mapbox://styles/mapbox/streets-v9',
                zoom: 10,
                center: [cityLon, cityLat]
        });
        console.log(cityLon + ', ' + cityLat);

        // Event Creates markers and deletes any existing markers
        map.on('click', (event) => {
            event.preventDefault()
            // remove markers
            if (currentMarkers!==null) {
                for (let i = currentMarkers.length - 1; i >= 0; i--) {
                    currentMarkers[i].remove();
                }
            }
            // Variable holds clicked location's lat and lon
             clickedPoint = [event.lngLat.lng, event.lngLat.lat];

            // Centers the map on the clicked location
                const location = {
                    center: clickedPoint,
                    zoom: map.getZoom(),
                    pitch: map.getPitch(),
                    bearing: map.getBearing(),
                };
            // Moves map to clicked location
                map.flyTo(location);
                const clicked = {
                    location: location
                };
            //Logs the new Lat and Lon
              console.log(JSON.stringify(clicked, null, 2));

            let marker = new mapboxgl.Marker()
                .setLngLat([clickedPoint[0], clickedPoint[1]])
                .addTo(map);
                currentMarkers.push(marker);

            //
            let clickedCityCoor = {
                lat: event.lngLat.lat,
                lng: event.lngLat.lng
            };

            //Runs function that updates forecast to new location
            reverseGeocode(clickedCityCoor, MAPBOX_TOKEN);
        });
    }
// Function that updates users search with clicked location\
// function locationClicked() {

    function reverseGeocode(coordinates, token) {
        console.log("locationClicked called")
        let baseUrl = 'https://api.mapbox.com';
        let endPoint = '/geocoding/v5/mapbox.places/';
        return fetch(baseUrl + endPoint + coordinates.lng + "," + coordinates.lat + '.json' + "?" + 'access_token=' + token)
            .then(function(res) {
                return res.json();
            })
            .then(function(data) {
                console.log(data)
                let locationString = data.features[0].place_name;
                console.log(locationString);
                let locationArray = locationString.split(', ')
                console.log(locationArray)
                if (locationArray.length === 4){
                    let locationCity = locationArray[1]
                    console.log(locationCity);
                    loadClickedCity(locationCity);
                }
                if (locationArray.length === 5){
                    let locationCity = locationArray[2]
                    console.log(locationCity);
                    loadClickedCity(locationCity);
                }
            });
        function loadClickedCity(city) {
            // Prevents total web refresh
            // event.preventDefault();

            // Resets Map Container to delete old map
            mapContainer.innerHTML = ''
            // Variable Gets City from Search Bar

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
                renderCityMap();

            });

        }
}





/* --------------------------------------
Tasks to Complete ----------------------------------
- Make Page look better
    - Use bootstrap to style HTML while building
    - make colors more appealing

Tasks Completed ---------------------------
    - Created function that pushed JSON to Forecast Cards
        -
    - Created Variables for Forecast Cards HTML Elements
        - Set Variables equal to each attribute needed (Date, Temp, Feel Like, Humidity, Coverage)
        - Connected variable to JSON object data
        - Created DOM manipulation to push data to the HTML

    - Imported Mapbox Code
        - Feed search input into q attribute to load new location information
        - Styled Map to fit properly on page
        - Created Margins to ensure proper Spacing
        - Set Variable for lat and Lon to input into mapbox to update map
        - Created variable that is used to delete old map so the new map can render

    - Created Nav Bar
        - Added App Name
        - Added App Logo
        - Added Search Bar
        - Connected Search Bar to Ajax Request

    - HTML Creation
        - Added code for 5-day forecast cards
        - Gave IDs that connect to JSON elements
        - Created Rows and Columns for Bootstrap Spacing
        - Spaced Cards Properly using empty Column
        - Made Heading that changes when new city is searched

    - CSS
        - Created styling for Cards
        - Created margin styling for spacing
        - Created Proper Sizing styling for the Mapbox


 */