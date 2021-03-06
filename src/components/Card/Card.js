import React, {Component} from 'react';
import './Card.css';
import Image from '../Image/Image';


class Card extends Component {
    render () {
        return (
            <div className="card">
                <Image image={this.props.data.strThumb} />
                <div className="container">
                    <h4><b>{this.props.data.strPlayer}</b></h4> 
                    <p>{this.props.data.strPosition}</p> 
                    <button onClick={this.props.delete} >Delete</button>
                </div>
            </div>
        );
    }
}

export default Card;