import React, { Component } from 'react'
import { connect } from 'react-redux'
import Statistics from './Statistics.js'
import img from '../../img/2.jpg'

class Vote extends Component {
  constructor(props) {
      super(props)
      this.state = {
          title: null,
          debateName: null,
          date: null,
          votes: null,
          parties: null,
          resultData: null,
          url: 'https://data.riksdagen.se/votering/' + this.props.vote_id.id + '/json'
      }
      this.getTotalVotes = this.getTotalVotes.bind(this)
      this.getPartyVotes = this.getPartyVotes.bind(this)
      this.handleVoteClick = this.handleVoteClick.bind(this)
      this.handleOptionClick = this.handleOptionClick.bind(this)
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
                votes: votes,
                parties: [...new Set(votes.map(member => member.parti))]
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

    getPartyVotes(party) {
      const members = this.state.votes.filter(vote => vote.parti == party)
      const partyVotes = {
        Ja: members.filter(vote => vote.rost == 'Ja').length,
        Nej: members.filter(vote => vote.rost == 'Nej').length,
        Avstår: members.filter(vote => vote.rost == 'Avstår').length,
        Frånvarande: members.filter(vote => vote.rost == 'Frånvarande').length
      }
      return partyVotes
    }

    handleVoteClick(e) {
      e.preventDefault()
      const totalVotes = this.getTotalVotes()
      this.setState({resultData: totalVotes})
    }

    handleOptionClick(party) {
      this.setState({resultData: this.getPartyVotes(party)})
    }

  render(){
      return (
            <div className="bg" style={{backgroundImage: `url(${img})`}}>
              <div className="wrapper">
                <h1>{this.state.title}</h1>
                <h2>{this.state.debateName}</h2>
                <h3>{this.state.date}</h3>

                { this.state.votes
                  ? <div>
                    <div>
                      <button onClick={() => this.handleVoteClick}>Alla röster</button>
                      <select>{this.state.parties.map(party => {
                        return <option onClick={() => this.handleOptionClick(party)}>{'Röster för ' + party}</option>
                      })}</select>
                    </div>

                    <Statistics resultData={this.state.resultData}/>
                  </div>
                  : null
                }
              </div>
            </div>

      )
  }
}

const mapStateToProps = vote_id => {
    return vote_id
}

export default connect(mapStateToProps, null)(Vote)
