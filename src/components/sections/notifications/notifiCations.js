import React from 'react'
import placeImage from '../../../media/place-image.jpg'
import {Comment, Icon} from 'semantic-ui-react'

class Notification extends React.Component {
  render () {
    return(
      <Comment.Group threaded>
        {[1,2,3,4,5].map(c => (
          <Comment key={c}>
            <Comment.Avatar as='a' src={placeImage} width={50}/>

            <Comment.Content>
                <Comment.Author as='a' style={{color:'white'}}>Bill Greatness</Comment.Author>
                  <Comment.Metadata>
                    <span>Today at 5:34PM</span>
                  </Comment.Metadata>
                <Comment.Text>
                  I'm gonna make a change for once in my life. It is gonna be awesome !
                </Comment.Text>
                <Comment.Actions>
                <Comment.Action>
                  <Icon name='reply'/>
                </Comment.Action>
                <Comment.Action>
                  <Icon name='hide'/>
                </Comment.Action>
                <Comment.Action>
                  <Icon color='red' name='delete' />
                </Comment.Action>
                </Comment.Actions>
            </Comment.Content>
          </Comment>
        ))}
      </Comment.Group>
    )
  }
}

export default Notification;
