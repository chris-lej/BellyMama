// Original Data Tree //
export const apiDataTree = (state) => state.apiData.businesses || [];
export const apiDataExists = (state) => apiDataTree(state).length || false;

// Business View //
export const businessViewIsMap = (state) => state.mapView;

export default {
  apiDataTree,
  apiDataExists,
  businessViewIsMap
}
