import React, { Component } from 'react'
import { scaleBand, scaleLinear } from 'd3-scale'

import img from '../../img/2.jpg'
import data from '../../data.js'

class Chart extends Component {
  constructor(props) {
    super(props)
    this.xScale = scaleBand()
    this.yScale = scaleLinear()
   }

  render() {
    const margins = { top: 50, right: 20, bottom: 100, left: 60 }
    const svgDimensions = { width: 800, height: 500 }

    const maxValue = Math.max(...data.map(d => d.value))
    console.log('VALUE', maxValue)

    const yScale = this.yScale
      .domain([0, maxValue])
      .range([svgDimensions.height - margins.bottom, margins.top])

    return (
      <svg width={svgDimensions.width} height={svgDimensions.height}>
        // Axes..
      </svg>
    )
  }
}

class BarChart extends Component {
  render() {
    return (
      <div className="bg" style={{backgroundImage: `url(${img})`}}>
        <div className="wrapper">
          <h1 style={{color: 'green'}}>Statistics</h1>
          <Chart />
        </div>
      </div>
    )
  }
}

export default BarChart
