import axios from "axios";

export const getApartmentsList = () => {
  return axios.get('https://apt-booking-api.herokuapp.com/apartments');
}

export const getApartmentById = id => {
  return axios.get(`/apartments/${id}`);
}