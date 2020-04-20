import React from 'react'
import {TransitionablePortal, Form, Segment, Icon, Input, Button, TextArea} from 'semantic-ui-react'

class AddEvent extends React.Component {
  render () {
    return(
      <TransitionablePortal open={this.props.active_node === 'event_add'}>
        <Segment raised style={{width:'300px',position:'fixed', top:'40%',left:'70%'}} className='mid-segment'>
          <Form>
            <Form.Field
              label='Event Name'
              required
              control={Input}
              placeholder='Event Name'
              />
              <Form.Field
                label='Location'
                required
                control={Input}
                placeholder='Location'
                />

                <Form.Field
                  label='Date'
                  required
                  type='date'
                  control={Input}
                  />

                  <Form.Field
                    label='Time'
                    required
                    type='time'
                    control={Input}
                    />

                    <Form.Field
                      label='Description'
                      required
                      type='text'
                      control={TextArea}
                      />
                    <Button>
                      <Icon name='add' color='blue'/> Add Event
                    </Button>

          </Form>
        </Segment>
      </TransitionablePortal>
    )
  }
}

export default AddEvent;
