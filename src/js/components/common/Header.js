import {Link} from 'react-router-dom'
import React, { Component } from 'react'

class Header extends Component {
  render(){
    return(
      <header>
        <nav>
          <ul className="menu-ul">
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'riksdagen'}>Riksdagen</Link></li>
            <li><Link to={'statistics'}>Statistics</Link></li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header
