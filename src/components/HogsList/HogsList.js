import React from "react";
import './HogsList.css'

function HogsList({ hogs }) {
 const hogsList = hogs.map((hog) => {
    return (
      <div key={hog.name} className="ui four wide column">
        
          <h3>{hog.name}</h3>
          <img src={hog.image} alt={hog.name} />
      </div>
    );
 });

 return (
    <div className="ui grid container">
      {hogsList}
    </div>
 );
}

export default HogsList;
