import "./Header.css";
import Header from "./Header";
import Welcome from "./Welcome/Welcome";
import Loading from "./Loading";
import Service from "./services/index";
import { useState, useEffect } from "react";
import Error from "./Error";

function App() {
  const loadingState = "loading";
  const errorState = "error";
  const loadedState = "loaded";
  const [cars, setCars] = useState(loadingState);

  useEffect(() => {
    Service.listRentalCars()
      .then((resp) => {
        setCars(resp.data);
      })

      .catch(function (error) {
        setCars(errorState);
      });
  }, []);
  return (
    <div className="App">
      {(() => {
        if (cars === loadingState) {
          return (
            <div>
              <Loading />
            </div>
          );
        } else if (cars === errorState) {
          return (
            <div>
              <Error />
            </div>
          );
        } else {
          return (
            <div>
              <Header />
              <Welcome cars={cars} />
            </div>
          );
        }
      })()}
    </div>
  );
}

export default App;
