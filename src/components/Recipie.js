import React, { Component } from 'react'
import {Link} from "react-router-dom";

export default class Recipie extends Component {
  render() {
    const {image_url, title,publisher, source_url,recipe_id} = this.props.recipie; 
    return (
      <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
        <div className="card" style={{height:'100%'}}>
          <img className="card-image-top" style={{height:'15rem'}} src={image_url} alt="The dish photo"/>
          <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <h5 className="card-text text-slanted text-red">Provided by{publisher}</h5>
          </div>
            <div className="card-footer">
              <Link to={`/recipies/${recipe_id}`} className="btn btn-primary text-uppercase mx-2">
              Details
              </Link>
              <a href={source_url} target="_blank" rel="noopener noreferrer" className="btn btn-success text-uppercase mx-2">Visit BLOG </a>
            </div>
        </div>
      </div>
    )
  }
}