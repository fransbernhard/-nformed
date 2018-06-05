import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import { connect } from 'react-redux'
import { bindActionCreators } from "redux"
import { deleteCity } from "../redux/actions/index"

class Posts extends Component {
	constructor(props){
		super(props)

		this.deleteCity = this.deleteCity.bind(this)
	}

	deleteCity(id){
		this.props.deleteCity(id)
	}

	render(){
	  return (
			<div className="post-ul">
				<h1 className="add"><Link to={"/add"}>+</Link></h1>
	      <ul>
					{
	          this.props.posts.map((post, i) =>
	  					<li className="post" key={i}>
	  						<p>{post.name}</p>
								<button onClick={() => this.deleteCity(post.id)}>DELETE</button>
	  					</li>
	  				)
	        }
	      </ul>
			</div>
    )
  }
}

// const mapDispatchToProps = dispatch => {
//   return bindActionCreators({ deleteCity }, dispatch)
// }

const mapDispatchToProps = dispatch => ({
  deleteCity: id => dispatch(deleteCity(id))
})

const mapStateToProps = posts => {
  return posts
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
