import {displayData , displayErr} from "../display/display"

const searchCity = function(input, unit){
    let sucessfull = false;
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=44452755b5a14a59aa3221559241002&q=${input}&days=3`, {mode: 'cors'})
    .then(function(response) {
        if(response.ok){
            sucessfull = true;
        } else {
            sucessfull = false;
        }
        return response.json();
    })
    .then(function(response) {
        if(sucessfull){
        console.log(response);
        displayData(response,unit);
        } else {
        console.log(response.error.message);
        displayErr(response.error.message);
        }
    })
}

const searchDefault = function(unit){
    const defaultCity = "New York";
    searchCity(defaultCity,unit);
}


export  {searchCity, searchDefault};