import React, {Component} from 'react'
import img from '../../img/2.jpg'

class BarChart extends Component {
  constructor(props) {
    super(props)
   }

  render() {
    return (
      <div className="bg" style={{backgroundImage: `url(${img})`}}>
        <div className="wrapper">
          <h1>BarChart</h1>
        </div>
      </div>
    )
  }
}

export default BarChart
