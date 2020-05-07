import React from 'react'
import { graphql } from 'react-apollo'
import { gql } from 'apollo-boost'
import {Grid, Form, Button, Header} from 'semantic-ui-react'


const loginQuery = gql`
{
  login(email:String,password:String){
    email,
    password
  }
}`
class LoGin extends React.Component {
  constructor(){
    super()
    this.state = {
      email:'',
      password:''
    }
  }
  
  handleUserLogin = event => {
    event.preventDefault()
    console.log(this.props)
   /* const {data, loading } = this.props.loginQuery({
      variables:{
        email:this.state.email,
        password:this.state.password
        }})*/
    
    this.props.history.push({pathname:'/', state:{is_authenticated:true}})
  }
  render () {
      return(
      <Grid padded centered>
      <Grid.Column computer={8} mobile={14} tablet={8}>
      <Header icon='user' content='Welcome Back' subheader='Login to App Name' />
      <br/>

       <Form onSubmit={this.handleUserLogin}>
          <Form.Input
          placholder='Email'
          onChange={(e) => this.setState({email: e.target.value})}
          value={this.state.email}
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

export default graphql(loginQuery, {name:"loginQuery"})(LoGin);
