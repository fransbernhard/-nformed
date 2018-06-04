import React, { Component } from 'react'
import img from '../../img/2.jpg'

class VoteList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: null,
            url: 'https://data.riksdagen.se/dokumentlista/?utformat=json&doktyp=votering&sok=' + this.props.query
        }

        this.initFetch()
    }

    initFetch() {
        fetch(this.state.url).then(function (request) {
            return request.json()
        }).then(function (response) {
            console.log(response)
            this.setState({list: response['dokumentlista']['dokument']})
        }.bind(this))
    }
    

    render(){
        return (
        <div className="bg" style={{backgroundImage: `url(${img})`}}>
            <div className="wrapper">
                <h1>VoteList</h1>
                <div className="votelist-container">
                    {this.state.list ? (
                        <ul>
                       {
                        this.state.list.map(function (key) {
                            console.log(key)
                            return <li>{key['titel']}</li>
                        })
                       }

                        </ul>
                    ) 
                    : 
                    (<p>ingen lista</p>)}
                </div>
            </div>
        </div>
        )
    }
}

export default VoteList