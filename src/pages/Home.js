import React, { Component } from 'react'
import Header from '../components/Header';
import {Link} from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <Header styleClass="header-hero" title="Awesome recipies">
        <Link to="/recipies" className="text-uppercase btn btn-secondary btn-lg mt-4">
          search recipies
        </Link>
      </Header>
    )
  }
}
