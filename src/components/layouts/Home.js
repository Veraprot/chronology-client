import React from 'react'
import { connect } from 'react-redux';
import { addProfile }  from '../../actions/profileActions';

//remove later are user userform component
import { Container, Button, Form } from 'semantic-ui-react'

// import 


const Home = (props) => {
  console.log(props.addProfile)

  const submitUsername = (event) => {
    console.log(event.target.username.value)
    props.addProfile(event.target.username.value)
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
    </div>
  )
}

const mapStateToProps = state => ({
  username: state.username,
});


export default connect(mapStateToProps, { addProfile })(
  (Home)
);
