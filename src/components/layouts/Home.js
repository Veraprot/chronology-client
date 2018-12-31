import React from 'react'
import { connect } from 'react-redux';

//remove later are user userform component
import { Container, Button, Form } from 'semantic-ui-react'
import AppDragDropDemo from './AppDragDropDemo';


import { getProfile }  from '../../actions/profileActions';
import {createProfile } from '../../actions/profileActions';



const Home = (props) => {
  const submitUsername = (event) => {
    props.createProfile(event.target.username.value, props.history)
    event.target.reset();
  }

  return (
    <div className="home-container">
      <Container>
        <Form onSubmit={submitUsername}>
          <Form.Field>
            <label>Username</label>
            <input name="username" placeholder='username' />
          </Form.Field>
          <Button type='submit'>Submit</Button>
        </Form>
      </Container>
      <AppDragDropDemo/>
    </div>
  )
}

const mapStateToProps = state => ({
  profile: state.profile
});


export default connect(mapStateToProps, { getProfile, createProfile })(
  (Home)
);
