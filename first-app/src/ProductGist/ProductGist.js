import React,{Component} from 'react';
import './ProductGist.css';

class ProductGist extends Component{

    render(){
        return (
            <p className="productgist" onClick={this.props.clickHandler}>product {this.props.product.id} {this.props.product.name} Rs. {this.props.product.price}</p>
        );
    }

}

export default ProductGist;