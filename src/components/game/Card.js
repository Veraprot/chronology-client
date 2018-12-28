import React from 'react'
import {connect} from 'react-redux'

class Card extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        active: false,
        card: this.generateRandomCard()
    };
  }

  toggleClass = () => {
    const currentState = this.state.active;
    const randomCard = this.generateRandomCard()
    this.setState({ 
      active: !currentState,
    }, () => console.log(this.state));

    if( this.state.active) {
      this.setState({
        card: randomCard
      })
    }
  };

  generateRandomCard = () => {
    let cardStack = this.props.game.cards
    const randomCard = cardStack[Math.floor(Math.random() * cardStack.length)]
    return randomCard
  }

  generateCard = () => {
    return (
      <>
        <div className="flip-card-front">
          <h1>{`${this.state.card.event}`}</h1>
        </div>
        <div className="flip-card-back" >
          <h1>{`${this.state.card.date}`}</h1>
        </div>
      </>
    )
  }

  render() {
    console.log(this.state)
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
