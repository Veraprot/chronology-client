import React from 'react'
import {connect} from 'react-redux'
import { formatDate } from '../../helpers/dateFormatter'


class UserTimeline extends React.Component {
  constructor(props) {
    super(props)
  }

  sortTimelineCards = () => {
    return this.props.game.answeredCards.sort((a, b) => {
      return a.date.split("/").join('') - b.date.split("/").join('')
    })
  }

  renderTimelineCards = () => {
    let sortedCards = this.sortTimelineCards();
    return sortedCards.map( card => {
      return (
        <div key={card.id} className="card-container top">
          <div className="card-content">
              <p> {card.event}</p>
              <p>{formatDate(card.date)}</p>
          </div>
        </div>
      )
    })
  }
  render() {
    return (
      <>
        <div className="timeline-container">
          {this.renderTimelineCards()}
        </div>
      </>
    )
  }
}

const mapStateToProps = state => ({
  game: state.game
})

export default connect(mapStateToProps)((UserTimeline));

