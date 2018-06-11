import React, { Component } from 'react'
import img from '../../img/2.jpg'
import data from '../../data.js'
import BarChart from 'react-bar-chart'

const barchartData = [
  {text: 'Man', value: 500},
  {text: 'Woman', value: 300}
]

const margin = {top: 20, right: 20, bottom: 30, left: 40}

class Statistics extends Component {
  componentDidMount () {
    window.onresize = () => {
     this.setState({width: this.refs.root.offsetWidth})
    }
  }

  handleBarClick(element, id) {
    console.log(`The bin ${element.text} with id ${id} was clicked`)
  }

  render() {
    return (
      <div className="bg" style={{backgroundImage: `url(${img})`}}>
        <div className="wrapper">
          <h1 style={{color: 'white'}}>Statistics</h1>
            <BarChart style={{fill: "white"}} ylabel='Quantity'
                    width={800}
                    height={500}
                    margin={margin}
                    data={data}
                    onBarClick={this.handleBarClick} />
        </div>
      </div>
    )
  }
}

export default Statistics
