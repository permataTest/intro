import React, {Component} from 'react';
import './Card.css';

class Card extends Component {
    render () {
        return (
            <div className="card">
                <img src="img_avatar.png" alt="Avatar" />
                <div className="container">
                    <h4><b>John Doe</b></h4> 
                    <p>Architect & Engineer</p> 
                </div>
            </div>
        );
    }
}

export default Card;