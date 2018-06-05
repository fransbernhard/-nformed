import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import img from '../../img/2.jpg'
import VoteList from './VoteList.js'


/*
Class for inputing a search string and render a VoteList component based on that search query
Author: Johan
*/
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
        this.setState({query: event.target.value})
    }

    render() {
        return  <div className="bg" style={{backgroundImage: `url(${img})`}}>
                    <div className="wrapper" id="riksdagen">
                        <h1>VoteList</h1>
                        {this.props.match.params.query ? 
                            <div className="common-container">
                                <Link className="button" to={'../riksdagen'}>Ny sökning</Link>
                                <VoteList query={this.props.match.params.query} />
                        </div>
                        :
                        <div className="common-container"> 
                            <input type="text" name="query" onChange={this.handleChange} /><br/>
                            <Link className="button" to={`riksdagen/${this.state.query}`}>Sök</Link>
                        </div>}
                    </div>
                </div>
    }

}

export default Riksdagen