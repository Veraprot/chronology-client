import React from 'react'
import {connect} from 'react-redux'

class UserTimeline extends React.Component {
  render() {
    return (
      <>
        <div className="timeline-container">
          <div className="card-container top">
            <div className="card-content">
                content
            </div>
          </div>
          <div className="card-container">
            <div className="card-content">
                content
            </div>
          </div>
          <div className="card-container">
            <div className="card-content">
                content
            </div>
          </div>
          <div className="card-container">
            <div className="card-content">
                content
            </div>
          </div>
          <div className="card-container">
            <div className="card-content">
                content
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default UserTimeline