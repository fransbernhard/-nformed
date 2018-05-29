import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux"
import { fetchAll } from "../redux/actions/index"

import img from '../../img/6.jpg'

class Add extends Component {
  constructor(props){
    super(props)

    this.state = {
      city: "",
      errorMsg: ""
    }

    this.handleChangeCity = this.handleChangeCity.bind(this)
    this.handleAddCity = this.handleAddCity.bind(this)
  }

  handleChangeCity(e) {
    console.log(e.target.value)
		this.setState({
			city: e.target.value,
      errorMsg: ""
		})
	}

  handleAddCity(e) {
		 e.preventDefault()
		 this.addCity(this.state.city)
	}

  addCity(city){
    let val = this.state.city
    console.log(/^[a-zA-Z]+$/.test(val))
    if(/^[a-zA-Z]+$/.test(val)){
      console.log("SUCCESS")
    } else {
      console.log("ERROR")
      this.setState({
  			errorMsg: "Error use of invalid characters"
  		})
    }
  }

	render(){
	  return (
      <div className="bg" style={{backgroundImage: `url(${img})`}}>
        <div className="wrapper">
          <h1>Add</h1>
          <p className="errorMsg">{ this.state.errorMsg ? this.state.errorMsg : null }</p>
          <form className="addForm">
            <input type="text" onChange={this.handleChangeCity} placeholder="City" name="city" />
            <button onClick={this.handleAddCity}>Add</button>
          </form>
        </div>
      </div>
    )
  }
}


const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchAll }, dispatch)
}

export default connect(null, mapDispatchToProps)(Add)
