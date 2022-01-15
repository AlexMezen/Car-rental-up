import React from 'react';
import ReactDOM from 'react-dom';
import './Header.css';
function Welcome() {
    let arr =[
        { "id": 1, "brand": "Volkswagen", "model": "Polo", "type": "economy", "year": "2012", "pricePerDay": "17", "gearbox": "AT", "engine": "1.6"},
        { "id": 2, "brand": "Hyundai", "model": "i20", "type": "economy", "year": "2018", "pricePerDay": "16", "gearbox": "AT", "engine": "1.4"},
        { "id": 3, "brand": "Mitsubishi", "model": "Lancer", "type": "standart", "year": "2009", "pricePerDay": "17", "gearbox": "M", "engine": "1.5"},
        { "id": 4, "brand": "Skoda", "model": "Rapid", "type": "standart", "year": "2019", "pricePerDay": "20", "gearbox": "M", "engine": "1.4"},
        { "id": 5, "brand": "Toyota", "model": "Rav4", "type": "SUV", "year": "2012", "pricePerDay": "40", "gearbox": "AT", "engine": "2.2"},
        { "id": 6, "brand": "Suzuki", "model": "Vitara", "type": "SUV", "year": "2015", "pricePerDay": "21.34", "gearbox": "M", "engine": "1.6"},
        { "id": 7, "brand": "Volkswagen", "model": "Passat", "type": "luxury", "year": "2016", "pricePerDay": "37.79", "gearbox": "AT", "engine": "2"},
        { "id": 8, "brand": "Audi", "model": "A4", "type": "luxury", "year": "2012", "pricePerDay": "44", "gearbox": "AT", "engine": "2"}
    ]
    let narr= arr.map((el)=>{
        return `<li>${el}</li>`
    });
    console.log(narr);
    return(
        <div className="down-header">
            <div className="wrapper1">
            <div className="upper">
                <h1>Myrentcar.Kharkiv</h1>
            </div>
            <div className="down">
                <p className="text-1">Car rental in <span className="sp">Kharkiv</span></p>
                <p className="text-2">Total 852 cars with awerage cost</p>
            </div>
            </div>
            <div>
            {narr}
        </div>
    );
};
export default Welcome;