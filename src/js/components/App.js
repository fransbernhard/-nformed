import React, {Component} from 'react'
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom'

import Header from './common/Header.js'
import Home from './Home.js'
import Add from './Add.js'
import VoteList from './VoteList.js'

import { connect } from 'react-redux'
import { bindActionCreators } from "redux"
import { fetchAll } from "../redux/actions/index"

class App extends Component {
  constructor(props){
    super(props)
    const URL = 'http://cities.jonkri.se/'
    
    this.props.fetchAll(URL)
  }

  render(){
    return (
      <div>
        <Router>
          <div>
            <Header/>
            <Switch>
              <Route exact path={'/'} component={Home}/>
              <Route exact path={'/add'} component={Add}/>
              <Route exact path={'/votelist'} component={VoteList}/>
              <Route render={() => { return <Redirect to="/" /> }} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchAll }, dispatch)
}

export default connect(null, mapDispatchToProps)(App)
