import React, { Component } from 'react'
import img from '../../img/2.jpg'
import { connect } from 'react-redux'
import { increment, decrease, setCounter, setVoteId } from "../redux/actions/index"
import {Link} from 'react-router-dom'

/*
Uses a search query to fetch a list of "Voteringar" from data.riksdagen.se
Then renders an <ul> with the titel for each object retreived in the request
If the request did not contain any objects, a error message is rendered instead.
Each <li> has an onClick that stores a value with redux and a Link to to render Vote.js.
Author: Johan
*/

class VoteList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: null,
            url: 'https://data.riksdagen.se/dokumentlista/?utformat=json&doktyp=votering&sok=' + this.props.query,
            shouldShowA : false,
            vote_id: null
        }
        this.updateVoteId = this.updateVoteId.bind(this)
    }

    componentDidMount() {
        this.initFetch()
    }

    initFetch() {
        fetch(this.state.url).then(function (request) {
            return request.json()
        }).then(function (response) {
            if (response['dokumentlista']['dokument']) {
                this.setState({list: response['dokumentlista']['dokument'], shouldShowA: true})
            } else {
                this.setState({list: [{titel: 'Tyvärr gav din sökning inget resultat'}]})
            }

        }.bind(this))
    }

    updateVoteId(id) {
        this.setState({vote_id: id})

    }

    render(){
        return (
                <div className="votelist-container">
                    {this.state.list ? (
                        <ul>
                       {this.state.list.map(function (key) {
                            return <li key={key['titel']}>
                            {this.state.shouldShowA ?
                                <p onClick={() => this.props.setVoteId(key['kall_id'])}><Link to={'/votering'}>{key['titel']}</Link></p>
                            :
                                <p>Din sökning gav inget resultat</p>}
                            </li>
                        }.bind(this))
                       }
                        </ul>)
                    :
                    (<p>Söker...</p>)}
                </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    setVoteId: (value) => dispatch(setVoteId(value))
})

const mapStateToProps = vote_id => {
    return vote_id
}

export default connect(mapStateToProps, mapDispatchToProps)(VoteList)
