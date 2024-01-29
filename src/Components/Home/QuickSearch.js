import React, { Component } from "react";
import QuickDisplay from "./QuickDisplay";

const base_url = process.env.REACT_APP_API_URL;

class QuickSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mealType: "",
    };
  }
  render() {
    return (
      <>
        <div className="text-bg-light bg-opy-75" >
            <div className="container">
                <div className="row">
                    <p className="fs-3 border-bottom border-1 py-2 m-1    ">Quick Search</p>
                    <h6 className="pt-2">Find Restaurants By MealType</h6>
                </div>
            </div>
        </div>

        <div className="quick-display mt-4">
            <div className="container">
                <div className="row">
                    <QuickDisplay mealData={this.state.mealType} />
                </div>
            </div>
        </div>
      </>
    );
  }

  //api Calling
  componentDidMount() {
    fetch(`${base_url}/quicksearch`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        this.setState({ mealType: data });
      });
  }
}

export default QuickSearch;
