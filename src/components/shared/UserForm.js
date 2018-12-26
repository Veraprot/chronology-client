import React from 'react'
import { Container, Button, Form } from 'semantic-ui-react'


class UserForm extends React.Component {
  render() {
    return (
      <Container>
        <Form>
          <Form.Field>
            <label>Username</label>
            <input placeholder='First Name' />
          </Form.Field>
          <Button type='submit'>Submit</Button>
        </Form>
      </Container>
    )
  }
}

export default UserForm