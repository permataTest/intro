import React, { Component } from 'react';
import Axios from '../axios-team';
import {connect} from 'react-redux'; 
import * as actionTypes from '../store/actions/index'

import Gambar from '../components/Image/Image';

class Home extends Component {

state = {
  cek : false
}

changeImage = () => {
  
  if (this.state.cek === false) {
    console.log('false')
    this.setState({
      cek : true
    })
  } else {
    console.log('true')
    this.setState({
      cek : false
    })
  }
}

componentWillMount() {
  this.props.getDataTeam()
  // Axios({
  //   method:'get'
  // })
  //   .then((response) => {
  //   console.log(response.data.teams[0])
  //   let result = response.data.teams[0]
  //   this.setState({
  //     namaTeam : result.strTeam,
  //     manager : result.strManager,
  //     stadion : result.strStadium,
  //     
  //   })
  //   console.log(result.strStadium)
  // });
}

  render() {
     let cekImage =  null
     
     if (this.state.cek === true){
       cekImage = <Gambar image={this.props.img}/>
     } else {
        cekImage = <Gambar image={this.props.logo}/>
     }

     console.log(cekImage);
     
    return (
      <div>
        <h1>Home</h1>
        <h2>ini {this.props.loading}</h2>
        <h2>Nama Team : {this.props.namaTeam}</h2>
        <h2>Manager   : {this.props.manager}</h2>
        <h2>stadion   : {this.props.stadion}</h2>
        {cekImage}
        <button onClick={this.changeImage}>Button</button>
      </div>
    )
  }
}

const mapDispatchToProps= dispatch => {
  return{
    getDataTeam : () => dispatch(actionTypes.getDataHome())
  }
}

const mapStateToProps = state => {
  console.log(state.homes,'iniiiiiiiiiii');
  
  return{
    namaTeam : state.homes.namaTeam,
    manager : state.homes.manager,
    stadion : state.homes.stadion,
    loading : state.homes.loading,
    img : state.homes.img,
    logo : state.homes.logo
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)