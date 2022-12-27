import React from 'react';

function CardMessage ({ id, from, text, handleEdit, handleDelete}) {
 return (

<div className="card text-right bg-light shadow-sm ">
  <div className="card-body">
    <p className="card-text">Name:{from}</p>
    <h5 className="card-title">Message:{text}</h5>
    <button
        onClick={handleEdit}
        className="btn btn-info btn-md"
      >
        Edit
      </button>
      &nbsp;
      <button
        onClick={handleDelete}
        className="btn btn-info btn-md"
      >
        Delete
      </button>
  </div>
  </div>
  );
}   


export default CardMessage;