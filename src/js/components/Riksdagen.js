import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import img from '../../img/2.jpg'
import VoteList from './VoteList.js'
import Slider from 'react-background-slideshow'

import img1 from '../../img/riks/votering-min.jpg'
import img2 from '../../img/riks/riksdagshuset-min.jpg'
import img3 from '../../img/riks/voteringsknappar-min.jpg'
import img4 from '../../img/riks/voteringstavla-min.jpg'


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
        return  <div className="bg" id="riksbg" style={{backgroundImage: `url(${img})`}}>
                    <div className="wrapper" id="riksdagen">
                        {this.props.match.params.query ? 
                            <div className="common-container">
                                <h1>Voteringar</h1>
                                <Link className="button" to={'../riksdagen'}>Ny sökning</Link>
                                <VoteList query={this.props.match.params.query} />
                        </div>
                        :
                        <div className="common-container"> 
                            <h1>Sök efter votering</h1>
                            <input type="text" name="query" onChange={this.handleChange} /><br/>
                            <Link className="button" to={`riksdagen/${this.state.query}`}>Sök</Link>
                        </div>}
                    </div>
                    <Slider images={[img1,img2, img3, img4]} />
                </div>
    }
}

export default Riksdagen