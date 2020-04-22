import React from 'react'
import electronics from '../../media/phones-and-computers.png'
import {Grid, Card,  Label, Image, Icon} from 'semantic-ui-react'
import Title from '../_components/TopHead'

class ElectronicDevices extends React.Component {
  render () {
      return(
        <Grid padded>

          <Title icon='tv' content='TV, Phones, Laptops and more' subheader='Arsenal Of Electronic Devices' />
          <Grid padded>
          {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,16].map(dvc => (
            <Grid.Column computer={3} tablet={3} mobile={8} key={dvc}>
              <Card raised onClick={()=>{}} style={{minHeight:150}}>
                <Card.Header>
                    <Label size='tiny' ribbon='right' color='teal'>
                    <Icon name='tv'/>, 45$</Label>
                </Card.Header>

                <Card.Content>
                  <Image src={electronics} size='tiny' />
                  <Card.Description>Iphone 6X going at a cool price</Card.Description>
                  <Card.Meta>Posted on: 01/03/2020</Card.Meta>
                </Card.Content>
              </Card>
            </Grid.Column>
          ))}
          </Grid>
        </Grid>
      )
  }
}

export default ElectronicDevices;
