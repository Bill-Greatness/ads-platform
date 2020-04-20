import React from 'react'
import {Form, Input, Button, Icon} from 'semantic-ui-react'

class Institution extends React.Component {
  constructor(){
    super()
    this.state = {
      sch_name:'',
      sch_num_of_computers:0,
      sch_num_of_students:0,
      sch_location:'',
      sch_registrant:'',
      sch_registrant_phone:'',
      sch_phone:'',
      sch_web_address:'',
      sch_email:'',
    }
  }

  handleFormField = name => event => {
    this.setState({[name]:event.target.value})
  }


  submitSchForm = event => {
    event.preventDefault()
    const {sch_name, sch_email,
       sch_phone, sch_location, sch_registrant,
       sch_web_address, sch_num_of_students,
       sch_num_of_computers
     } = this.state

    console.log({sch_name, sch_email,
       sch_phone, sch_location, sch_registrant,
       sch_web_address, sch_num_of_students,
       sch_num_of_computers
     });
  }

  render () {
      return(
        <Form onSubmit={this.submitSchForm}>
            <Form.Field
              required
                value={this.state.sch_name}
                onChange={this.handleFormField('sch_name')}
                control={Input}
                type='text'
                label='Name Of Institution'
                placeholder='Name of Institution'
              />

            <Form.Group widths='equal'>
            <Form.Field
            required
              value={this.state.sch_email}
              onChange={this.handleFormField('sch_email')}
              control={Input}
              type='email'
              label='Email'
              placeholder='schname@gmail.com'
            />

            <Form.Field
            required
              id='phone-line'
              value={this.state.sch_phone}
              onChange={this.handleFormField('sch_phone')}
              control={Input}
              minLength={10}
              maxLength={10}
              type='tel'
              label='Active Phone Line'
              placeholder='+233 (0) xxx xxx xxxx'
            />

            </Form.Group>


            <Form.Group widths='equal'>
            <Form.Field
              id='location'
              value={this.state.sch_location}
              onChange={this.handleFormField('sch_location')}
              required
              control={Input}
              type='text'
              label='Location Of Institution'
              placeholder='Location'
            />

            <Form.Field
            required
              id='num-of-computers'
              value={this.state.sch_num_of_computers}
              onChange={this.handleFormField('sch_num_of_computers')}
              control={Input}
              type='number'
              min={1}
              label='Number Of Computers'
              placeholder='Number Of Computers'
            />

            </Form.Group>

            <Form.Group widths='equal'>
            <Form.Field
            required
              id='participating-students'
              value={this.state.sch_num_of_students}
              onChange={this.handleFormField('sch_num_of_students')}
              control={Input}
              type='number'
              min={10}
              label='Number Of Students'
              placeholder='Number Of Students'
            />

            <Form.Field
            required
              id='num-of-computers'
              value={this.state.sch_web_address}
              onChange={this.handleFormField('sch_web_address')}
              control={Input}
              type='link'
              label='School Website Address'
              placeholder='School Website'
            />

            </Form.Group>

            <Form.Group widths='equal'>
            <Form.Field
            required
              id='registrar'
              value={this.state.sch_registrant}
              onChange={this.handleFormField('sch_registrant')}
              control={Input}
              type='text'
              label='Registered By'
              placeholder='Name of Registrant'
            />

            <Form.Field
              id='registrant-phone'
              required
              value={this.state.sch_registrant_phone}
              onChange={this.handleFormField('sch_registrant_phone')}
              control={Input}
              type='tel'
              minLength={10}
              maxLength={10}
              label='Registrant Phone'
              placeholder='Registrant Phone'
            />

            </Form.Group>

            <Button icon color='green'  type='submit'>
              <Icon name='send'/>
              Register
             </Button>

            </Form>
      )

  }
}

export default Institution;
