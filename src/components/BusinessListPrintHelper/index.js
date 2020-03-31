import React from 'react';

// The goal of this component is to easily print to the screen the list of businesses according to the service search for in Yelp (apiData).
// This component could be ignored and will ideally be removed in the future. Quick easy hack to get the info and move forward to whitelist businesses.

function Index(props) {
  const showData = JSON.stringify({...props.businesses}, null, 2)

  return (
    <pre>
      {showData}
    </pre>
  );
}

export default Index;
