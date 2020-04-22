import React from 'react'
import {Grid, Form, Button, Header} from 'semantic-ui-react'

class LoGin extends React.Component {
  render () {
      return(
      <Grid padded centered>
      <Grid.Column computer={8} mobile={14} tablet={8}>
      <Header icon='user' content='Welcome Back' subheader='Login to App Name' />
       <Form>
          <Form.Input
          placholder='username'
          label='Username'
          required
          />

          <Form.Input
          placholder='Password'
          type='password'
          label='Password'
          required
          />
            <Button type='submit'>Login </Button>

            <a href='/forgotten-password' style={{color:'red'}}>Forgotten Password ? </a>
          <div>
          <br/>
            <a href='/become-a-registered-member'>Create New Account</a>
          </div>

       </Form>
       </Grid.Column>
       </Grid>
      )
  }
}

export default LoGin;
