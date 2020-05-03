import React from 'react'
import {Form, List, Divider, Radio} from 'semantic-ui-react'

class PandL extends React.Component{

    render(){
        return(
            <>
            <Divider horizontal>Locations</Divider>
            <br/>
              <List divided relaxed>
                <List.Item as='a'>Takoradi</List.Item>
                <List.Item>Kumasi</List.Item>
                <List.Item>Team</List.Item>
                <List.Item>Accra</List.Item>
                <List.Item>Tamale</List.Item>
                <List.Item>Ho</List.Item>
                <List.Item>Kasoa</List.Item>
                <List.Item>Koforidua</List.Item>
              </List>
              <br/>
              <Divider horizontal>Price Range</Divider>
              <br/>
              <Form>
        <Form.Field>
          /*Price Tag Here*/
        </Form.Field>
        <Form.Field>
        <Radio
            label='1000 - Above'
            name='radioGroup'
            value='this'
          
          />
          </Form.Field>
          <Form.Field>
          <Radio
            label='500-1000'
            name='radioGroup'
            value='this'
          
          />
          </Form.Field>
          <Form.Field>
          <Radio
            label='100-499'
            name='radioGroup'
            value='this'
          
          />
          </Form.Field>
          <Form.Field>
          <Radio
            label='50-399'
            name='radioGroup'
            value='this'
          
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='All'
            name='radioGroup'
            value='that'
          
          />
        </Form.Field>
      </Form>
            </>
        )
    }
}

export default PandL