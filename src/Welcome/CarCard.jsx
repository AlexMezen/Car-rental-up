import React from "react";
import "./CarCard.css";

function CarCard({ car }) {
  return (
    <div className="carsf">
      <div className="carwindow">
        <div className="carname">
          {car.brand} {car.model}
        </div>
        <div className="carSpecifications">
          {car.gearbox} {car.engine}
        </div>
        <div className="pricename">
          <div className="price">{Math.floor(car.pricePerDay)}</div>
          <div className="pricedays">
            <div className="roundPricedays">
              {Math.floor(car.pricePerDay * 7)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarCard;
