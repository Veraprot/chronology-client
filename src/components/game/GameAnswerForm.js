import React from 'react'
import { Input, Button, Form, Select } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { isValidDate } from '../../validation/forms/dateFormat'

import {addAnswer} from '../../actions/gameActions';
import {setRandomCard } from '../../actions/gameActions';

class GameAnswerForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      action: ''
    }
  }

  handleSubmit = (event) => {
    console.log(event.target.startDate)
    if(this.state.action == 'answer') {
      let startDate = event.target.startDate.value;
      let endDate = event.target.endDate.value; 
      
      this.submitAnswer(startDate, endDate)
    } else {
      this.props.setRandomCard(this.props.game.cards)
    }
  }

  setAction = (action) => {
    this.setState({
      action
    })
  }

  addSelectOptions = (date) => {
    let options = []
    this.props.game.answeredCards.forEach(card => {
      options.push({
        key: card.id,
        name: "startDate",
        value: card.date,
        text: card.date
      })
    });
    console.log(options)
    return(
      <Form.Select placeholder='date' name={date} fluid selection options={options} />
    )
  }

  submitAnswer = (startDate, endDate) => {
    if(isValidDate(startDate) && endDate.length == 0 || isValidDate(endDate) && startDate == 0 || isValidDate(startDate) && isValidDate(endDate) ) {
      this.props.addAnswer(this.props.game.activeCard, this.props.game.cards)
    } else  {
      console.log('handle errors yo')
    }
  }
  
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group inline>
          <Form.Field>
            <label>Between</label>
            { this.props.game.answeredCards.length < 12 ? 
              (
                <Input placeholder='YYYY-MM-DD' name="startDate"/>
              ) : (
                <>
                  {this.addSelectOptions("startDate")}
                </>
              )
            }
  
          </Form.Field>
          <Form.Field>
            <label>And</label>
            { this.props.game.answeredCards.length < 12 ? 
              (
                <Input placeholder='YYYY-MM-DD' name="endDate"/>
              ) : (
                <>
                  {this.addSelectOptions("endDate")}
                </>
              )
            }
          </Form.Field>
          <Button type='submit' name="action" value="answer" onClick={() => this.setAction('answer')}>Answer</Button>
          <Button type='submit' name="action" value="skip" onClick={() => this.setAction('skip')}>Skip</Button>
        </Form.Group>
      </Form>
    )
  }
}

const mapStateToProps = state => ({
  game: state.game
})

export default connect(mapStateToProps, {addAnswer, setRandomCard})((GameAnswerForm));

