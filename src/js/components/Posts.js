import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import { connect } from 'react-redux'
import { bindActionCreators } from "redux"
import { deleteCity, putCity } from "../redux/actions/index"

class Posts extends Component {
	constructor(props){
		super(props)

		this.state = {
      city: "",
      population: ""
    }

		this.deleteCity = this.deleteCity.bind(this)
		this.handleChangeCity = this.handleChangeCity.bind(this)
		this.handleChangePopulation = this.handleChangePopulation.bind(this)
		this.handleAddCity = this.handleAddCity.bind(this)
	}

	handleChangeCity(e) {
		this.setState({
			city: e.target.value
		})
	}

	handleChangePopulation(e){
		this.setState({
			population: e.target.value
		})
	}

	showPutCity(id) {
		
	}

	handlePutCity(e) {
		e.preventDefault()
		console.log(e)
		const myObject = {
			name: city,
			population: population
		}
		this.props.putCity(myObject)
	}

	deleteCity(id){
		this.props.deleteCity(id)
	}

	render(){
	  return (
			<div className="post-ul">
	      <ul>
					<form className="putForm hide">
						<input type="text" onChange={this.handleChangeCity} placeholder="City" name="city" />
						<input type="text" onChange={this.handleChangePopulation} placeholder="Population" name="pop" />
						<button onClick={this.handlePutCity}>Update</button>
					</form>
					{
	          this.props.posts.map((post, i) =>
	  					<li className="post" key={i} onClick={() => this.putCity(post.id)}>
	  						<p>{post.name}</p>
								<p>{post.population}</p>
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
  deleteCity: id => dispatch(deleteCity(id)),
	putCity: id => dispatch(putCity(id))
})

const mapStateToProps = posts => {
  return posts
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
