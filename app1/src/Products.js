import React, { Component } from 'react'
import './Products.css'

class Product extends Component {
    render() {
        const {product} = this.props;
        let isNew = product.new ? 'new' : '';
        let isFree = product.free ? 'free' : '';
        let className = `${isFree} ${isNew}`
        return <li className={ className}>{product.name}</li>
    }
}

class Products extends Component {
  render() {
    const {products} = this.props
    return <ul className='Products' > 
        {products.map(p => <Product product={p}/>)}
    </ul>
  }
}
export default Products