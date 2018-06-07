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
      population: "",
			id: "",
			editMode: false
    }

		this.deleteCity = this.deleteCity.bind(this)
		this.handleChangeCity = this.handleChangeCity.bind(this)
		this.handleChangePopulation = this.handleChangePopulation.bind(this)
		this.handlePutCity = this.handlePutCity.bind(this)
		this.setId = this.setId.bind(this)
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

	handlePutCity(e) {
		e.preventDefault()
		console.log(e)
		const myObject = {
			id: this.state.id,
			city: this.state.city,
			population: this.state.population
		}
		console.log(myObject)
		this.props.putCity(myObject)

		this.setState({
			editMode: false
		})
	}

	deleteCity(id){
		this.props.deleteCity(id)
	}

	setId(post) {
		this.setState({
			id: post.id,
			editMode: true,
			city: post.name,
			population: post.population
		})
	}

	render(){
	  return (
			<div className="post-ul">
	      <ul>
					{
						this.state.editMode ?
							<form className="putForm">
								<input type="text" onChange={this.handleChangeCity} placeholder={this.state.city} name="city" />
								<input type="text" onChange={this.handleChangePopulation} placeholder={this.state.population} name="pop" />
								<button onClick={this.handlePutCity}>Update</button>
							</form>
							: null
					}
					{
	          this.props.posts.map((post, i) =>
	  					<li className="post" key={i} onClick={() => this.setId(post)}>
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

const mapDispatchToProps = dispatch => ({
  deleteCity: id => dispatch(deleteCity(id)),
	putCity: myObject => dispatch(putCity(myObject))
})

const mapStateToProps = posts => {
  return posts
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
