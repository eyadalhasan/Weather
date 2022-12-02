import React from "react";
import clear from './weather-icons/clear.svg';
import cloudy from './weather-icons/cloudy.svg';
import drizzle from "./weather-icons/drizzle.svg"
import fog from "./weather-icons/fog.svg"
import mostlycloudy from "./weather-icons/mostlycloudy.svg"
import partlycloudy from "./weather-icons/partlycloudy.svg"
import rain from "./weather-icons/rain.svg"
import snow from "./weather-icons/snow.svg"
import storm from "./weather-icons/storm.svg"
import WeatherOver24Hour from "./WeatherOver24Hour";

function WeatherToday(props) {
    var img;
    img = [];

    const id = props?.weather?.weather[0].id
    if (id < 300)
        img.push(<img src={storm} alt="" key={1} />)
    else if (id >= 300 && id <= 499)
        img.push(<img src={drizzle} alt="" key={1} />)
    else if (id >= 500 && id <= 599)
        img.push(<img src={rain} alt="" key={1} />)

    else if (id >= 600 && id <= 699)
        img.push(<img src={snow} alt="" key={1} />)

    else if (id >= 700 && id <= 799)
        img.push(<img src={fog} alt="" key={1} />)
    else if (id == 800)
        img.push(<img src={clear} alt="" key={1} />)
    else if (id == 801)
        img.push(<img src={partlycloudy} alt="" key={1} />)
    else if (id > 801 && id <= 805)
        img.push(<img src={mostlycloudy} alt="" key={1} />)


    return (
        <div className="weather__today">

            {img}
            {props?.weather?.weather[0].description ? <p>{props?.weather?.weather[0].description}</p> : null}
            {props?.weather?.weather[0].description ? <span ><span>Tempreture</span> {props?.weather?.main.temp_min}&deg; to   {props?.weather?.main.temp_max}&deg;C</span> : null}
            <br />
            {props?.weather?.weather[0].description ? <span ><span> Humidity </span>  {props?.weather?.main.humidity}<span>   pressure</span> {props?.weather?.main.pressure} </span> : null}
        </div>

    )

}
export default WeatherToday
