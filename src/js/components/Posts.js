import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import { connect } from "react-redux"

class Posts extends Component {
	render(){
	  return (
			<div className="post-ul">
				<h1 className="add"><Link to={"/add"}>+</Link></h1>
	      <ul>
					{
	          this.props.posts.map((post, i) =>
	  					<li className="post" key={i}>
	  						<p>{post.name}</p>
								<button>DETELE</button>
	  					</li>
	  				)
	        }
	      </ul>
			</div>
    )
  }
}

const mapStateToProps = posts => {
  return posts
}

export default connect(mapStateToProps)(Posts)
