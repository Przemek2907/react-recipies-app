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
      url: `https://www.food2fork.com/api/search?key=${process.env.REACT_APP_API_KEY}`,
      baseUrl: `https://www.food2fork.com/api/search?key=${process.env.REACT_APP_API_KEY}`,
      query: '&q=',
      error:'' 
    }
    this.getRecipies = this.getRecipies.bind(this);
  };

  async getRecipies(){
    try{
      const data = await fetch(this.state.url);
      const jsonData = await data.json();
      if (jsonData.recipes.length === 0) {
        this.setState({
          error: "Sorry, your search did not return any recipes.Try again or just hit the search button to find the most popular recipes in the social media."
        })
      } else {
        this.setState({
          recipies: jsonData.recipes,
          error:""
        });
      }
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

  handleSubmit = e => {
    e.preventDefault();
    const {baseUrl, query, search} = this.state;
    this.setState({
      url:`${baseUrl}${query}${search}`,
      search:''
    }, () => this.getRecipies());
  };

  render() {
    return (
      <React.Fragment>
        <Search search={this.state.search} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        {this.state.error? (
          <section>
            <div className="row">
               <div className="col">
                <h3>{this.state.error}</h3>
               </div>
            </div>
        </section>) : (<RecipieList recipies={this.state.recipies}/>)}
      </React.Fragment>
    )
  }
}
