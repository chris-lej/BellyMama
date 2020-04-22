import React from 'react';
import {
  Button,
  ButtonGroup
} from "reactstrap";
import BusinessDisplay from '../BusinessDisplay';

export const HomeView = (props) => (
  <div>
    <div className="text-center">
      <ButtonGroup>
        <Button outline={props.businessViewIsMap ? false : true} color="info" onClick={() => props.toggleView(true)}>Map View</Button>
        <Button outline={!props.businessViewIsMap ? false : true} color="info" onClick={() => props.toggleView(false)}>List View</Button>
      </ButtonGroup>
    </div>
    <BusinessDisplay />
  </div>
);

export default HomeView;
