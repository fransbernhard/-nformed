import React, { Component } from 'react'
import { connect } from 'react-redux'

class Weather extends Component {
  render() {
    var city = this.props.city
    var temp = this.props.temp

    return (
      <div>
        <div className="title">
          <h1>Weather</h1>
        </div>
        <div className="weather">
          {
            this.props.city === undefined ?
            <p>Please select a city</p>
            :
            <p
              style={{color: "#005ce6", fontSize: "16px"}}>
              {city}, {temp} °C
            </p>
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return state.weather
}

export default connect(mapStateToProps, null)(Weather)
