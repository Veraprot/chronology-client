import React from 'react'
import { Input, Button, Form } from 'semantic-ui-react'

class GameIndex extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props)
  }
  render() {
    return (
      <>
      <Form>
        <Form.Group inline>
          <Form.Field>
            <label>Start Date</label>
            <Input placeholder='month' />
          </Form.Field>
          <Form.Field>
            <Input placeholder='day' />
          </Form.Field>
          <Form.Field>
            <Input placeholder='year' />
          </Form.Field>
        </Form.Group>
        <Form.Group inline>
          <Form.Field>
            <label>End Date</label>
            <Input placeholder='month' />
          </Form.Field>
          <Form.Field>
            <Input placeholder='day' />
          </Form.Field>
          <Form.Field>
            <Input placeholder='year' />
          </Form.Field>
        </Form.Group>
        <Button type='submit'>Submit</Button>
      </Form>
      </>
    )
  }
}

export default GameIndex