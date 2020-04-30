import React from 'react'
import {Grid, Form, Button, Header} from 'semantic-ui-react'

class LoGin extends React.Component {
  constructor(){
    super()
    this.state = {
      username:'',
      password:''
    }
  }
  
  handleUserLogin = event => {
    event.preventDefault()
    console.log(this.state)
  }
  render () {
      return(
      <Grid padded centered>
      <Grid.Column computer={8} mobile={14} tablet={8}>
      <Header icon='user' content='Welcome Back' subheader='Login to App Name' />
      <br/>
      <br/>
       <Form onSubmit={this.handleUserLogin}>
          <Form.Input
          placholder='username'
          onChange={(e) => this.setState({username: e.target.value})}
          value={this.state.username}
          label='Username'
          required
          />

          <Form.Input
          placholder='Password'
          onChange={(e) => this.setState({password: e.target.value})}
          value={this.state.password}
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
