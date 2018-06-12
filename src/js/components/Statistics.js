import React, { Component } from 'react'
import BarChart from 'react-bar-chart'

const margin = {top: 20, right: 20, bottom: 30, left: 40}

class Statistics extends Component {
  render() {
    return (
      <div>
        {
          this.props.resultData.length != 0
          ? <BarChart ylabel='Quantity'
                  width={900}
                  height={550}
                  margin={margin}
                  data={this.props.resultData}
                  onBarClick={this.handleBarClick} />
          : null
        }
      </div>
    )
  }
}

export default Statistics
