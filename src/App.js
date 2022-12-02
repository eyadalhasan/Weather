import React, { useEffect, useState } from 'react';
import './App.scss'
import Search from './Components/Search';
import WeatherOver24Hour from './Components/WeatherOver24Hour';
import WeatherToday from './Components/WeatherToday';
import { FetchData } from './Utils/ApiUtils';

let resp = '';

function App() {
  const [a, setA] = useState(0);
  const [city, setCity] = useState(0);

  function chgCity(value) {
    setCity(value)
  }

  async function getweatherData() {
    resp = await FetchData(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=8&units=metric&appid=72b7cb953985047d44bcfc6678b87dbe`, 'GET');


    setA((old) => {
      return old + 1
    });
    

    



  }

  return (


    resp.status != 404 ?

      <div className="app">
        <Search chgCity={chgCity} getweatherData={getweatherData} />
        <div className='weather'>
          <WeatherToday weather={resp?.data?.list[0]} />
          <div >
            <WeatherOver24Hour weather={resp?.data?.list} />
          </div>
        </div>
      </div>
      :
      <h1>Plz enter valid city</h1>


  );
}

export default App;
