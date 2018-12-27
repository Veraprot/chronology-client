import React from 'react'
import UserTimeline from './UserTimeline'
import Card from './Card'

import {connect} from 'react-redux'

class Game extends React.Component {
  render() {
    return (
      <>
        <div>hi</div>
        <UserTimeline/>
        <Card/>
      </>
    )
  }
}

export default Game