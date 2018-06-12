import React, {Component} from 'react'
import {
    BrowserRouter as Router,
    HashRouter as HashRouter,
    Route,
    Redirect,
    Switch
} from 'react-router-dom'

import Header from './common/Header.js'
import Home from './Home.js'
import Add from './Add.js'
import VoteList from './VoteList.js'
import Riksdagen from './Riksdagen.js'
import Vote from './Vote.js'
import Statistics from './Statistics.js'

import { connect } from 'react-redux'
import { bindActionCreators } from "redux"
import { fetchAll } from "../redux/actions/index"

class App extends Component {
  constructor(props){
    super(props)
    const URL = 'http://cities.jonkri.se/'

    this.props.fetchAll()
  }

  render(){
    return (
      <div>
        <HashRouter>
          <div>
            <Header/>
            <Switch>
              <Route exact path={'/'} component={Home}/>
              <Route exact path={'/riksdagen'} component={Riksdagen}/>
              <Route exact path={'/vote'} component={Vote}/>
              <Route exact path={'/riksdagen/:query'} component={Riksdagen}/>
              <Route exact path={'/votering/'} component={Vote}/>
              <Route exact path={'/statistics'} component={Statistics}/>
              <Route render={() => { return <Redirect to="/" /> }} />
            </Switch>
          </div>
        </HashRouter>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({fetchAll}, dispatch)
}

export default connect(null, mapDispatchToProps)(App)
