import React from 'react';
import {
  Button,
  ButtonGroup
} from "reactstrap";
import WorldMap from '../WorldMap';

export const HomeView = (props) => (
  <div>
    <ButtonGroup>
      <Button onClick={() => props.toggleView(true)}>Map</Button>
      <Button onClick={() => props.toggleView(false)}>List</Button>
    </ButtonGroup>

    {props.businessViewIsMap
      ? <WorldMap/>
      : 'ListView'}

  </div>
);

export default HomeView;
