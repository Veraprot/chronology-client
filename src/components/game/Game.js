import React from 'react'
import UserTimeline from './UserTimeline'
import Card from './Card'
import GameAnswerForm from './GameAnswerForm'

import {connect} from 'react-redux'

class Game extends React.Component {
  render() {
    return (
      <> 
        {/* <Card/> */}
        <UserTimeline/>
        <div className="user-answer-form">
          <GameAnswerForm/>
        </div>
      </>
    )
  }
}

export default Game