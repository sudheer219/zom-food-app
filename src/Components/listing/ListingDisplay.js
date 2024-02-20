import React, { useState } from "react";
import { Link } from "react-router-dom";

const ListingDisplay = (props) => {
  const renderListData = ({ listData }) => {
    if (listData) {
      if (listData.length > 0) {
        return listData.map((item) => {
          return (
            <div className="item" key={item._id}>
              <div className=" d-flex flex-row card align-items-center ">
                <div className="card-image  card-header">
                  <img
                    src={item.restaurant_thumb}
                    alt={item.restaurant_name}
                    width="200px"
                    height="140px"
                  />
                </div>

                <div className="card-body ">
                  {/* <Link to={`/details?restId=${item.restaurant_id}`}>
                    <h5>{item.restaurant_name}</h5>
                  </Link> */}
                  <Link to={`/details?restId=${item.restaurant_id}`}>
                    <h5>{item.restaurant_name}</h5>
                  </Link>
                  <p> 📍 {item.address}</p>
                  <div>
                    <div>
                      <span className="m-1 badge rounded-pill text-bg-primary bg-opacity-75 ">
                        {item.mealTypes[0].mealtype_name}
                      </span>
                      <span className="m-1 badge rounded-pill text-bg-success bg-opacity-75">
                        {item.mealTypes[1].mealtype_name}
                      </span>
                    </div>
                    <div>
                      <span className="m-1 badge rounded-pill text-bg-warning bg-opacity-75">
                        {item.cuisines[0].cuisine_name}
                      </span>
                      <span className="m-1 badge rounded-pill text-bg-info bg-opacity-75">
                        {item.cuisines[1].cuisine_name}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="car-body">
                  <span className="m-5">
                    Customer says {item.average_rating}{" "}
                    <small>{item.rating_text}</small>
                  </span>
                </div>
                <div className="card-footer bg-transparent ">
                  <div>
                    <div>
                      cost for 2
                      <span className="badge rounded-pill text-bg-light">
                        Rs. {item.cost}
                      </span>
                    </div>
                    <div className="d-grid gap-2">
                      <Link to={`/details?restId=${item.restaurant_id}`}>
                        <button
                          type="button"
                          name="bookBtn"
                          id="bookBtn"
                          className="btn btn-danger"
                        >
                          Order now
                        </button>
                      </Link>
                    </div>
                  </div>
                    
                </div>
              </div>
            </div>
          );
        });
      } else {
        return <h2>No data found</h2>;
      }
    } else {
      return (
        <div>
          <h2>Loading...</h2>
          <img src="/images/loader.gif" width="400px" alt="loading" />
        </div>
      );
    }
  };
  return (
    <div className="container bg-light-subtle ">
      <div className="row bg-danger-subtle  ">
        <h4 className="m-0 p-2 ps-4">Restaurant Listings </h4>
      </div>
      <div className="row mt-4">
        <div className="col-2 border border-1">Filters</div>
        <div className="col">
          <div className="row">{renderListData(props)}</div>
        </div>
      </div>
    </div>
  );
};

export default ListingDisplay;
