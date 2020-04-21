import React from 'react'
import { Form, Segment, Icon, Input, Button, TextArea} from 'semantic-ui-react'

const INITIAL_STATE={
  event_name:'',
  event_location:'',
  event_date:'',
  event_time:'',
  event_description:''
}
class AddEvent extends React.Component {
  constructor(){
    super()
    this.state={
      event_name:'',
      event_location:'',
      event_date:'',
      event_time:'',
      event_description:''
    }
  }

  handleEventData = event => {
    this.setState({[event.target.name]:event.target.value})
  }

  addNewEvent = event => {
    event.preventDefault()
    console.log(this.state);
    this.setState({...INITIAL_STATE})
  }

  render () {
    return(

        <Segment raised style={{width:'300px',position:'fixed', top:'40%',left:'70%'}} className='mid-segment'>
          <Form onSubmit={this.addNewEvent}>
            <Form.Field
              label='Event Name'
              name='event_name'
              value={this.state.event_name}
              onChange={this.handleEventData}
              required
              control={Input}
              placeholder='Event Name'
              />
              <Form.Field
                label='Location'
                required
                name='event_location'
                value={this.state.event_location}
                onChange={this.handleEventData}
                control={Input}
                placeholder='Location'
                />

                <Form.Field
                  label='Date'
                  name='event_date'
                  value={this.state.event_date}
                  onChange={this.handleEventData}
                  required
                  type='date'
                  control={Input}
                  />

                  <Form.Field
                    label='Time'
                    required
                    name='event_time'
                    value={this.state.event_time}
                    onChange={this.handleEventData}
                    type='time'
                    control={Input}
                    />

                    <Form.Field
                      label='Description'
                      required
                      name='event_description'
                      value={this.state.event_description}
                      onChange={this.handleEventData}
                      type='text'
                      control={TextArea}
                      />
                    <Button>
                      <Icon name='add' color='blue'/> Add Event
                    </Button>

          </Form>
        </Segment>

    )
  }
}

export default AddEvent;
