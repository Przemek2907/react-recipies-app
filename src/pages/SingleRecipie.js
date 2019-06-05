import React, { Component } from 'react'
import {recipeData} from "../data/tempDetails";
import {Link} from "react-router-dom";

export default class SingleRecipie extends Component {
  constructor(props){
    super(props);
      const id = this.props.match.params.id;
      this.state = {
        recipie:recipeData,
        id,
        loading:false,
      }
  }
  render() {
    const {title, image_url, ingredients, publisher, publisher_url, source_url} = this.state.recipie;
      if (this.state.loading){
        return(<div className="row">
          <div className="col-10 mx-auto col-md-6 my-3">
            <h2 className="text-uppercase text-center text-orange">
              loading recipies...
            </h2>
          </div>
        </div>)
      }
      else {
        return (
      <div className="container my-5">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-4">
            <Link to="/recipies">
              <button className="btn btn-warning text-uppercase mb-5">view all</button>
            </Link>
            <img src={image_url} alt="dish" className="d-block w-100" style={{maxHeight:'30rem'}} />
          </div>
          <div className="col-10 mx-auto col-md-6 my-4">
            <h6 className="text-uppercase">{title}</h6>
            <h6 className="text-warning text-capitalize text-slanted">Provided by {publisher}</h6>
            <a href={publisher_url} target="_blank" rel="noopener noreferrer" className="btn btn-success text-capitalize mt-2">Visit website</a>
            <a href={source_url} target="_blank" rel="noopener noreferrer" className="btn btn-primary text-capitalize mt-2 mx-2">Recipie URL</a>
            <ul className="list-group mt-4">
              <h3 className="mt-3 mb-4">ingredients</h3>
              {ingredients.map((item,index) =>{
                return (<li key={index} className="list-group-item text-slanted">{item}</li>)
              })}
            </ul>
          </div>
        </div>
      </div>
      )
    }
  }
}
