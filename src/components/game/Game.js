import React from 'react'
import UserTimeline from './UserTimeline'
import Card from './Card'
import GameAnswerForm from './GameAnswerForm'
import {connect} from 'react-redux'

class Game extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props)
  }

  loadFiles = () => {
    if(this.props.game.cards) {
      return (
        <>
          <GameAnswerForm/>
          <UserTimeline/>
        </>
      )
    }
  }
  
  render() {
    return (
      <> 
        <Card/>
        {this.loadFiles()}
      </>
    )
  }
}

const mapStateToProps = state => ({
  game: state.game
})

export default connect(mapStateToProps)((Game));
