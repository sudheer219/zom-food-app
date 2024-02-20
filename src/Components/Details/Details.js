import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import MenuDetails from "./MenuDetails";

const base_url = process.env.REACT_APP_API_URL;

class Details extends Component {
  constructor(props) {
    super(props);

    this.state = {
      details: "",
      menuList: "",
      mealId: sessionStorage.getItem("mealId")
        ? sessionStorage.getItem("mealId")
        : 1,
      userItem: "",
    };
  }

  addToCart = (orderData) => {
    this.setState({userItem: orderData})
  }

  proceed = () => {
    sessionStorage.setItem('menu', this.state.userItem);
    this.props.history.push(`/placeOrder/${this.state.details.restaurant_name}`)
  }

  render() {
    let details = this.state.details;

    return (
      <>
        <div className="container mt-4">
          <div className="card d-flex flex-row bg-light">
            <div
              style={{
                width: "360px",
                height: "275px",
                overflow: "hidden",
                flex: "1 0 auto",
              }}
            >
              <img
                className="card-img-top rounded-0  "
                src={details.restaurant_thumb}
                alt="Title"
              />
            </div>
            <div className="card-body ps-4 " style={{width:'475px'}}>
              <h4 className="card-title">{details.restaurant_name}</h4>
              <p className="card-text">📍 {details.address}</p>
              <div className="pt-3">
                <div>
                  <Tabs>
                    <TabList>
                      <Tab>About</Tab>
                      <Tab>Contact</Tab>
                    </TabList>

                    <TabPanel>
                      <p>
                        <strong>{details.restaurant_name}</strong> is Lorem
                        ipsum dolor sit amet consectetur, adipisicing elit.
                        Voluptas vel vitae Lorem ipsum dolor, sit amet
                        consectetur adipisicing elit. Cumque culpa tenetur
                        maiores ipsam hic at aliquid aliquam! Dolorum laboriosam
                        laudantium maxime doloribus in
                      </p>
                    </TabPanel>
                    <TabPanel>
                      <h5>{details.address}</h5>
                      <p>Want to reserve , call: {details.contact_number}</p>
                    </TabPanel>
                  </Tabs>
                  <Link
                    to={`listing/${this.state.mealId}`}
                    className="btn btn-secondary "
                  >
                    Back
                  </Link>
                </div>
              </div>
            </div>

            <div className="card-footer w-25 ps-5 flex-grow-0 ">
              <div className="text-muted">
                <p className="mb-0">Customer's rating:</p>
                <p className="badge rounded-pill shadow  text-dark-emphasis text-bg-warning">
                  {details.average_rating}
                </p>
                <mark className="small px-1">{details.rating_text}</mark>
              </div>
              <p className="fst-italic mb-1">Meal for 2 person</p>
              <span className="badge rounded-pill fs-6 text-bg-success">
                Rs. {details.cost}/-
              </span>
              <div className="my-4">
               
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => {this.proceed()}}
                >
                  Proceed
                </button>
                
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-center text-uppercase border-bottom my-4 text-danger   ">
              Menu
            </h2>
            <MenuDetails menuData={this.state.menuList}
            finalOrder={(data) => {this.addToCart(data)}}
            ></MenuDetails>
          </div>
        </div>
      </>
    );
  }

  async componentDidMount() {
    //http://3.17.216.66:4000/details/1
    
    /* axios.get(`${base_url}/restaurant?mealtype_id=${mealID}`)
        .then((res) => this.setState({restaurantList: res.data})) */
    let restId = this.props.location.search.split("=")[1]; // get query param value;
    let detailResponse = await axios.get(`${base_url}/details/${restId}`);
    this.setState({ details: detailResponse.data[0]});

    let menuResponse = await axios.get(`${base_url}/menu/${restId}`);
    this.setState({menuList: menuResponse.data });
   
  }
}

export default Details;
