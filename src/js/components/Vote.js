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
<<<<<<< HEAD
=======
                      console.log('yep')
>>>>>>> 14ea58bd37bcd3311f921699aa849211ba40a943
                      const doc = result.votering.dokument
                      const votes = result.votering.dokvotering.votering
                        this.setState({
                          title: doc['titel'],
                          debateName: doc['debattnamn'],
                          date: doc['datum'].split(' ')[0],
                          votes: votes
                        })
                    } else {
<<<<<<< HEAD
=======
                       console.log('nope')
>>>>>>> 14ea58bd37bcd3311f921699aa849211ba40a943
                        this.setState({title: 'Kunde inte hämta voteringsinfo'})
                    }
                })
              }

              getTotalVotes() {
                const totalVotes = {
                  Ja: this.state.votes.filter(vote => vote.rost == 'Ja').length,
                  Nej: this.state.votes.filter(vote => vote.rost == 'Nej').length,
                  Avstår: this.state.votes.filter(vote => vote.rost == 'Avstår').length,
                  Frånvarande: this.state.votes.filter(vote => vote.rost == 'Frånvarande').length
                }
                return totalVotes
              }

            render(){
                return (
                        <div>
                          <h1>{this.state.title}</h1>
                          <h2>{this.state.debateName}</h2>
                          <h3>{this.state.date}</h3>

                          { this.state.votes ? (
                            <ul>
                              {Object.keys(getTotalVotes()).map(key => {
                                <li>{key + ': ' + getTotalVotes()[key]}</li>
                              })}
                            </ul>
                            )
                            :
                            null
                          }
                        </div>

                )
            }
          }
export default Vote
