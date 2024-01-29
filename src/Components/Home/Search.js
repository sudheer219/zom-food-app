import React, { Component } from 'react';

const base_url = process.env.REACT_APP_API_URL;
// ${`base_url}/location`

class Search extends Component {

    constructor(props){
        super()
        console.log("Inside Constructor--");
        this.state = {
            location: '',
            restaurants: ''
        }
    }

    renderCity = (data) => {
        if(data) {
            return data.map((item) => {
                return(
                    <option value={item.state_id} key={item._id}>{item.state}</option>
                )
            })
        }        
    }

    renderRestaurant = (data) => {
        if(data) {
            return data.map((item) => {
                return(
                    <option value={item.state_id} key={item._id}>{item.state}</option>
                )
            })
        }        
    }

    //http://3.17.216.66:4000/restaurant?stateId=1
    renderCitySelect = (event) => {
        console.log(event.target.value);
        const stateId = event.target.value;

        fetch(`${base_url}/restaurant?stateId=${stateId}`, {method: 'GET'})
            .then((res) => res.json())
            .then((restaurantData) => {
                this.setState({restaurants: restaurantData});
                console.log(restaurantData)
            })
    }

    renderRestaurants = (data) => {
        if(data){
            return data.map((item) => {
                return (
                    <option value={item.restaurant_id} key={item._id}>{item.restaurant_name}</option>
                )
            })
        }
    }   


    render() {
        console.log("Inside render--");
        return (
            <main>
            <div className="hero-section d-flex flex-column justify-content-center  align-items-center text-white  ">
              <div className="z-3 text-center">
                <h1 className="z-3 fw-medium fs-1 hero-text">Savoring every bite.</h1>
              </div>
              <div className="mt-4 z-3 search-area d-flex flex-column bg-dark  bg-opacity-75 rounded-3  p-4 px-5">
                <p className="fs-5 mb-2 fw-light text-center">
                  Find a food place near you
                </p>
                <div className="d-flex">
                  <span className="area me-2">
                    
                    <select 
                    className="form-select" aria-label="Default select example"
                    onChange={this.renderCitySelect}
                    >
                      <option defaultValue>Choose your city</option>
                      {this.renderCity(this.state.location)}
                    </select>
                  </span>
                  <span className="area">
                    <select className="form-select w-auto " aria-label="Default select example">
                      <option defaultValue>Choose your restaurant</option>
                      {this.renderRestaurants(this.state.restaurants)}
                    </select>
                  </span>
                  <span><button type="button" className="btn btn-primary px-5 ms-3">Search</button></span>
                </div>
              </div>
            </div>
          </main>
        );
    }

    //api LIfecycle hook calling on page load
        // API calling on page load
        componentDidMount() {
            // City API call
            fetch(`${base_url}/location`, {method: 'GET'})
            .then((res) => res.json())
            .then((locationData) => {
                this.setState({location: locationData})
            })
            .catch((err) => {
                console.log(err);
            })
        }
}

export default Search;

