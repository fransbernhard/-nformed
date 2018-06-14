import React, { Component } from 'react'
import Posts from './Posts.js'
import Add from './Add.js'
import Weather from './Weather.js'
import img from '../../img/2.jpg'

class Home extends Component {
  render(){
    return (
      <div className="bg" style={{backgroundImage: `url(${img})`}}>
        <div className="wrapper">
          <h1>HOME</h1>
          <Posts />
          <Add />
          <Weather />
        </div>
      </div>
    )
  }
}

export default Home
