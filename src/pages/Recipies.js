import React, { Component } from 'react'
import RecipieList from "../components/RecipieList";
import Search from "../components/SearchBar";
import {recipieData} from "../data/tempList";

export default class Recipies extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recipies: recipieData,
      search: '',
    }
  }

  handleChange = (e) => {
    this.setState({
      search: e.target.value,
    });
  };

  handleSubmit = (e) =>{
    e.preventDefault()
  }
  render() {
    return (
      <React.Fragment>
        <Search search={this.state.search} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        <RecipieList recipies={this.state.recipies}/>
      </React.Fragment>
    )
  }
}
