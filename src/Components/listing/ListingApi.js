import React, { Component } from 'react';
import axios from 'axios';
import ListingDisplay from './ListingDisplay';

const base_url = process.env.REACT_APP_API_URL;

class Listingapi extends Component {
    constructor(props) {
        super(props)

        this.state = {
            restaurantList: '',
            mealId: this.props.match.params.mealId

        }
    }
    render() {
        return (
            <div className='filter'>
              <div className='row'>
                <ListingDisplay listData ={this.state.restaurantList} />
              </div>
            </div>
        );
    }

    componentDidMount(){
        //http://3.17.216.66:4000/restaurant?mealtype_id=
        let mealID = this.state.mealId;
        sessionStorage.setItem('meal_id', mealID);

        axios.get(`${base_url}/restaurant?mealtype_id=${mealID}`)
        .then((res) => this.setState({restaurantList: res.data}))
    }
}

export default Listingapi;
