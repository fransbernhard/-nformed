import React, { Component } from 'react'
import BarChart from 'react-bar-chart'
import * as d3 from "d3"

import img from '../../img/2.jpg'
import data from '../../data.js'

const margin = {top: 20, right: 20, bottom: 30, left: 40}

class Statistics extends Component {
  handleBarClick(element, id) {
    console.log(`The bin ${element.text} with id ${id} was clicked`)
  }

  render() {
    return (
      <div className="bg" style={{backgroundImage: `url(${img})`}}>
        <div className="wrapper">
          <h1 style={{color: 'white'}}>Statistics</h1>
            <BarChart ylabel='Quantity'
                    width={900}
                    height={550}
                    margin={margin}
                    data={data}
                    onBarClick={this.handleBarClick} />
        </div>
      </div>
    )
  }
}

export default Statistics
