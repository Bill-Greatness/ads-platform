import React from 'react'
import {Form, Button, Grid, Header} from 'semantic-ui-react'

class SignUp extends React.Component {

  render () {
    const id_options = [
      { text:"Voter's ID",key:'1',value:'Voters ID'},
      { text:"NHIS ID",key:'2',value:'Health Insurance'},
      { text:"National ID",key:'3',value:'National ID'}
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

      <Form error>
        <Form.Group widths='equal'>
          <Form.Input
          placeholder='First name'
          label='Firstname'
          required
          />

          <Form.Input
          placeholder='Surname'
          label='Surname'
          required
          />
        </Form.Group>

        <Form.Group widths='equal'>
          <Form.Input
          type='date'
          label='Date Of Birth'
          required
          />

        <Form.Select
          options={gender_options}
          placeholder='Gender'
          label='Gender'
          required
          />
        </Form.Group>


        <Form.Group widths='equal'>
          <Form.Input
          placeholder='name@somedomain.com'
          type='email'
          label='Email'
          required
          />

          <Form.Input
          type='tel'
          placeholder='050 XXX -XXX - XXXX'
          label='Phone'
          required
          />
      </Form.Group>

      <Form.Group widths='equal'>
        <Form.Select
          options={region_options}
        label='Region'
        placeholder='Region'
        required
        />

      <Form.Input
        placeholder='Digital Address'
        label='Digital Address'
        required
        />
      </Form.Group>

      <Form.Group widths='equal'>
        <Form.Select
          options={id_options}
          placeholder='Choose ID'
          label='Choose ID'
          required
          />

        <Form.Input
            placeholder='ID Number'
            label='ID Number'
            required
            />
        </Form.Group>

        <Form.Group widths='equal'>
          <Form.Input
          minLength={8}
          type='password'
          placeholder='Password'
          label='Password'
          required
          />

          <Form.Input
          type='password'
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

export default SignUp;
