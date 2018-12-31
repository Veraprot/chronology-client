import React from 'react'
import UserTimeline from './UserTimeline'
import Card from './Card'
import AppDragDropDemo from './AppDragDropDemo';

import GameAnswerForm from './GameAnswerForm'

import {connect} from 'react-redux'

class Game extends React.Component {
  render() {
    return (
      <> 
        <Card/>
        {/* <AppDragDropDemo/> */}
        <UserTimeline/>
        <div className="user-answer-form">
          <GameAnswerForm/>
        </div>
      </>
    )
  }
}

export default Game