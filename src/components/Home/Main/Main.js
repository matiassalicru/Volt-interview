import React, { useEffect, useState } from "react";
import { Car } from "../Cars/Car";
import './Main.css'

export const Main = () => {
  const [cars, setCars] = useState({
    vehicles: [],
    loading: true,
  });

  useEffect(() => {
    fetch("https://f2f5ef2c-ff88-4f90-a867-c583ecf38bd4.mock.pstmn.io/cars")
      .then((resp) => resp.json())
      .then(({ cars }) =>
        setCars({
          vehicles: cars,
          loading: false,
        })
      );
  }, []);

  const { vehicles } = cars;

  return (
    <div className="main-container">
      {cars.loading ? (
        <p> Cargando... </p>
      ) : (
        vehicles.map((car) => (
            <Car
              key={car.model}
              model={car.model}
              image={car.image}
              caracs={car.caracs}
              desc={car.description}
            />
        ))
      )}
    </div>
  );
};
