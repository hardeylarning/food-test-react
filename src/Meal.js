import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Plus } from 'react-bootstrap-icons';

const Meal = ({ id, image, description, strMeal, title, price, ratings, preview}) => (
    <div className="card" key={id}>
        <img src={image}  className="card-img-top" alt="" />
        <div className="card-body">
            <h5 className="card-title">
                <span>{title}</span>
                <span className="float-end">{price}</span>
            </h5>
            <h6 className="card-subtitle mb-2 text-muted">{strMeal}</h6>
            <p className="card-text">{ description.substring(0,50)}
            <button type="button"
                onClick={preview}
                className="btn btn-sm btn-outline-warning ">Read more...</button></p>
        </div>
        <div className="row justify-content-between">
            <span className="col-8">
                <ReactStars 
                count= {ratings}
                size= {24}
                color="#ffd700"
                />
            </span>
            <span className="offset-1 col-3">
                <button onClick={preview} 
                    className="btn btn-lg border-end-0 rounded-right-0 float-end text-white btn-warning"
                >
                    <i className=""><Plus height="25" width="30" /></i>
                </button>
                
            </span>
        </div>
    </div>
)

export default Meal;