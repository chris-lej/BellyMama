// import axios from 'axios'
import { DATA_LOADED, CLEAR_DATA } from "../constants/action-types";
import { getBusinessesByCategory } from "../service-catalog";

export const getBusinesses = (category) => (dispatch) => {
  const payload = {
    businesses: getBusinessesByCategory(category),
    category,
  };
  dispatch({ type: DATA_LOADED, payload });
};

export const clearBusinesses = () => (dispatch) => {
  dispatch({ type: CLEAR_DATA });
};

export default {
  getBusinesses,
  clearBusinesses,
};
