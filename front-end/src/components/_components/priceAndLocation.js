import React from 'react'
import { List, Divider, Radio, Form} from 'semantic-ui-react'

class PandL extends React.Component{

    render(){
      console.log(<Radio/>)
        return(
            <>
            <Divider horizontal>Locations</Divider>
          
              <List divided relaxed>
                <List.Item as='a' onClick={(e)=> alert('Sentiment')}>Takoradi</List.Item>
                <List.Item as='a'>Kumasi</List.Item>
                <List.Item as='a'>Tema</List.Item>
                <List.Item as='a'>Accra</List.Item>
                <List.Item as='a'>Koforidua</List.Item>
              </List>
              <br/>
              <Divider horizontal>Price Range</Divider>
              <br/>
       
          {/*Price Tag Here*/}
      <Form size='tiny'>
        <Form.Field>
        <Radio
            label='1000+ '
            name='radioGroup'
            value='this'
          
          />
          </Form.Field>
         
          <Form.Field>
          <Radio
          
            label='500 - 1000'
            name='radioGroup'
            value='this'
          
          />
          </Form.Field>
          <Form.Field>
          <Radio
          size='mini'
            label='100 - 499'
            name='radioGroup'
            value='this'
          
          />
          </Form.Field>
          <Form.Field>
          <Radio
            label='50 - 399'
            name='radioGroup'
            value='this'
          
          />
        </Form.Field>
        <Form.Field>
          <Radio
          size='mini'
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