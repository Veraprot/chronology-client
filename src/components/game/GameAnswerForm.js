import React from 'react'
import { Input, Button, Form, Dropdown } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { isValidDate } from '../../validation/forms/dateFormat'

import {addAnswer} from '../../actions/gameActions';
import {setRandomCard } from '../../actions/gameActions';

const GameAnswerForm = (props) => {
  let state = {
    action: ''
  }

  const handleSubmit = (event) => {
    console.log(props)
    if(state.action == 'answer') {
      let startDate = event.target.startDate.value;
      let endDate = event.target.endDate.value; 
      
      submitAnswer(startDate, endDate)
    } else {
      props.setRandomCard(props.game.cards)
    }
  }


  const setAction = (action) => {
    state = {
      action
    }
  }

  const addDropdownOptions = () => {
    let options = []

    props.game.answeredCards.forEach(card => {
      options.push({
        key: card.id,
        value: card.id,
        text: card.date
      })
    });

    return(
      <Dropdown placeholder='YYYY-MM-DD' fluid selection options={options} />
    )
  }

  const submitAnswer = (startDate, endDate) => {
    if(isValidDate(startDate) && endDate.length == 0 || isValidDate(endDate) && startDate == 0 || isValidDate(startDate) && isValidDate(endDate) ) {
      props.addAnswer(props.game.activeCard, props.game.cards)
    } else  {
      console.log('handle errors yo')
    }
  }
  
  console.log(props.game.answeredCards)

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group inline>
        <Form.Field>
          <label>After</label>
          { props.game.answeredCards.length < 2 ? 
            (
              <Input placeholder='YYYY-MM-DD' name="startDate"/>
            ) : (
              <>
                {addDropdownOptions()}
              </>
            )
          }

        </Form.Field>
        <Form.Field>
          <label>Before</label>
          { props.game.answeredCards.length < 2 ? 
            (
              <Input placeholder='YYYY-MM-DD' name="endDate"/>
            ) : (
              <>
                {addDropdownOptions()}
              </>
            )
          }
        </Form.Field>
        <Button type='submit' name="action" value="answer" onClick={() => setAction('answer')}>Answer</Button>
        <Button type='submit' name="action" value="skip" onClick={() => setAction('skip')}>Skip</Button>
      </Form.Group>
    </Form>
  )
}

const mapStateToProps = state => ({
  game: state.game
})

export default connect(mapStateToProps, {addAnswer, setRandomCard})((GameAnswerForm));

