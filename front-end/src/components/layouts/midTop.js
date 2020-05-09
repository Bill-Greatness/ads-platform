import React from 'react'
import Carousel from 'semantic-ui-carousel-react'
import testImage from '../../media/test-image.jpg'
import { Button, Image} from 'semantic-ui-react'


let elements = [
  {
      render:() => {return <Image src={testImage} fluid style={{width:'100%', height:'250px'}} />}
  },
  {
      render:() => {return  <Button fluid color='teal' style={{width:'100%', height:'250px'}}>Mi hau ,there</Button>}
  },
  {
      render:() => {return <Button fluid color='red' style={{width:'100%', height:'250px'}}>Hi ,there</Button>}
  },
  {
      render:() => {return <Button fluid color='green' style={{width:'100%', height:'250px'}}>Hola, There</Button>}
  }
]

class AddPreview extends React.Component {
  render () {
    
      return(

            <Carousel 
            elements={elements}
            duration={5000}
            animation='fly left'
            showNextPrev={false}
            />

      )
  }
}

export default AddPreview;
