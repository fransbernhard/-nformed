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

class App extends Component {
  render(){
    return (
      <div>
        <Router>
          <div>
            <Header/>
            <Switch>
              <Route exact path={'/'} component={Home}/>
              <Route exact path={'/add'} component={Add}/>
              <Route render={() => { return <Redirect to="/" /> }} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}


export default App
