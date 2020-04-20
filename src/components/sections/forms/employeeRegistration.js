import React from 'react'
import {Form, Select, Icon, Button, Input} from 'semantic-ui-react'

class Employee extends React.Component {
  constructor(){
    super()
    this.state = {
      emp_firstname:'',
      emp_surname:'',
      emp_midname:'',
      emp_department:'',
      emp_last_institution:'',
      emp_date_of_birth:'',
      emp_marital_status:'',
      emp_gender:'',
      emp_phone:'',
      emp_location:'',
      emp_image:null,
      emp_email:''
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

  submitEmpForm = event => {
    event.preventDefault()

    console.log(event);
  }

  render () {

    const department_options = [
    {key:'pr', text:'Programming', value:'Programming'},
    {key:'networking', text:'Networking', value:'Networking'},
    {key:'graphics', text:'Graphics', value:'Graphics'},
    {key:'teaching', text:'Training', value:'Training'}
    ]
    const gender_options = [
      {key:'m', value:'Male', text:'Male'},
      {key:'f', value:'Female', text:'Female'}
    ]

    return(
      <Form onSubmit={this.submitEmpForm} >

        <Form.Group widths='equal'>
        <Form.Field
          id='surname'
          value={this.state.emp_surname}
          onChange={this.handleFormField('emp_surname')}
          required
          control={Input}
          label='Surname'
          placeholder='Surname'
        />

        <Form.Field
          id='firstname'
          value={this.state.emp_firstname}
          onChange={this.handleFormField('emp_firstname')}
          required
          control={Input}
          label='First Name'
          placeholder='First name'
        />


        <Form.Field
          id='middle-name'
          value={this.state.emp_midname}
          onChange={this.handleFormField('emp_midname')}
          control={Input}
          label='Middle Name'
          placeholder='Middle Name'
        />

        </Form.Group>

        <Form.Group widths='equal'>
        <Form.Field
          id='location'
          value={this.state.emp_location}
          onChange={this.handleFormField('emp_location')}
          required
          control={Input}
          label='Location'
          placeholder='Location'
        />

        <Form.Field
          id='emp-email'
          value={this.state.emp_email}
          onChange={this.handleFormField('emp_email')}
          required
          type='email'
          control={Input}
          label='Email'
          placeholder='random@gm.com'
        />


        <Form.Field
          id='emp-phone'
          type='tel'
          value={this.state.emp_phone}
          onChange={this.handleFormField('emp_phone')}
          minLength={10}
          maxLength={10}
          required
          control={Input}
          label='Phone'
          placeholder='Phone'
        />

        </Form.Group>

        <Form.Group widths='equal'>
        <Form.Field
          id='emp-dob'
          required
          type='date'
          value={this.state.emp_date_of_birth}
          onChange={this.handleFormField('emp_date_of_birth')}
          control={Input}
          label='Date Of Birth'

        />

        <Form.Field
          id='m-status'
          required
          value={this.state.emp_marital_status}
          onChange={this.handleFormField('emp_marital_status')}
          control={Input}
          label='Marital Status'
          placeholder='Single || Married || Divorced || Widowed'
        />


        <Form.Field
          id='gender'
          required
          type='text'
          onChange={this.handleFormField('emp_gender')}
          control={Select}
          options={gender_options}
          label='Gender'
          placeholder='Gender'
        />

        </Form.Group>

        <Form.Group widths='equal'>
        <Form.Field
          id='last-institution'
          required
          value={this.state.emp_last_institution}
          onChange={this.handleFormField('emp_last_institution')}
          type='text'
          control={Input}
          placeholder='Last Institution Attended'
          label='Last Institution Attended'

        />

        <Form.Field
          id='image'
          required
          control={Input}
          type='file'
          label='Image'
        />


        <Form.Field
          id='department'
          required
          value={this.state.emp_department}
          onChange={this.handleFormField('emp_department')}
          control={Select}
          options={department_options}
          label='Department'
          placeholder='Department'
        />

        </Form.Group>

        <Button icon color='blue' type='submit'>
          <Icon name='send'/>
            Register
         </Button>

      </Form>
    )
  }
}

export default Employee;
