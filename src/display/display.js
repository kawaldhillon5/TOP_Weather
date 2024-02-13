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
    
    contentDiv.appendChild(displayLocationInfo(input));
    contentDiv.appendChild(displayWeatherInfo(input,unit));
}

const displayLocationInfo = function(input){

    const date = new Date();
    console.log(date);

    const locationInfoDiv = createElementDom("div","id","city_info");
    const cityName = createElementDom("div","id", "city_name");
    cityName.setAttribute("class","location_info_item");
    const country = createElementDom("div","id","city_country")
    country.setAttribute("class","location_info_item");
    const currentDay = createElementDom("div","id","current_day");
    currentDay.setAttribute("class","location_info_item");
    const currentTime = createElementDom("div","id","current_time");
    currentTime.setAttribute("class","location_info_item");

    cityName.textContent = input.location.name;
    country.textContent = input.location.country;
    currentDay.textContent = format(date, 'yyyy-MM-dd');
    currentTime.textContent = date.toLocaleTimeString();

    locationInfoDiv.appendChild(cityName);
    locationInfoDiv.appendChild(country);
    locationInfoDiv.appendChild(currentDay);
    locationInfoDiv.appendChild(currentTime);

    return locationInfoDiv;

}

const displayWeatherInfo = function(input,unit){
    const weatherInfoDiv = createElementDom("div","id","weather_info");
    const conditionDiv = createElementDom("div","id","condition_div");
    const tempDiv = createElementDom("div","id","temp_div");
    const bottomDiv = createElementDom("div","id","bottom_div");
    const cityTemp = createElementDom("div","id", "city_temp");
    cityTemp.setAttribute("class","weather_info_item");
    const cityWind = createElementDom("div","id","city_wind");
    cityWind.setAttribute("class","weather_info_item");
    const condition = createElementDom('div',"id","city_condition")
    condition.setAttribute("class","weather_info_item");
    const cityTempFeel = createElementDom("div","id","city_tempFeel");
    cityTempFeel.setAttribute("class","weather_info_item");
    const cityPreci = createElementDom("div","id","city_preci");
    cityPreci.setAttribute("class","weather_info_item");
    const cityTempMax = createElementDom("div","id","city_tempMax");
    cityTempMax.setAttribute("class","weather_info_item");
    const cityTempMin = createElementDom("div","id","city_tempMin");
    cityTempMin.setAttribute("class","weather_info_item");
    const sunRise = createElementDom("div","id","city_sunRise");
    sunRise.setAttribute("class","weather_info_item");
    const sunSet = createElementDom("div","id","city_sunSet");
    sunSet.setAttribute("class","weather_info_item");
    
    condition.textContent = input.current.condition.text;
    cityPreci.textContent = `Precip ${input.forecast.forecastday[0].day.daily_chance_of_rain}%`;
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
    
    conditionDiv.appendChild(condition);
    conditionDiv.appendChild(cityTemp);
    tempDiv.appendChild(cityTempMax);
    tempDiv.appendChild(cityTempMin);
    conditionDiv.appendChild(cityTempFeel);
    bottomDiv.appendChild(cityWind);
    bottomDiv.appendChild(cityPreci);
    bottomDiv.appendChild(sunRise);
    bottomDiv.appendChild(sunSet);

    weatherInfoDiv.appendChild(conditionDiv);
    weatherInfoDiv.appendChild(tempDiv);
    weatherInfoDiv.appendChild(bottomDiv);

    return weatherInfoDiv;
}

export  {displayData, displayErr}