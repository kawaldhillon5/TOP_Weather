import { createElementDom, insertHtml } from "../extra-functions/functions";
import { format } from "date-fns";

const displayData = function(input,unit){

    const contentDiv = document.querySelector(".content_data");
    contentDiv.textContent = "";
    displayCurrent(contentDiv, input ,unit);
}

const displayErr = function(input){
    const errDiv = document.querySelector(".content_data");
    errDiv.textContent = input;
}

const displayCurrent = function(contentDiv, input, unit){
    const date = new Date();
    console.log(date);
    const cityName = createElementDom("div","class", "city_name");
    const country = createElementDom("div","class","city_country")
    const currentDay = createElementDom("div","class","current_day");
    const currentTime = createElementDom("div","class","current_time");
    const cityTemp = createElementDom("div","class", "city_temp");
    const cityWind = createElementDom("div","class","city_wind");
    const condition = createElementDom('div',"class","city_condition")
    const cityTempFeel = createElementDom("div","class","city_tempFeel");
    const cityPreci = createElementDom("div","class","city_preci");
    const cityTempMax = createElementDom("div","class","city_tempMax");
    const cityTempMin = createElementDom("div","class","city_tempMin");
    const sunRise = createElementDom("div","class","city_sunRise");
    const sunSet = createElementDom("div","class","city_sunSet");
    cityName.textContent = input.location.name;
    country.textContent = input.location.country;
    currentDay.textContent = format(date, 'yyyy-MM-dd');
    currentTime.textContent = date.toLocaleTimeString();
    condition.textContent = input.current.condition.text;
    cityPreci.textContent = `${input.forecast.forecastday[0].day.daily_chance_of_rain}%`;
    sunRise.textContent = `Sun Rise at ${input.forecast.forecastday[0].astro.sunrise}`;
    sunSet.textContent = `Sun Set at ${input.forecast.forecastday[0].astro.sunset}`;
    if(unit){
        cityTemp.textContent = `Temp ${input.current.temp_c} C`;
        cityWind.textContent = `Wind ${input.current.wind_kph} kph`;
        cityTempFeel.textContent = `Feels like ${input.current.feelslike_c} C`;
        cityTempMax.textContent = `Max ${input.forecast.forecastday[0].day.maxtemp_c} C`;
        cityTempMin.textContent = `Min ${input.forecast.forecastday[0].day.mintemp_c} C`;
    } else {
        cityTemp.textContent = `Temp ${input.current.temp_f} F`;
        cityWind.textContent = `Wind ${input.current.wind_mph} mph`;
        cityTempFeel.textContent = `Feels like${input.current.feelslike_f} F`;
        cityTempMax.textContent = `Max ${input.forecast.forecastday[0].day.maxtemp_f} F`;
        cityTempMin.textContent = `Min ${input.forecast.forecastday[0].day.mintemp_f} F`;
    }
    contentDiv.appendChild(cityName);
    contentDiv.appendChild(country);
    contentDiv.appendChild(currentDay);
    contentDiv.appendChild(currentTime);
    contentDiv.appendChild(condition);
    contentDiv.appendChild(cityTemp);
    contentDiv.appendChild(cityTempMax);
    contentDiv.appendChild(cityTempMin);
    contentDiv.appendChild(cityTempFeel);
    contentDiv.appendChild(cityWind);
    contentDiv.appendChild(cityPreci);
    contentDiv.appendChild(sunRise);
    contentDiv.appendChild(sunSet);
}

export  {displayData, displayErr}