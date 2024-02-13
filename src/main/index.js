import {searchCity, searchDefault} from "../search/search";
import "./index.css"

const run = function(){
    let unitToggle = true;
    searchDefault(unitToggle);
    const searchBtn = document.querySelector("#search_btn");
    searchBtn.addEventListener("click", () => {
        const searchIn = document.querySelector("#search_in");
        console.log(searchIn.value);
        searchCity(searchIn.value, unitToggle);
    });
    document.querySelector(".unit_toggle").addEventListener("click", () =>{
        const searchIn = document.querySelector("#search_in");
        console.log(unitToggle)
        if(unitToggle === false){
            unitToggle = true;
        } else {
            unitToggle = false;
        }
        if(searchIn.value === ""){
            searchDefault(unitToggle);
        } else {
            searchCity(searchIn.value, unitToggle);
        }
    })
}

run();