import React, { useState } from "react";
import './HogsList.css';
import Modal from "../Modal/Modal";

function HogsList({ hogs }) {
 const [showModal, setShowModal] = useState(false);
 const [selectedHog, setSelectedHog] = useState(null);

 const hogsList = hogs.map((hog) => {
    return (
      <div key={hog.name} className="ui four wide column" onClick={() => {
        setSelectedHog(hog);
        setShowModal(true);
      }}>
        <h3>{hog.name}</h3>
        <img src={hog.image} alt={hog.name} />
      </div>
    );
 });

 const handleClose = () => {
    setShowModal(false);
    setSelectedHog(null);
 };

 return (
    <div className="ui grid container">
      {hogsList}
      {showModal && <Modal handleClose={handleClose} show={showModal} hog={selectedHog} />}
    </div>
 );
}

export default HogsList;
