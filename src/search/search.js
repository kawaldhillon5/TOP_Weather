import {displayData , displayErr} from "../display/display"
import { createElementDom } from "../extra-functions/functions";

const searchSuggestion = function(unit) {

    const searchIn = document.querySelector("#search_in");
    searchIn.addEventListener("input", () =>{
        let sucessfull = false;
        fetch(`http://api.weatherapi.com/v1/search.json?key=44452755b5a14a59aa3221559241002&q=${searchIn.value}`, {mode: 'cors'})
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
                if(response.length == "0"){
                    document.getElementById("search_extra").style.display = "none";
                } else {
                    searchSugDisplay(response, unit);
                }
                console.log(response);
            } else {
                document.getElementById("search_extra").style.display = "none";
                console.log(response.error.message);
            }
        });
    });
}

const searchSugDisplay = function(input, unit) {
    document.getElementById("search_extra").style.display = "flex";
    const suggestionDiv = document.querySelector("#search_extra");
    suggestionDiv.textContent = "";
    input.forEach(element => {
        const sugesDiv = createElementDom("div","class","search_sugestion");
        sugesDiv.textContent = `${element.name}, ${element.region}, ${element.country}`;
        sugesDiv.addEventListener("click", () => {
            const searchIn = document.querySelector("#search_in");
            searchIn.value = `${element.name}, ${element.country}`;
            searchCity(`${element.name}, ${element.country}`, unit);
            suggestionDiv.textContent = "";
            suggestionDiv.classList.remove("active");
            suggestionDiv.classList.add("non-active");
        });
        suggestionDiv.classList.remove("non-active");
        suggestionDiv.classList.add("active");
        suggestionDiv.appendChild(sugesDiv);
    });

}

const searchCity = function(input, unit){
    let sucessfull = false;
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=44452755b5a14a59aa3221559241002&q=${input}&days=3`, {mode: 'cors'})
    .then(function(response) {
        document.querySelector(".content_data").style.filter = "blur(3px)";
        document.getElementById("loader").style.display = "block";
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



export  {searchCity, searchDefault, searchSuggestion};