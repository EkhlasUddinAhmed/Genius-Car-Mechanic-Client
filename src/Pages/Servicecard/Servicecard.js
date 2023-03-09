import React from "react";
import { Link } from "react-router-dom";
import "./Servicecard.css";

const Servicecard = ({ service }) => {
  const { title, price, img, _id } = service;

  return (
    <div class="card">
      <img src={img} class="card-img-top img-fluid" alt="..." />
      <div class="card-body">
        <h5 class="card-title title-design">{title}</h5>
        <p class="card-text price-design">Price:${price}</p>

        <div className="d-flex justify-content-end">
          <Link to={`/checkout/${_id}`}>
            <button className="btn btn-danger">Booking Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Servicecard;
