import React from 'react';
import './list-view.css'

const ListView = (props) => (
    <div>
      {
        props.businesses.length
        ? props.businesses.map(({ name, address, phone, website }) => {
            return (
              <div key={name} className="business-container">
                <h3>{name}</h3>
                <div>{address}</div>
                <div>{phone}</div>
                <div>{website}</div>
              </div>
            )
          })
        : <div className="business-container text-center">
            'Select the service you are looking for with the dropdown above.'
          </div>
      }
    </div>
  );

export default ListView;