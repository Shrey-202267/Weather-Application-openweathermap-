import React from "react";
import "./card.css";
import { DateTime } from "luxon";

const formatToLocalTime = (sec, timezone) => {
  const date = DateTime.fromMillis(sec * 1000, { zone: timezone });
  const formattedTime = date.toLocaleString(DateTime.TIME_SIMPLE);
  return formattedTime;
  // console.log(formattedTime);
};

const CompCard = ({
  humidity,
  max_temp,
  min_temp,
  weather,
  iconId,
  sunrise,
  sunset,
  timezone,
}) => {
  return (
    <div className="card">
      <span className="date">20 Jan 2023</span>
      <div className="black_card">
        <div className="card_details">
          <div className="card_details_top">
            <div className="weather_img_details">
              <img
                src={`http://openweathermap.org/img/wn/${iconId}@2x.png`}
                alt=""
              />
              <span>{weather}</span>
            </div>
          </div>

          <div className="card_details_bottom">
            <span>
              {max_temp && Math.round((max_temp - 32) * 0.5556)}°C /
              {max_temp && Math.round(max_temp)}°F
            </span>
            <span>
              {min_temp && Math.round((min_temp - 32) * 0.5556)}°C /
              {min_temp && Math.round(min_temp)}°F
            </span>
            <span>{humidity && humidity}%</span>
            <span>{formatToLocalTime(sunrise, timezone)}</span>
            <span>{formatToLocalTime(sunset, timezone)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompCard;
