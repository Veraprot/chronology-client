import React from 'react'
import {connect} from 'react-redux'
import {setRandomCard } from '../../actions/gameActions';

import { formatDate } from '../../helpers/dateFormatter'

class Card extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        active: false
    };

    console.log(this.props)
  }

  toggleClass = () => {
    const currentState = this.state.active;
    this.setState({ 
      active: !currentState,
    });

    if(this.state.active || this.props.game.activeCard == null) {
      this.props.setRandomCard(this.props.game.cards)
    }
  };

  generateCard = () => {  
    if( this.props.game.activeCard !== null ) {
      return (
        <>
        <div className="flip-card-front">
          <h1>{`${this.props.game.activeCard.event}`}</h1>
        </div>
        <div className="flip-card-back">
          <h1>{`${formatDate(this.props.game.activeCard.date)}`}</h1>
        </div>
      </>
      )
    }
  }

  render() {
    return (
      <>
      <div className={this.state.active ? "flip-card answered": "flip-card"} onClick={this.toggleClass}>
        <div className="flip-card-inner">
          {this.generateCard()}
        </div>
      </div>
    </>
    )
  }
}

const mapStateToProps = state => ({
  game: state.game
});


export default connect(mapStateToProps, {setRandomCard})(
  (Card)
);
