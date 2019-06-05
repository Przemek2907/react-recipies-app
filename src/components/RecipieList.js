import React, { Component } from 'react';
import Recipie from "./Recipie";

export default class RecipiesList extends Component {
  render() {
    const {recipies} = this.props;
    return (
      <React.Fragment>
      <div className="container py-5">
          <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3">
            <h1></h1>
            <h2 className="text-slanted">Recipie List</h2>
          </div>
          <div className="row">
          {recipies.map(item => (<Recipie key={item.recipe_id} recipie={item} />))}
            </div>
      </div>
      </React.Fragment>
    )
  }
}
