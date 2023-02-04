import React, { useEffect, useState } from "react";
import "./main.css";
import Location from "../../assets/location.png";
import Search from "../../assets/Search.png";
import Calender from "../../assets/calender.png";
import axios from "axios";
import CompCard from "../card_component/CompCard";

const Main = () => {
  const [data, setdata] = useState(null);
  const [dailydata, setdailydata] = useState([]);
  const [latitude, setlatitude] = useState(33.44);
  const [longitude, setlongitude] = useState(-94.04);

  // const locationUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=8f5bd92afe77df9c66df9a1a11948f56`;
  const baseUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=imperial&appid=8f5bd92afe77df9c66df9a1a11948f56`;

  const getData = (event) => {
    // axios.get(locationUrl).then((response) => {
    //   setlatitude(response.data.lat);
    //   setlongitude(response.data.lon);
    //   // console.log(latitude);
    //   // console.log(longitude);
    // });

    axios.get(baseUrl).then((response) => {
      console.log(response.data);
      setdata(response.data);
      setdailydata(response.data.daily);
    });

    setlatitude("");
    setlongitude("");
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(dailydata);

  return (
    <div className="main">
      <div className="box">
        <div className="top">
          <div className="city">
            <div className="city_name">
              <img src={Location} alt="" />
              <span>London</span>
            </div>
            <div className="city_coordinates">
              <span>27°10'36'' N & 78°0'29'' E</span>
            </div>
          </div>

          <div className="search_box">
            <input
              type="text"
              placeholder="Enter the latitude"
              value={latitude}
              onChange={(event) => {
                setlatitude(event.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Enter the longitude"
              value={longitude}
              onChange={(event) => {
                setlongitude(event.target.value);
              }}
            />
            <img src={Search} alt="" onClick={getData} />
          </div>
        </div>

        <div className="center">
          <div className="details">
            <div className="date_button_box">
              <span>Select Date:</span>
              <div className="date_button">
                <button>
                  <img src={Calender} alt="" /> 20 JAN 2023
                </button>
              </div>
            </div>
            <span>High Temperature</span>
            <span>Low Temperature</span>
            <span>Humidity</span>
            <span>Sunrise Time</span>
            <span>Sunset Time</span>
          </div>

          <div className="cards">
            {dailydata.length > 0 && (
              <CompCard
                humidity={dailydata[0].humidity}
                max_temp={dailydata[0].temp.max}
                min_temp={dailydata[0].temp.min}
                weather={dailydata[0].weather[0].main}
                iconId={dailydata[0].weather[0].icon}
                sunrise={dailydata[0].sunrise}
                sunset={dailydata[0].sunset}
                timezone={data.timezone}
              />
            )}

            {dailydata.length > 0 && (
              <CompCard
                humidity={dailydata[1].humidity}
                max_temp={dailydata[1].temp.max}
                min_temp={dailydata[1].temp.min}
                weather={dailydata[1].weather[0].main}
                iconId={dailydata[1].weather[0].icon}
                sunrise={dailydata[1].sunrise}
                sunset={dailydata[1].sunset}
              />
            )}

            {dailydata.length > 0 && (
              <CompCard
                humidity={dailydata[2].humidity}
                max_temp={dailydata[2].temp.max}
                min_temp={dailydata[2].temp.min}
                weather={dailydata[2].weather[0].main}
                iconId={dailydata[2].weather[0].icon}
                sunrise={dailydata[2].sunrise}
                sunset={dailydata[2].sunset}
              />
            )}

            {dailydata.length > 0 && (
              <CompCard
                humidity={dailydata[3].humidity}
                max_temp={dailydata[3].temp.max}
                min_temp={dailydata[3].temp.min}
                weather={dailydata[3].weather[0].main}
                iconId={dailydata[3].weather[0].icon}
                sunrise={dailydata[3].sunrise}
                sunset={dailydata[3].sunset}
              />
            )}

            {dailydata.length > 0 && (
              <CompCard
                humidity={dailydata[4].humidity}
                max_temp={dailydata[4].temp.max}
                min_temp={dailydata[4].temp.min}
                weather={dailydata[4].weather[0].main}
                iconId={dailydata[4].weather[0].icon}
                sunrise={dailydata[4].sunrise}
                sunset={dailydata[4].sunset}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
