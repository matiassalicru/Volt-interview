import React from "react";
import './Car.css'

export const Car = ({ image, desc, model, caracs }) => {

    console.log(desc);
  return (
    <div className="car-container">
      <div className='card-image-container'>
        <img className="card-image" src={image} alt="vehicle" />
      </div>

      <div className="card-description-container">
        <p className="card-desc-model"> {model} </p>
        <p className="card-desc-desc"> {desc}</p>
      </div>
    </div>
  );
};
