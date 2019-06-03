import React, { Component } from 'react'
import homeBcg from '../images/homeBcg.jpeg';

export default class Header extends Component {
   
    render() {
        return (
            <header>
                <div className="container-fluid">
                    <div className={`row align-items-center ${this.props.styleClass}`}>
                        <div className="col text-center">
                            <h1 className="text-light text-uppercase display-3 letter-spacing text-slanted text-red">
                                {this.props.title}
                            </h1>
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

// Header.defaultProps = {
//     title: "default title",
//     styleClass: "header-hero"
// }
