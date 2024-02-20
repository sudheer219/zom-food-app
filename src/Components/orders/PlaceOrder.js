import React, { Component } from "react";

const base_url = process.env.REACT_APP_API_URL;

class PlaceOrder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: Math.floor(Math.random() * 10000),
      rest_name: this.props.match.params.restName,
      name: "Adam",
      email: "adam@eden.com",
      cost: 0,
      phone: +9007654321,
      address: "123 Main St",
      menuItem: "",
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  placeOrder = () => {
    let obj = this.state;
    console.log(obj);
  };

  renderMenu = (data) => {
    if(data) {
        return data.map((item) => {
            return(
                <div className="orderItem card shadow col-3 d-flex flex-column justify-content-between  pb-3" key={item.menu_id}>
                    <img height="165px" src={item.menu_image} alt={item.menu_name} />
                    <p className="fw-bold fs-5 mb-2">{item.menu_name}</p>
                    <span
                        class="badge rounded-pill text-bg-primary"
                        >Rs. {item.menu_price}/-</span
                    >
                    
                </div>
            )
        })
    }
  }

  render() {
    return (
      <>
        <div class="container mt-5">
          <div class="row justify-content-center align-items-center g-2">
            <div class="row">
              <div class="col-12">
                <div class="card">
                  <div class="card-body bg-dark bg-gradient text-white   ">
                    <h3 class="card-title">{this.state.rest_name}</h3>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card">
                  <div class="card-body">
                    <input type="hidden" name="cost" value={this.state.cost} />
                    <input type="hidden" name="id" value={this.state.id} />
                    <input
                      type="hidden"
                      name="rest_name"
                      value={this.state.rest_name}
                    />
                    <div className="row">
                      <div class="col-lg-6 col-md-6 col-sm-12 mb-3">
                        <label for="name" class="form-label fw-bold">
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          class="form-control"
                          value={this.state.name}
                          onChange={this.handleChange}
                        />
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-12 mb-3">
                        <label for="email" class="form-label fw-bold">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          class="form-control"
                          value={this.state.email}
                          onChange={this.handleChange}
                        />
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-12 mb-3">
                        <label for="phone" class="form-label fw-bold">
                          Phone
                        </label>
                        <input
                          type="phone"
                          name="phone"
                          id="phone"
                          class="form-control"
                          value={this.state.phone}
                          onChange={this.handleChange}
                        />
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-12 mb-3">
                        <label for="address" class="form-label fw-bold">
                          Address
                        </label>
                        <input
                          type="address"
                          name="address"
                          id="address"
                          class="form-control"
                          value={this.state.address}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <div className="card-footer">
                        <div className="row">
                        {this.renderMenu(this.state.menuItem)}

                        </div>

                    </div>
                    <div>
                      <h2 className="fw-bold">Total price is Rs. {this.state.cost}</h2>
                      <button
                        type="button"
                        class="btn btn-danger"
                        onClick={this.placeOrder}
                      >
                        Place order
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  // POST API request
  componentDidMount() {
    let menuItem = sessionStorage.getItem("menu");
    let orderId = [];
    menuItem.split(",").forEach((item) => {
      orderId.push(parseInt(item));
    });

    fetch(`${base_url}/menuItem`, {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify(orderId),
    })
      .then((res) => res.json())
      .then((data) => {
        console.table(data);
        let totalPrice = 0;
        data.forEach((item) => {
          totalPrice += parseFloat(item.menu_price);
        });
        this.setState({ menuItem: data, cost: totalPrice });
      });
  }
}

export default PlaceOrder;
