import React from 'react';

import {
  Button,
  ButtonGroup
} from "reactstrap";

export const ToggleViewView = (props) => (
  <div className="text-center">
    <ButtonGroup>
      <Button outline={props.businessViewIsMap ? false : true} color="info" onClick={() => props.toggleView(true)}>
        <svg className="bi bi-map" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"
             xmlns="http://www.w3.org/2000/svg">
          <path
            d="M15.817.613A.5.5 0 0116 1v13a.5.5 0 01-.402.49l-5 1a.502.502 0 01-.196 0L5.5 14.51l-4.902.98A.5.5 0 010 15V2a.5.5 0 01.402-.49l5-1a.5.5 0 01.196 0l4.902.98 4.902-.98a.5.5 0 01.415.103zM10 2.41l-4-.8v11.98l4 .8V2.41zm1 11.98l4-.8V1.61l-4 .8v11.98zm-6-.8V1.61l-4 .8v11.98l4-.8z"
          />
        </svg>
      </Button>
      <Button outline={!props.businessViewIsMap ? false : true} color="info" onClick={() => props.toggleView(false)}>
        <svg className="bi bi-list-ul" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"
             xmlns="http://www.w3.org/2000/svg">
          <path
            d="M5 11.5a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zm0-4a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zm0-4a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zm-3 1a1 1 0 100-2 1 1 0 000 2zm0 4a1 1 0 100-2 1 1 0 000 2zm0 4a1 1 0 100-2 1 1 0 000 2z"
          />
        </svg>
      </Button>
    </ButtonGroup>
  </div>
);

export default ToggleViewView
