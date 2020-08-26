import React from "react";
import BusinessDisplay from "../BusinessDisplay";
import InitialDisplay from "../InitialDisplay";

export const HomeView = (props) => (
  <div id="home-container">
    <div className={!!props.businessesDataExist ? "d-none" : ""}>
      <InitialDisplay />
    </div>
    {!!props.businessesDataExist && <BusinessDisplay />}
  </div>
);

export default HomeView;
