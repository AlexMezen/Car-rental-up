import React from 'react';
import ReactDOM from 'react-dom';
import './Header.css';
function CarCard(props){
   let narr = props.cars.map(el=>{
       return(
        <div className ="carsf">
            <div className ="carwindow">
                <div className ="carname">{ el.brand }{ el.model }</div>
                <div className ="carspecifications">{ el.gearbox } { el.engine }</div>
                <div className ="pricename">
                    <div className ="price">{el.pricePerDay}</div>
                    <div className ="pricedays">
                       <div className="flex-pricedays">
                        {Math.floor(el.pricePerDay * 7)}
                        </div>
                        </div>
                </div>
            </div>
        </div>)
   })
    return(
    <div className='CarsAlign'>
    {narr}
    </div>
    )
}
export default CarCard;