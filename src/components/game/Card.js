import React from 'react'
import {connect} from 'react-redux'

class Card extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        active: false,
    };
  }
  toggleClass = () => {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  };

  generateCard = () => {
    console.log(this.props.game)
    let cardStack = this.props.game.cards
    const randomCard = cardStack[Math.floor(Math.random() * cardStack.length)]
    console.log(randomCard)
    return (
      <>
        <div className="flip-card-front">
          <h1>{`${randomCard.event}`}</h1>
        </div>
        <div className="flip-card-back">
          <h1>{`${randomCard.date}`}</h1>
        </div>
      </>
    )
  }

  render() {
    return (
      <>
      <h1>Card Flip with Text</h1>
      <h3>Hover over the image below:</h3>
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


export default connect(mapStateToProps)(
  (Card)
);
