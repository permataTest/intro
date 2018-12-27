import React, { Component } from 'react';
import Axios from '../axios-team';

import Gambar from '../components/Image/Image';

export default class Home extends Component {

state = {
  namaTeam : null,
  manager : null,
  stadion : null,
  img : null,
  logo : null,
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
  Axios({
    method:'get'
  })
    .then((response) => {
    console.log(response.data.teams[0])
    let result = response.data.teams[0]
    this.setState({
      namaTeam : result.strTeam,
      manager : result.strManager,
      stadion : result.strStadium,
      img : result.strStadiumThumb,
      logo : result.strTeamLogo
    })
    console.log(result.strStadium)
  });
}

  render() {
     let cekImage =  null
     if (this.state.cek === true){
       cekImage = <Gambar image={this.state.img}/>
     } else {
        cekImage = <Gambar image={this.state.logo}/>
     }
    return (
      <div>
        <h1>Home</h1>
      <h2>Nama Team : {this.state.namaTeam}</h2>
      <h2>Manager   : {this.state.manager}</h2>
      <h2>stadion   : {this.state.stadion}</h2>
      {cekImage}
      <button onClick={this.changeImage}>Button</button>
      </div>
    )
  }
}
