import React, { Component } from 'react'
import { UIView } from '@uirouter/react';
import ProductsTable from './ProductsTable.jsx';

class Products extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
    <div>
      <h1>Products</h1>
      <ProductsTable/>
      <UIView/>
    </div>
    )
  }
}

export default Products
