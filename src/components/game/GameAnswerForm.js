import React from 'react'
import { Input, Button, Form } from 'semantic-ui-react'
import { connect } from 'react-redux';
import {createTimeline } from '../../actions/gameActions';

const GameAnswerForm = (props) => {
  const isValidDate = (dateString) => {
    let regEx = /^\d{4}-\d{2}-\d{2}$/;
    if(!dateString.match(regEx)) return false; 
    let d = new Date(dateString);
    if(Number.isNaN(d.getTime())) return false; 
    return d.toISOString().slice(0,10) === dateString;
  }
  
  const submitAnswer = (event) => {
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
    <Form>
      <Form.Group inline>
        <Form.Field>
          <label>Start Date</label>
          <Input placeholder='YYYY-MM-DD' name="startDate"/>
        </Form.Field>
        <Form.Field>
          <label>End Date</label>
          <Input placeholder='YYYY-MM-DD' name="endDate"/>
        </Form.Field>
      </Form.Group>
      <Button type='submit'>Submit</Button>
    </Form>
  )
}

const mapStateToProps = state => ({
  profile: state.profile,
  game: state.game
})

export default connect(mapStateToProps, {createTimeline})((GameAnswerForm));