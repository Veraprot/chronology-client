import React from 'react'
import { Input, Button, Form } from 'semantic-ui-react'
import { connect } from 'react-redux';
import {createTimeline } from '../../actions/gameActions';
import { isValidDate } from '../../validation/forms/dateFormat'

const TimeLineForm = (props) => {  
  const submitDates = (event) => {
    let startDate = event.target.startDate.value;
    let endDate = event.target.endDate.value;    

    if(isValidDate(startDate) && isValidDate(endDate)) {
      let start = startDate.split('-').join('')
      let end = endDate.split('-').join('')
      props.createTimeline(start, end)
    } else  {
      console.log('handle errors yo')
    }
  }

  return (
    <Form onSubmit={submitDates}>
      <Form.Group inline>
        <Form.Field>
          <label>Start Date</label>
          <Input placeholder='YYYY-MM-DD' name="startDate"/>
        </Form.Field>
        <Form.Field>
          <label>End Date</label>
          <Input placeholder='YYYY-MM-DD' name="endDate"/>
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form.Group>
    </Form>
  )
}

const mapStateToProps = state => ({
  profile: state.profile,
  game: state.game
})

export default connect(mapStateToProps, {createTimeline})((TimeLineForm));