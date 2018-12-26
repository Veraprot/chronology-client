import React from 'react'
import { getProfile } from '../../actions/profileActions';
import {connect} from 'react-redux'
import TimeLineForm from '../shared/TimeLineForm'

class GameIndex extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props)
  }
  render() {
    return (
      <>
        <TimeLineForm/>
      </>
    )
  }
}


const mapStateToProps = state => ({
  profile: state.profile
});


export default connect(mapStateToProps, { getProfile })(
  (GameIndex)
);
