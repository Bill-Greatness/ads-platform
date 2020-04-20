import React from 'react'
import placeImage from '../../../media/place-image.jpg'
import { Button, Comment, Form } from 'semantic-ui-react'

class Discussions extends React.Component {
  render(){
    return(
  <Comment.Group  style={{textAlign:'left', maxHeight:'300px', overflowY:'scroll'}} className='account-top'>

    <Comment>
      <Comment.Avatar src={placeImage} />
      <Comment.Content>
        <Comment.Author as='a' inverted>Bill Greatness</Comment.Author>
        <Comment.Metadata>
          <div>Today at 5:42PM</div>
        </Comment.Metadata>
        <Comment.Text>Dont Play the Devils Game</Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment>

    <Comment>
      <Comment.Avatar src={placeImage} />
      <Comment.Content>
        <Comment.Author as='a'>Tracy Afram</Comment.Author>
        <Comment.Metadata>
          <div>Yesterday at 12:30AM</div>
        </Comment.Metadata>
        <Comment.Text>
          <p>Hey, Bill... What is going on with logic Kids</p>
        </Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
      <Comment.Group>
        <Comment>
          <Comment.Avatar src={placeImage} />
          <Comment.Content>
            <Comment.Author as='a'>Simon Adasi</Comment.Author>
            <Comment.Metadata>
              <div>Just now</div>
            </Comment.Metadata>
            <Comment.Text>HR. Nie... Gye wo two</Comment.Text>
            <Comment.Actions>
              <Comment.Action>Reply</Comment.Action>
            </Comment.Actions>
          </Comment.Content>
        </Comment>
      </Comment.Group>
    </Comment>

    <Comment>
      <Comment.Avatar src={placeImage} />
      <Comment.Content>
        <Comment.Author as='a'>Peniel Nyinaku</Comment.Author>
        <Comment.Metadata>
          <div>5 days ago</div>
        </Comment.Metadata>
        <Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment>

    <Form reply style={{margin:10}}>
      <Form.TextArea style={{height:'40px'}} />
      <Button content='Add Reply' labelPosition='left' icon='edit' primary circular/>
    </Form>
  </Comment.Group>
)
}
}

export default Discussions
