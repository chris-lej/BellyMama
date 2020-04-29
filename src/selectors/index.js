// Original Data Tree //
export const businessesDataTree = (state) => state.apiData.businesses || [];
export const businessesWithAddress = (state) => businessesDataTree(state).filter((business) => business.address.length) || [];
export const businessesWithoutAddress = (state) => businessesDataTree(state).filter((business) => !business.address.length) || [];

// Business View //
export const businessViewIsMap = (state) => state.mapView;

export default {
  businessesDataTree,
  businessesWithAddress,
  businessesWithoutAddress,
  businessViewIsMap
}
