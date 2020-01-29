
import React,{Component} from 'react';
import axios from 'axios';

class Reviews extends Component{

    state= {
        reviews: null,
        currentProductId: null
    }

    componentDidUpdate(){
        const newProductId = this.props.productId;
        console.log("current = "+this.state.currentProductId);
        console.log("new "+newProductId);
        if(this.state.currentProductId !== newProductId && newProductId !== null){
        const productId = this.props.productId;
        axios.get('http://localhost:8080/api/products/'+productId+'/reviews')
        .then(response =>{
            this.setState({
                reviews: response.data,
                currentProductId: newProductId
            });
        });
    }
    }

    render(){
        
        if(this.state.reviews !== null){
            const allReviews = this.state.reviews.map(aReview => {
                return (<p key={aReview.id}> {aReview.content} </p>);
            });
        return (
            <div className="reviews">
                {allReviews}

            </div>
        );
        }
        return (<div className="reviews"></div>);

    }

}

export default Reviews;