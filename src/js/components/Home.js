import React, { Component } from 'react'
import Posts from './Posts.js'
import img from '../../img/2.jpg'

import { connect } from 'react-redux'
import { bindActionCreators } from "redux"
import { fetchAll } from "../redux/actions/index"

class Home extends Component {
  constructor(props){
    super(props)
    const URL = 'http://cities.jonkri.se/'
    this.props.fetchAll(URL)
  }

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

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchAll }, dispatch)
}

export default connect(null, mapDispatchToProps)(Home)
