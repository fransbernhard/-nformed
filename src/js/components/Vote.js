import React, { Component } from 'react'
import { connect } from 'react-redux'
import Statistics from './Statistics.js'
import img from '../../img/2.jpg'
import Slider from 'react-background-slideshow'

import img1 from '../../img/riks/votering-min.jpg'
import img2 from '../../img/riks/riksdagshuset-min.jpg'
import img3 from '../../img/riks/voteringsknappar-min.jpg'
import img4 from '../../img/riks/voteringstavla-min.jpg'

class Vote extends Component {
  constructor(props) {
      super(props)
      this.state = {
          title: null,
          debateName: null,
          date: null,
          votes: null,
          parties: null,
          resultData: [],
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
      const totalVotes = [
        {text: 'Ja', value: this.state.votes.filter(vote => vote.rost == 'Ja').length},
        {text: 'Nej', value: this.state.votes.filter(vote => vote.rost == 'Nej').length},
        {text: 'Avstår', value: this.state.votes.filter(vote => vote.rost == 'Avstår').length},
        {text: 'Frånvarande', value: this.state.votes.filter(vote => vote.rost == 'Frånvarande').length}
      ]
      return totalVotes
    }

    getPartyVotes(party) {
      const members = this.state.votes.filter(vote => vote.parti == party)
      const partyVotes = [
        {text: 'Ja', value: members.filter(vote => vote.rost == 'Ja').length},
        {text: 'Nej', value: members.filter(vote => vote.rost == 'Nej').length},
        {text: 'Avstår', value: members.filter(vote => vote.rost == 'Avstår').length},
        {text: 'Frånvarande', value: members.filter(vote => vote.rost == 'Frånvarande').length}
      ]
      return partyVotes
    }

    handleVoteClick(e) {
      e.preventDefault()
      const totalVotes = this.getTotalVotes()
      this.setState({resultData: totalVotes})
    }

    handleOptionClick(e) {
      const partyVotes = this.getPartyVotes(e.target.value.split(' ')[2])
      this.setState({resultData: partyVotes})
    }

  render(){
      return (
            <div className="bg" style={{backgroundImage: `url(${img})`}}>
              <div className="wrapper" id="voteWrapper">
                <h1>{this.state.title}</h1>
                <h2>{this.state.debateName}</h2>
                <h3>{this.state.date}</h3>

                { this.state.votes
                  ? <div>
                    <div>
                      <button onClick={this.handleVoteClick}>Alla röster</button>
                      <select onChange={this.handleOptionClick}>{this.state.parties.map((party, i) => {
                        return <option key={i}>{'Röster för ' + party}</option>
                      })}</select>
                    </div>

                    {this.state.resultData.length > 0 ? <Statistics resultData={this.state.resultData}/> : null}
                  </div>
                  : null
                }
              </div>
              <Slider images={[img1,img2, img3, img4]} />
            </div>

      )
  }
}

const mapStateToProps = vote_id => {
    return vote_id
}

export default connect(mapStateToProps, null)(Vote)
