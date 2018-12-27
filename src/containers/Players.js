import React, { Component } from 'react';
import {connect} from 'react-redux'; 
import * as action from '../store/actions/index';
import Card from '../components/Card/Card';

class Players extends Component {
  componentDidMount = () =>{
    this.props.dataPlayers();
  }

  render() {
    let card = <h1>Loading......!!!!</h1>
    if(this.props.loading){
        card = this.props.players.map(player => (
          <Card 
              key={player.idPlayer}
              data={player}>
          </Card>
        )
      );
    }

    return (
      <div className="container">
        <h1>Players</h1>
        {card}
      </div>
    )
  }
}

const mapStateToProps = state =>{
    return {
        players: state.players.dataPlayer,
        error: state.players.error,
        loading: state.players.loading
    }
};

const mapDispatchToProps = dispatch => {
    return {
      dataPlayers : () => dispatch(action.getDataPlayers())
    };
};

export default connect(mapStateToProps, mapDispatchToProps) (Players);

