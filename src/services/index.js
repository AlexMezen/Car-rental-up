import axios from "axios";

class Service {
  listRentalCars = () => {
    return axios.get(`${process.env.REACT_APP_API_URL}/rental_cars`);
  };
}

export default new Service();
