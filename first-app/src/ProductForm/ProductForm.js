import React, {Component} from 'react';
import axios from 'axios';


class ProductForm extends Component {


    state = {
        name: '', 
        price: '',
        qoh: '',
        image: '',
        uiMessage: ''
    }

    postDataHandler =() =>{
        const product = {
            name: this.state.name,
            price: this.state.price,
            qoh: this.state.qoh,
            image: this.state.image
        }
        axios.post("http://localhost:8080/api/products", product)
        .then(response => {
            if(response.status === 201)
            {
                this.setState({
                    name: '', 
                    price: '',
                    qoh: '',
                    image: '',
                    uiMessage: 'Created Product with id ' +response.data.id
                });
                this.props.updateHandler(response.data);
            }
        }).catch(response => {
            this.setState({uiMessage: 'Something went wrong'});
        });
    }
    render(){
        return (
            <div className="productform">
                <h3>Create New Product</h3>
                <label>Name</label>
               <input type="text" placeholder="your name" value={this.state.name} onChange={event => {
                   this.setState({name: event.target.value})}}/>
                <label>Price</label>
                <input type="text" placeholder="price"  value={this.state.price} onChange={event => {
                   this.setState({price: event.target.value})}}/>
                <label>QoH</label>
                <input type="text" placeholder="Qoh" value={this.state.qoh} onChange={event => {
                    this.setState({qoh: event.target.value})}}/>
                <label>Image</label>
                <input type="text" value={this.state.image} onChange={event => {
                   this.setState({image: event.target.value})}}/>
                <button onClick={this.postDataHandler}>Click</button>
              <p className="uimessage" > {this.state.uiMessage } </p>
            </div>
        );
    }
}

export default ProductForm;