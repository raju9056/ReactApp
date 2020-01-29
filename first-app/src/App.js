import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import './ProductGist/ProductGist';
import ProductGist from './ProductGist/ProductGist';
import productInfo from './ProductInfo/ProductInfo';
import ProductInfo from './ProductInfo/ProductInfo';
import Reviews from './Reviews/Reviews';
import  ProductForm from './ProductForm/ProductForm';


class App extends Component {

  state = {
    products: [
      {id: 1, name: "Wooden Comb", price: 199, qoh: 300},
      {id: 2, name: "Flame Thrower", price: 3999, qoh: 50}
    ],
    selectedProduct:{}
  }

  updateProductList = (newProduct) => {
   const updatedProductList = [...this.state.products, newProduct];
   this.setState({products: updatedProductList});
  } 

  componentDidMount() {
    axios.get("http://localhost:8080/api/products")
    .then(response => {
      this.setState({products: response.data}) //setstate takes an object
    });
  }
  

  productSelectionHandler = (product) => {
    //console.log(product);
    this.setState({selectedProduct: product});
  }

  render() {
    
    const productGists = this.state.products.map(aProduct => {
      return (
      <ProductGist key = {aProduct.price} product={aProduct} 
        clickHandler= {() => {this.productSelectionHandler(aProduct)}} />);
    });

    return (
      <div className="App">
        <div className="sidebar">
             <ProductForm updateHandler={this.updateProductList}/>
            <div className="productlist">
                {productGists}
            </div>
        </div>
        <div className="detailedproductinfo">
            <ProductInfo product={this.state.selectedProduct} />
            <Reviews productId = {this.state.selectedProduct.id} />
            </div>
    
      </div>
    );
  }
}

export default App;

