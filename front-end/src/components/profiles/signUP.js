import React from 'react'
import {graphql} from 'react-apollo'

import {Form, Button, Grid, Header} from 'semantic-ui-react'
import {addNewUser} from '../../queries/queries'


class SignUp extends React.Component {
    constructor(){
      super()
      this.state = {
        
        password:'',
        confirm_password:'',
        phone:'',
        email:'',
        id_type:'',
        id_number:'',
        image:null,
        firstname:'',
        surname:'',
        gender:'',
        region:'',
        digital_addr:''
      }
    }
    
   handleUserAdd = event => {
      event.preventDefault()
      this.props.addNewUser({
        variables:this.state
      })
     
    }
  render () {
    const id_options = [
      { text:"Voter's ID",key:'1',value:'voters_id'},
      { text:"NHIS ID",key:'2',value:'health_insurance'},
      { text:"National ID",key:'3',value:'national_id'}
    ]

    const gender_options = [
      {text:'Male', value:'Male',key:'male'},
      {text:'Female', value:'Female', key:'female'}
    ]

    const region_options = [
      {text:'Western', value:'Western', key:'Western'},
      {text:'Ashanti', value:'Ashanti', key:'A'},
      {text:'Volta', value:'Volta', key:'V'},
      {text:'Greater Accra', value:'Greater Accra', key:'GA'},
      {text:'Northern', value:'Northern', key:'N'},
      {text:'Brong Ahafo', value:'Brong Ahafo', key:'BA'},
      {text:'Upper East', value:'Upper East', key:'UE'},
      {text:'Upper West', value:'Upper West', key:'UW'},
      {text:'Central', value:'Central', key:'C'},
      {text:'Eastern', value:'Eastern', key:'E'},


    ]
       
    
    return(
      <Grid centered padded>
        <Grid.Column computer={8} mobile={14} tablet={8}>
        <Header icon='user' content='Become A Registered Member' subheader={'Connect, Earn and Learn'} />

      <Form onSubmit={this.handleUserAdd}>
        <Form.Group widths='equal'>
          <Form.Input
          placeholder='First name'
          onChange={(e) => this.setState({firstname:e.target.value})}
          label='Firstname'
          required
          />

          <Form.Input
          placeholder='Surname'
          onChange={(e) => this.setState({surname:e.target.value})}

          label='Surname'
          required
          />
        </Form.Group>

        <Form.Group widths='equal'>
          <Form.Input
          type='date'
          onChange={(e) => this.setState({date_of_birth:e.target.value})}

          label='Date Of Birth'
          required
          />

        <Form.Select
          options={gender_options}
          onChange={(e, node) => this.setState({gender:node.value})}
          placeholder='Gender'
          label='Gender'
          required
          />
        </Form.Group>


        <Form.Group widths='equal'>
          <Form.Input
          placeholder='name@somedomain.com'
          onChange={(e) => this.setState({email:e.target.value})}
          type='email'
          label='Email'
          required
          />

          <Form.Input
          type='tel'
          placeholder='XXX-XXX-XXXX'
          onChange={(e) => this.setState({phone:e.target.value})}

          label='Phone'
          required
          />
      </Form.Group>

      <Form.Group widths='equal'>
        <Form.Select
        options={region_options}
        onChange={(e, node)=>this.setState({region:node.value})}
        label='Region'
        placeholder='Region'
        required
        />

      <Form.Input
        placeholder='Digital Address'
        onChange={(e)=>this.setState({digital_addr:e.target.value})}
        label='Digital Address'
        required
        />
      </Form.Group>

      <Form.Group widths='equal'>
        <Form.Select
          options={id_options}
          onChange={(e, node) => this.setState({id_type:node.value})}
          placeholder='Choose ID'
          label='Choose ID'
          required
          />

        <Form.Input
            placeholder='ID Number'
            onChange={(e)=> this.setState({id_number:e.target.value})}
            
            label='ID Number'
            required
            />
        </Form.Group>

        <Form.Group widths='equal'>
          <Form.Input
          minLength={8}
          onChange={(e) => this.setState({password:e.target.value})}

          type='password'
          placeholder='Password'
          label='Password'
          required
          />

          <Form.Input
          type='password'
          onChange={(e) => this.setState({confirm_password:e.target.value})}

          minLength={8}
          placeholder='Password'
          label='Confirm Password'
          required
          />
        </Form.Group>
        <Form.Checkbox label={'I agree to the Terms and Conditions'}/>

        <Button type='submit' circular>Register</Button>

      </Form>
      </Grid.Column>
      </Grid>
    )
  }
}

export default graphql(addNewUser, {name:'addNewUser'})(SignUp);
