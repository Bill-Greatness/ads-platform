import React from 'react'
import { Form, Card, Image, Button, Input, Icon} from 'semantic-ui-react'
import placeImage from '../../../media/place-image.jpg'
import PropTypes from 'prop-types'

class PayForm extends React.Component {
  render () {

      const {user} = this.props

      return(
        <Card>
          <Card raised fluid className='account-top'>
          <Image src={placeImage} wrapped ui={false} size='tiny'/>
          <Card.Content>
            <Card.Header>James Greasley</Card.Header>
            <Card.Meta>Paid: <Icon name='delete' color='red'/> &nbsp; Active: <Icon name='checkmark' color='green'/> </Card.Meta>
          </Card.Content>
          <Card.Content extra>

            <Form size='small' fluid>
              <Form.Input
              type='text'
              value={user.position}
              label='Position'
              required
              onChange={() => {}}
              />

              <Form.Input
              type='text'
              value={user.department}
              label='Department'
              required
              onChange={() => {}}
              />

              <Form.Group widths='equal'>

              <Form.Input

              type='number'
              value={user.basic_salary}
              label='Basic Salary'
              required
              onChange={() => {}}
              />

              <Form.Input
              type='number'
              min={5}
              label='Hours Worked'
              required
              onChange={() => {}}
              />

              </Form.Group>


              <Form.Input
              type='text'
              value={user.tin_number}
              label='Tin Number'
              required
              onChange={() => {}}
              />

              <Form.Group widths={'equal'}> {/*Those one crossing the borders no, if you can do anything about it i'll appreciate it a lot*/}
              <Form.Field
              control={Input}
              type='text'
              label='Post Code'
              required
              onChange={() => {}}
              />

              <Form.Field
              control={Input}
              type='date'
              label='Pay Date'
              required
              onChange={() => {}}
              />

              </Form.Group>

              <Button> Process Payment </Button>

            </Form>

          </Card.Content>
        </Card>
        </Card>
      )
  }


}

PayForm.propTypes = {
  user:PropTypes.object.isRequired

}

export default PayForm;
