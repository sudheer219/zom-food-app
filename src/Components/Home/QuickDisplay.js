import React from "react";
import { Link } from "react-router-dom";

const QuickDisplay = (props) => {

     
  const listMeal = ({ mealData }) => {
    if (mealData) {
      return mealData.map((item) => {
        return (
          <div className="col-lg-3 mb-3 ">
            <Link to={`/listing/${item.mealtype_id}`} key={item._id} className="text-decoration-none ">
              <div className="custom-card position-relative ">
                <div className="card-header">
                  <img src={item.meal_image} alt={item.content} />
                </div>
                  <div 
                className="badge bg-danger position-absolute top-0 mt-1 ms-1" >                    
                    {item.mealtype}</div>
                  <p className="mb-0 p-3 fs-6 fw-medium  text-bg-light  bg-opacity-25  text-dark text-decoration-none ">{item.content}</p>
              </div>
            </Link>
          </div>
        );
      });
    }
  };
  return <div className="row">{listMeal(props)}</div>;
};

export default QuickDisplay;
