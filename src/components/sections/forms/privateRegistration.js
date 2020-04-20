import React from 'react'
import {Form, Input, Select, Icon, Button} from 'semantic-ui-react'

class Private extends React.Component {
    constructor(){
      super()
      this.state = {

              std_fullname:'',
              std_location:'',
              std_grade:'',
              std_phone:'',
              std_institution:'',
              std_course_taken:'',
              std_duration:'',
              std_date_of_birth:'',
      }
    }

  render () {

    const gender_options = [
      {key:'m', value:'Male', text:'Male'},
      {key:'f', value:'Female', text:'Female'}
    ]
    const grade_options = [
      {key:'p1', text:'Primary 1', value:'Primary 1'},
      {key:'p2', text:'Primary 2', value:'Primary 2'},
      {key:'p3', text:'Primary 3', value:'Primary 3'},
      {key:'p4', text:'Primary 4', value:'Primary 4'},
      {key:'p5', text:'Primary 5', value:'Primary 5'},
      {key:'p6', text:'Primary 6', value:'Primary 6'},
      {key:'j1', text:'Junior High 1', value:'Junior High 1'},
      {key:'j2', text:'Junior High 2', value:'Junior High 2'},
      {key:'j3', text:'Junior High 3', value:'Junior High 3'},
      {key:'shs', text:'Senior High', value:'Senior High'},
    ]
    const course_options =  [
      { key: 'scr', text: 'Scratch Coding', value: 'Scratch Coding' },
      { key: 'typ', text: 'Typing Lessons', value: 'Typing Lessons' },
      { key: 'htmlcss', text: 'HTML5 & CSS3', value: 'HTML5 & CSS3' },
      { key: 'php', text: 'PHP Programming', value: 'PHP Programming' },
      { key: 'js', text: 'JavaScript', value: 'JavaScript' },
      { key: 'py', text: 'Python', value: 'Python' },
      { key: 'java', text: 'Java', value: 'Java' },
      { key: 'cpp', text: 'C++', value: 'C++' },
]

    return(
      <Form >
      <Form.Field
        id='name-of-student'
        control={Input}
        required
        type='text'
        label='Full Name'
        placeholder='Full Name of Trainee'
      />

      <Form.Group widths='equal'>

      <Form.Field
        required
        control={Select}
        options={gender_options}
        label='Gender'
      />


      <Form.Field
        id='date-of-birth'
        required
        control={Input}
        type='date'
        label='Date Of Birth'
      />

      </Form.Group>




      <Form.Group widths='equal'>
            <Form.Field
              id='student-institution'
              required
              control={Input}
              type='text'
              label='Current Institution'
              placeholder='Student Institution'
            />

            <Form.Field
            required
              id='student-grade'
              control={Select}
              options={grade_options}
              placeholder='Grade Of Student'
              label='Grade Of Student'
            />
      </Form.Group>




      <Form.Group widths='equal'>

      <Form.Field
        id='student-phone'
        control={Input}
        required
        type='tel'
        label='Phone'
        placeholder='Phone'
      />


      <Form.Field
        id='location'
        required
        control={Input}
        type='text'
        label='Location of Person'
        placeholder='Location'
      />

      </Form.Group>

      <Form.Group widths='equal'>

      <Form.Field
        id='student-duration'
        required
        control={Input}
        type='number'
        min={1}
        label='Duration in Days'
        placeholder='Duration in Days'
      />


      <Form.Field
        id='course-selected'
        control={Select}
        options={course_options}
        required
        label='Course Taken'
        placeholder='Course Taken'
      />

      </Form.Group>

      <Form.Group widths='equal'>

      <Form.Field
        id='email'
        required
        type='email'
        control={Input}
        label='Email'
        placeholder='uniqueemai@uq.com'
      />

      <Form.Field
        id='email'
        required
        control={Input}
        label='Trainer'
        placeholder='Trainer Name Select'
      />

      </Form.Group>

      <Button icon color='teal' type='submit'>
        <Icon name='send'/>
        Register
       </Button>
      </Form>
    )
  }
}

export default Private;
