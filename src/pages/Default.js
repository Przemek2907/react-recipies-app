import React, { Component } from 'react'
import Header from '../components/Header';
import {Link} from "react-router-dom"

export default class Default extends Component {
  render() {
    return (
      <Header styleClass="default-hero" title="404">
        <h2 className="text-light text-uppercase">Page not found</h2>
        <Link to="/" className="text-uppercase btn btn-secondary btn-lg mt-4">
          return home
        </Link>
      </Header>
    )
  }
}
