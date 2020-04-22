import {
  DATA_LOADED,
  ERROR_CAPTURED,
  TOGGLE_VIEW
} from "../constants/action-types";

const initialState = {
  apiData: [],
  error: null,
  mapView: false
};

const rootReducer = (state = initialState, action) => {
  if (action.type === DATA_LOADED) {
    console.log(action.payload)
    return Object.assign({}, state, {
      apiData: action.payload
    });
  }

  if (action.type === ERROR_CAPTURED) {
    return Object.assign({}, state, {
      error: action.error
    });
  }

  if (action.type === TOGGLE_VIEW) {
    return Object.assign({}, state, {
      mapView: action.payload
    });
  }

  return state;
};

export default rootReducer;
