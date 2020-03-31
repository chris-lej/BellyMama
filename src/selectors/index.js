// Original Data Tree //
export const apiDataTree = (state) => state.apiData.businesses || [];
export const apiDataExists = (state) => apiDataTree(state).length || false;

export default {
  apiDataTree,
  apiDataExists
}
