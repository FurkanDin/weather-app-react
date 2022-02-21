import React, { useState } from "react";
import "./App.css";
import WeatherResult from "./WeatherResult";

function App() {
  const APP_KEY = "c9b0fb2ba5cb47a3b4485328222102";
  //http://api.weatherapi.com/v1/forecast.json?key=&q=London&days=3&aqi=no&alerts=no
  let cityInput = "";
  const[weatherData,setWeatherData]=useState([]);
async function getData(value) {
  if(value==="")return alert('Write a City');
  console.log(value);
 const data = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${APP_KEY}&q=${value}&days=3&aqi=no&alerts=no`);
 const result = await data.json();
 console.log(result);
 setWeatherData(result.forecast.forecastday);
 document.querySelector("input").value="";
}
  return (
    <div className="App">
      <div className="search">
        <input
          type="text"
          placeholder="Search a city ..."
          onChange={() => {
            document.querySelector("input").addEventListener("input", (e) => {
              e.preventDefault();
              cityInput = e.target.value;
              console.log(cityInput);
            });
          }}
        />
        <button onClick={()=>getData(cityInput)}>Search</button>

      </div>
      {weatherData.map((item,key)=>(<WeatherResult key={key}  date={item.date} mintemp={item.day.mintemp_c} maxtemp={item.day.maxtemp_c} condition={item.day.condition.text} icon={item.day.condition.icon}  />))}
    </div>
  );
}

export default App;
