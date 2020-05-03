import React from 'react'
//import testImage from '../../media/test-image.jpg'
import {Segment} from 'semantic-ui-react'

class AddPreview extends React.Component {
  render () {
      return(
        <Segment raised style={{maxHeight:'250px', background:'#ffc2da'}}>
            <h3>Some Sections Images Here </h3>
        </Segment>
      )
  }
}

export default AddPreview;
