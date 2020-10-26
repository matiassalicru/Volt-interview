import React from "react";
import "./Car.css";

export const Car = ({ image, desc, model, caracs }) => {
  return (
    <div className="car-content-container">
      <div className="car-header">
        <h2>
          <span className="car-header-model">VOLT </span>
          {model}
        </h2>
      </div>

      <div className="car-container">
        <div className="card-image-container">
          <img className="card-image" src={image} alt="vehicle" />
        </div>

        <div className="card-description-container">
          <h2 className="card-desc-desc"> {desc}</h2>
          <div className="card-desc-caract">
            <ul className="card-desc-ul">
              {caracs.map((detail, i) => (
                <li key={i} className="card-desc-li">
                  - {detail}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
