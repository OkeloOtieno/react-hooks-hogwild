// Modal.js
import React from 'react';
import './Modal.css'; 

const Modal = ({ handleClose, show, hog }) => {
 const showHideClassName = show ? "modal display-block" : "modal display-none";

 return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <h2>{hog.name}</h2>
        <p>Specialty: {hog.specialty}</p>
        <p>Weight: {hog.weight}</p>
        <p>Greased: {hog.greased ? 'Yes' : 'No'}</p>
        <p>Highest Medal Achieved: {hog["highest medal achieved"]}</p> 
        <button type="button" onClick={handleClose}>
          Close
        </button>
      </section>
    </div>
 );
};

export default Modal;
