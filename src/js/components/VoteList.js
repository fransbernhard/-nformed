import React, { Component } from 'react'
import img from '../../img/2.jpg'

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
            console.log(response)
            if (response['dokumentlista']['dokument']) {
                this.setState({list: response['dokumentlista']['dokument'], shouldShowA: true})
            } else {
                this.setState({list: [{titel: 'Tyvärr gav din sökning inget resultat'}]})
            }
            
        }.bind(this))
    }

    updateVoteId(id) {
        this.setState({vote_id: id})
        console.log(id)
    }
    
    render(){
        return (
                <div className="votelist-container">
                    {this.state.list ? (
                        <ul>    
                       {this.state.list.map(function (key) {    
                            return <li key={key['titel']}>
                            {this.state.shouldShowA ?
                                <p onClick={() => this.updateVoteId(key['kall_id'])}>{key['titel']}</p>
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

export default VoteList