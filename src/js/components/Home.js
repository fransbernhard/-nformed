import React, { Component } from 'react'
import Posts from './Posts.js'
import img from '../../img/2.jpg'

class Home extends Component {
  render(){
    return (
      <div className="bg" style={{backgroundImage: `url(${img})`}}>
        <div className="wrapper">
          <h1>HOME</h1>
          <Posts />
        </div>
      </div>
    )
  }
}

export default Home
