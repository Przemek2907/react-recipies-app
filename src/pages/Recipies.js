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
      url: `https://www.food2fork.com/api/search?key=${process.env.REACT_APP_API_KEY}`
    }
    this.getRecipies = this.getRecipies.bind(this);
  };

  async getRecipies(){
    try{
      const data = await fetch(this.state.url);
      const jsonData = await data.json();
      this.setState({
        recipies: jsonData.recipes
      })
    }catch(error){
      console.log(error);
    }
  }

  componentDidMount() {
    this.getRecipies();
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
