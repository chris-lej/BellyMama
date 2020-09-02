// Search category
export const currentSearchCategory = (state) =>
  state.apiData.category || "initial-value";

// Original Data Tree //
export const businessesDataTree = (state) => state.apiData.businesses || [];

export default {
  businessesDataTree,
  currentSearchCategory,
};
