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
        : 'NADA'
      }
    </div>
  );

export default ListView;
