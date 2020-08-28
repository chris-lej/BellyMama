import {
  DATA_LOADED,
  ERROR_CAPTURED,
  TOGGLE_VIEW,
  CLEAR_DATA,
} from "../constants/action-types";

const initialState = {
  apiData: [],
  error: null,
  mapView: true,
};

const rootReducer = (state = initialState, action) => {
  if (action.type === DATA_LOADED) {
    return Object.assign({}, state, {
      apiData: action.payload,
    });
  }

  if (action.type === ERROR_CAPTURED) {
    return Object.assign({}, state, {
      error: action.error,
    });
  }

  if (action.type === TOGGLE_VIEW) {
    return Object.assign({}, state, {
      mapView: action.payload,
    });
  }

  if (action.type === CLEAR_DATA) {
    return Object.assign({}, state, {
      apiData: [],
    });
  }

  return state;
};

export default rootReducer;
