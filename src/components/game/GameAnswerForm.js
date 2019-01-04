import React from 'react'
import { Input, Button, Form, Dropdown } from 'semantic-ui-react'
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

  setAction = (action) => {
    this.setState({
      action
    })
  }

  handleSubmit = (event) => {
    if(this.state.action == 'answer') {
      let startDate = this.state.startDate.value;
      let endDate = this.state.endDate.value; 
      console.log(startDate, endDate)
      this.submitAnswer(startDate, endDate)
    } else {
      this.props.setRandomCard(this.props.game.cards)
    }
  }

  getDate = (event, data) => {
    let dateType = data.options[0].type;
    this.setState({
      [dateType]: data.value
    })
  }

  addSelectOptions = (dateType) => {
    let options = [];
    this.props.game.answeredCards.forEach(card => {
      options = [{
        type: dateType,
        key: card.id,
        value: card.date,
        text: card.date
      }]
    });
    return(
      <Form.Dropdown 
        placeholder='date' 
        fluid
        selection 
        onClick={this.test}
        onChange={this.getDate}
        options={options} />
    )
  }

  submitAnswer = (startDate, endDate) => {
    this.props.addAnswer(this.props.game.activeCard, this.props.game.cards)
  }
  
  render() {
    return (
      <div className="user-answer-form">
        <Form onSubmit={this.handleSubmit}>
          <Form.Group inline>
            <Form.Field>
              <label>Between</label>
              { this.props.game.answeredCards.length <= 0 ? 
                (
                  // <Input placeholder='YYYY-MM-DD' name="startDate"/>
                  <>
                    {this.addSelectOptions('endDate')}
                  </>
                ) : (
                  <>
                    {this.addSelectOptions('startDate')}
                  </>
                )
              }
    
            </Form.Field>
            <Form.Field>
              <label>And</label>
              { this.props.game.answeredCards.length < 2 ? 
                (
                  // <Input placeholder='YYYY-MM-DD' name="endDate"/>
                  <>
                    {this.addSelectOptions('endDate')}
                  </>
                ) : (
                  <>
                    {this.addSelectOptions('endDate')}
                  </>
                )
              }
            </Form.Field>
            <Button type='submit' name="action" value="answer" onClick={() => this.setAction('answer')}>Answer</Button>
            <Button type='submit' name="action" value="skip" onClick={() => this.setAction('skip')}>Skip</Button>
          </Form.Group>
        </Form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  game: state.game
})

export default connect(mapStateToProps, {addAnswer, setRandomCard})((GameAnswerForm));

