import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import img from '../../img/2.jpg'
import VoteList from './VoteList.js'
import Slider from 'react-background-slideshow'
import { InlineSuggest } from 'react-inline-suggest'

import img1 from '../../img/riks/votering-min.jpg'
import img2 from '../../img/riks/riksdagshuset-min.jpg'
import img3 from '../../img/riks/voteringsknappar-min.jpg'
import img4 from '../../img/riks/voteringstavla-min.jpg'


/*
Class for inputing a search string and render a VoteList component based on that search query
Author: Johan
*/

const suggestions = [
    'sexualbrott', 'finans', 'bilar', 'brott', 'straff', 'miljö', 'vård', 'omsorg', 'skola', 
    'ofredande', 'vindkraft', 'ekonomi', 'August', 'Jean', 'Mimi', 'Johan', 'Sverigedemokraterna'
]

class Riksdagen extends Component {
    constructor() {
        super()
        this.state = {
            showList: false,
            query: null,
            value: ''
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
        this.setState({
            query: event.target.value,
            value: event.currentTarget.value
        })
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
                            <InlineSuggest 
                                haystack={suggestions} 
                                value={this.state.value} 
                                onChange={this.handleChange} 
                                ignoreCase={true} 
                            />
                            <Link className="button" to={`riksdagen/${this.state.query}`}>Sök</Link>
                        </div>}
                    </div>
                    <Slider images={[img1,img2, img3, img4]} />
                </div>
    }
}

export default Riksdagen