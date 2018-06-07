import React, {Component} from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from "redux"
import { addCity, putCity } from "../redux/actions/index"

class Add extends Component {
  constructor(props){
    super(props)

    this.state = {
      city: "",
      errorMsg: "",
      population: ""
    }

    // bind metonds
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

  handleAddCity(e) {
    e.preventDefault()

    let city = this.state.city.toLowerCase()
    let population = Number(this.state.population)

    if(/^[a-zA-Z\u00C0-\u00ff]/.test(city)){
      var cityNotExists = false

      this.props.posts.map(post => {
        var postName = post.name.toLowerCase()
        if (postName !== city) {
          cityNotExists = true
        } else {
          cityNotExists = false
          this.setState({
          	errorMsg: "City already exists"
          })
        }
      })

      if(cityNotExists){
        city = city.charAt(0).toUpperCase() + city.slice(1).toLowerCase()
        const myObject = {
          name: city,
          population: population
        }
        this.props.addCity(myObject)
      }
    } else {
      this.setState({
      	errorMsg: "Error use of invalid characters"
      })
    }
	}

	render(){
	  return (
      <div>
        <h1>Add</h1>
        <p className="errorMsg">{ this.state.errorMsg ? this.state.errorMsg : null }</p>
        <form className="addForm">
          <input type="text" onChange={this.handleChangeCity} placeholder="City" name="city" />
          <input type="text" onChange={this.handleChangePopulation} placeholder="Population" name="pop" />
          <button onClick={this.handleAddCity}>Add</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = posts => {
  return posts
}

const mapDispatchToProps = dispatch => ({
  putCity: id => dispatch(putCity(myObject)),
  addCity: id => dispatch(addCity(myObject))
})

export default connect(mapStateToProps, mapDispatchToProps)(Add)
