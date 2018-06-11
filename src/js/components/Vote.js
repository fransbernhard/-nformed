import React, { Component } from 'react'
import img from '../../img/2.jpg'

class Vote extends Component {
            constructor(props) {
                super(props)
                this.state = {
                    title: null,
                    debateName: null,
                    date: null,
                    votes: null,
                    url: 'https://data.riksdagen.se/votering/' + this.props.id + '/json'
                }
            }

            componentDidMount() {
                this.initFetch()
            }

            initFetch() {
                fetch(this.state.url).then(result => {
                    return result.json()
                }).then(result => {
                    if (result['votering']['dokvotering']) {
                      console.log('yep');
                      const doc = result.votering.dokument
                      const votes = result.votering.dokvotering.votering
                        this.setState({
                          title: doc['titel'],
                          debateName: doc['debattnamn'],
                          date: doc['datum'].split(' ')[0],
                          votes: votes
                        })
                    } else {
                       console.log('nope');
                        this.setState({title: 'Kunde inte hämta voteringsinfo'})
                    }
                })
              }

            render(){
                return (
                        <div>
                            <div>
                                <h1>{this.state.title}</h1>
                                <h2>{this.state.debateName}</h2>
                                <h3>{this.state.date}</h3>
                            </div>
                            /*
                              Rendera BarChart.js här med this.state.votes som input?
                            */
                        </div>
                )
            }
          }
export default Vote
