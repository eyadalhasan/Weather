
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
import WeatherImg from "./WeatherImg";

function WeatherOver24Hour(props) {
    var card = props?.weather?.map((item, index) => {
        if (index != 0)
            return <WeatherImg item={item} index={index} key={index} />
        else return null
        

    })

    return (
        <div className="WeatherOver24Hour">
            {card}
        </div>

    )
}
export default WeatherOver24Hour


