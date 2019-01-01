import React from 'react'
import { Input, Button, Form } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { isValidDate } from '../../validation/forms/dateFormat'

import {addAnswer} from '../../actions/gameActions';

const GameAnswerForm = (props) => {

  const submitAnswer = (event) => {
    let startDate = event.target.startDate.value;
    let endDate = event.target.endDate.value;    

    if(isValidDate(startDate) && endDate.length == 0 || isValidDate(endDate) && startDate == 0 || isValidDate(startDate) && isValidDate(endDate) ) {
      console.log(props)
      let start = startDate.split('-').join('')
      let end = endDate.split('-').join('')
      // let activeCardDate = props.game.activeCard.date.split('/').join('');
      props.addAnswer(props.game.activeCard, props.game.cards)
      // if( start.length ==  0 ) {
      //   console.log("error or answer before")
      //   console.log(end > activeCardDate);
        
      // } else if(end.length == 0 ) {
      //   console.log("error or after")
      //   console.log(start, activeCardDate);
      //   console.log(start < activeCardDate);

      // } else if(start.length == 8 && end.length == 8){ 
      //   console.log('between')
      //   console.log(start < activeCardDate && end > activeCardDate);
        
      // }
    } else  {
      console.log('handle errors yo')
    }
  }

  console.log(props);
  
  return (
    <Form onSubmit={submitAnswer}>
      <Form.Group inline>
        <Form.Field>
          <label>After</label>
          <Input placeholder='YYYY-MM-DD' name="startDate"/>
        </Form.Field>
        <Form.Field>
          <label>Before</label>
          <Input placeholder='YYYY-MM-DD' name="endDate"/>
        </Form.Field>
        <Button type='submit'>Answer</Button>
        <Button type='submit'>Skip</Button>
      </Form.Group>
    </Form>
  )
}

const mapStateToProps = state => ({
  game: state.game
})

export default connect(mapStateToProps, {addAnswer})((GameAnswerForm));

