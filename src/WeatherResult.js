import React from "react";
import "./weather.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function WeatherResult({ date, mintemp, maxtemp, condition, icon, city }) {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col">
            <div className="card-columns">
              <div className="card result">
                <ul>
                  <li>
                    <img
                      className="card-img-top "
                      src={icon}
                      alt="Card image cap"
                    />
                  </li>
                  <div className="card-body">
                    <li>
                      <h5 className="card-title">{date}</h5>
                    </li>
                    <li>
                      <p className="card-text">{condition}</p>
                    </li>
                    <li>
                      <p className="card-text">
                        {mintemp} C / {maxtemp} C
                      </p>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WeatherResult;
