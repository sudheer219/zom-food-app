import React, { Component } from "react";

class MenuDetails extends Component {
  orderId = [];

  placeOrder = (id) => {
    this.orderId.push(id);
    this.props.finalOrder(this.orderId)
  }

  removeOrder = (id) => {
    if(this.orderId.indexOf(id) > -1){
      this.orderId.splice(this.orderId.indexOf(id), 1)  
    }
    this.props.finalOrder(this.orderId)
  }

  renderCart = (orders) => {
    if(orders.length > 0) {
      return orders.map((item, index) => {
        return(
          <b key={index}>{item} <span className="ms-2"></span></b>
        )
      })
    }
  }

  renderMenu = ({ menuData }) => {
    if (menuData) {
      return menuData.map((item) => {
        return (
          <div
            key={item.menu_id}
            className="flex-row mb-4 card text-dark bg-light-subtle bg-gradient "
          >
            <span className="pt-3 pe-3 fw-bold ">{item.menu_id}</span>
            <img
              className="card-img mt-3"
              src={item.menu_image}
              style={{width: '120px', height: '100px'}}
              
              alt={item.menu_name}
            />
            <div className="card-body">
              <h5 className="card-title">{item.menu_name}</h5>
              <p className="card-text text-muted">{item.description}</p>
              <div>
                {item.menu_type == "vegetarian" ? (
                  <span className="badge rounded-pill text-bg-success">
                    ⚪ {item.menu_type}
                  </span>
                ) : (
                  <span className="badge rounded-pill text-bg-danger">
                    ⚪ {item.menu_type}
                  </span>
                )}
              </div>
            </div>
            <div className="d-flex flex-column p-3 align-items-center  ">
            <span className="fs-5 badge rounded-pill bg-dark align-self-md-center ">
              Rs. {item.menu_price}/-
            </span>
            <div className="counter-price mt-4">
              
              <button
                type="button"
                className="btn btn-success"
                onClick={() => {this.placeOrder(item.menu_id)}}
              >
               <i className="fa-solid fa-plus"></i>
              </button>
              <button
                type="button"
                className="btn btn-danger  ms-2"
                onClick={() => {this.removeOrder(item.menu_id)}}
              >
             <i className="fa-solid fa-minus"></i>
              </button>
              
            </div>
            </div>
            
          </div>
        );
      });
    }
  };

  render() {
    console.log("Orders received ", this.orderId);
    return (
      <>
        <div className="col-md-12 bg-body-tertiary ">
          <h5>Item Added</h5>
          <h6>Item {this.renderCart(this.orderId)} Added</h6>
          <div className="row">{this.renderMenu(this.props)}</div>
        </div>
      </>
    );
  }
}

export default MenuDetails;
