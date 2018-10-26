import React, { Component } from 'react';
import Product from '../Product/Product'

export default class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            productsList: []
        }
    }


  render() {
    return (
      <div>
        Dashboard
        <Product productsList={this.props.productsList}/>
      </div>
    )
  }
}
