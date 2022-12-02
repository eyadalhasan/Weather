import React, { useState } from "react";
import { FetchData } from "../Utils/ApiUtils";
function Search(props) {
    const [city, setCity] = useState('');


    function chgCity(e) {
        props.chgCity(e.target.value)


    }
    function btnClicked() {
        props.getweatherData();
    }

    return (
        <div className="Navbar">

            <input type="text" placeholder="Type in a city name" onChange={chgCity} />
            <button onClick={btnClicked}>FIND WEATHER</button>
        </div>
    );



}
export default Search