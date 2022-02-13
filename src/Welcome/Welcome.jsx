import React from "react";
import "./Welcome.css";
import CarCard from "./CarCard";
import Service from "../services/index";
import { useState, useEffect } from "react";
import Error from "../Error";
import Loading from "../Loading";

function Welcome() {
  const [cars, setCars] = useState([]);
  const [errorState, setError] = useState(false);

  useEffect(() => {
    Service.listRentalCars()
      .then((resp) => {
        setCars(resp.data);
      })

      .catch(function (error) {
        setError(error);
      });
  }, []);
  if (errorState) {
    return <Error errorMessage={errorState} />;
  }
  const totalPrice = cars.reduce((accum, car) => {
    return (accum += car.pricePerDay);
  }, 0);
  const result = Math.floor(totalPrice / cars.length);

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
              Total {cars.length} cars with average cost of {result}$ per day
            </p>
          </div>
        </div>
      </div>
      <div className="load">{cars.length === 0 ? <Loading /> : ""}</div>
      <div className="carsAlign">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
}

export default Welcome;
