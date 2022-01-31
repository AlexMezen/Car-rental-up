import React from "react";
import "./Welcome.css";
import CarCard from "./CarCard";

function Welcome(props) {
  const totalPrice = props.cars.reduce((accum, car) => {
    return (accum += car.pricePerDay);
  }, 0);
  const result = Math.floor(totalPrice / props.cars.length);

  return (
    <div>
      <div className="down-header">
        <div className="headWrapper">
          <div className="logoWrapper">
            <h1>Myrentcar.Kharkiv</h1>
          </div>
          <div className="titleWrapper">
            <p className="title">
              Car rental in <span className="sp">Kharkiv</span>
            </p>
            <p className="subTitle">
              Total {props.cars.length} cars with average cost of {result}$ per
              day
            </p>
          </div>
        </div>
      </div>
      <div className="carsAlign">
        {props.cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
}

export default Welcome;
