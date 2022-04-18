import React from "react";
import { useNavigate } from "react-router-dom";
import "./Service.css";
const Service = ({ service }) => {
    const navigate = useNavigate();
    const { id, icon, name, price, description } = service;
    const serviceDetail = id => {
        navigate(`/checkout/${id}`);
    }
    return (
        <div className="col mb-4">
            <div className="card h-100 card-degine">
                <img src={icon} className="card-img-top mx-auto" alt="..." />
                <div className="card-body">
                    <h3 className="card-title mb-3">{name}</h3>
                    <h5>Price: $ {price}/month</h5>
                    <hr />
                    <p className="card-text">{description}</p>
                </div>
                <div className="card-footer">
                    <button onClick={()=>serviceDetail(id)} className="btn-checkout">
                        Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Service;
