import React from 'react'
import { getProfile } from '../../actions/profileActions';
import {connect} from 'react-redux'
import TimeLineForm from '../shared/TimeLineForm'
import Game from './Game'


class GameIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        { !this.props.game.gameView &&
        <TimeLineForm/>
        }
        <Game/>
      </>
    )
  }
}


const mapStateToProps = state => ({
  game: state.game
});


export default connect(mapStateToProps, { getProfile })(
  (GameIndex)
);
