import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

//remove later are user userform component
import { Container, Button, Form } from 'semantic-ui-react'


import { getProfile }  from '../../actions/profileActions';
import {createProfile } from '../../actions/profileActions';



const Home = (props) => {
  console.log(props)
  const submitUsername = (event) => {
    props.createProfile(event.target.username.value)
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
          <Link to="/game"><Button type='submit'>Submit</Button></Link>
        </Form>
      </Container>
    </div>
  )
}

const mapStateToProps = state => ({
  username: state.username,
});


export default connect(mapStateToProps, { getProfile, createProfile })(
  (Home)
);
