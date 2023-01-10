import React from 'react';

function CardMessage ({ id, from, text, handleEdit, handleDelete}) {
 return (

<div className="card m-3 text-right bg-light shadow-sm rounded-4 shadow">
  <div className="card-body text-left">
    <h5 className="card-text">Name : {from}</h5>
    <h5 className="card-title">Message : {text}</h5>
     <br/>
    <button
        onClick={handleEdit}
        className="btn btn-sm btn-primary w-50 mx-0 mb-2 shadow text-nowrap"
      >
        Edit
      </button>
      &nbsp;
      &nbsp;
      <button
        onClick={handleDelete}
        className="btn btn-sm btn-light w-50 mx-0 mb-2 shadow text-nowrap"
      >
        Delete
      </button>
  </div>
  </div>
  );
}   


export default CardMessage;