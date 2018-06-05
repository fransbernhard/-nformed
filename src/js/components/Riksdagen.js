import React, { Component } from 'react'
import img from '../../img/2.jpg'
import VoteList from './VoteList.js'

class Riksdagen extends Component {

    constructor() {
        super()
        this.state = {
            showList: false,
            query: null
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.newSearch = this.newSearch.bind(this)

    }

    handleSubmit(searchQuery) {
        this.setState({showList: true})
    }

    newSearch() {
        this.setState({showList: false})
    }

    handleChange(event) {
        console.log(event.target.value)
        this.setState({query: event.target.value})
    }

    render() {
        return  <div className="bg" style={{backgroundImage: `url(${img})`}}>
                    <div className="wrapper" id="riksdagen">
                        <h1>VoteList</h1>
                        {this.state.showList ? 
                            <div className="common-container">
                                <p className="button" onClick={this.newSearch}>Ny sökning</p>
                                <VoteList query={this.state.query} />
                        </div>
                        :
                        <div className="common-container"> 
                            <input type="text" name="query" onChange={this.handleChange} /><br/>
                            <p className="button" onClick={this.handleSubmit}>Sök</p>
                        </div>}
                    </div>
                </div>
    }

}

export default Riksdagen