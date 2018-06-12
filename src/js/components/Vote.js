import React, { Component } from 'react'
import { connect } from 'react-redux'
import img from '../../img/2.jpg'

class Vote extends Component {
            constructor(props) {
                super(props)
                this.state = {
                    title: null,
                    debateName: null,
                    date: null,
                    votes: null,
                    url: 'https://data.riksdagen.se/votering/' + this.props.vote_id.id + '/json'
                }
                this.getTotalVotes = this.getTotalVotes.bind(this)
            }

            componentDidMount() {
                this.initFetch()
            }

            initFetch() {
                fetch(this.state.url).then(result => {
                    return result.json()
                }).then(result => {
                    if (result['votering']['dokvotering']) {
                      const doc = result.votering.dokument
                      const votes = result.votering.dokvotering.votering
                        this.setState({
                          title: doc['titel'],
                          debateName: doc['debattnamn'],
                          date: doc['datum'].split(' ')[0],
                          votes: votes
                        })
                    } else {
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
                      <div className="bg" style={{backgroundImage: `url(${img})`}}>
                        <div className="wrapper">
                          <h1>{this.state.title}</h1>
                          <h2>{this.state.debateName}</h2>
                          <h3>{this.state.date}</h3>

                          { this.state.votes ? (
                            <ul>
                              {Object.keys(this.getTotalVotes()).map(key => {
                                return <li key={key}>{key + ': ' + this.getTotalVotes()[key]}</li>
                              })}
                            </ul>
                            )
                            :
                            null
                          }
                        </div>
                      </div>

                )
            }
          }

const mapDispatchToProps = dispatch => ({

})

const mapStateToProps = vote_id => {
    return vote_id
}

export default connect(mapStateToProps, () => ({}))(Vote)
