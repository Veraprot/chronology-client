import React from 'react'
import UserTimeline from './UserTimeline'
import Card from './Card'
// import CardTest from './CardTest'

import GameAnswerForm from './GameAnswerForm'

import {connect} from 'react-redux'

class Game extends React.Component {
  render() {
    return (
      <> 
        <Card/>
        {/* <CardTest/> */}
        <UserTimeline/>
        <div className="user-answer-form">
          <GameAnswerForm/>
        </div>
      </>
    )
  }
}

export default Game