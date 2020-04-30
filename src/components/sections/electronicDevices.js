import React from 'react'
import electronics from '../../media/phones-and-computers.png'
import {Grid, Card,  Label, Image, Icon, Divider} from 'semantic-ui-react'
import Title from '../_components/TopHead'

class ElectronicDevices extends React.Component {
  render () {
      return(
        <Grid padded>

          <Title icon='tv' content='Tv, Phones, Laptops and more' subheader='Arsenal Of Electronic Devices' />
          <Grid.Column computer={16}>
          <Divider horizontal>Tv Sets </Divider>
          </Grid.Column>
          <Grid >
          {[1,2,3,4,5,6,7,8].map(dvc => (
            <Grid.Column computer={4} tablet={4} mobile={8} key={dvc}>
              <Card raised as='a' href='/electronic-devices/1' onClick={()=>{}} style={{minHeight:150}}>
                <Card.Header textAlign='right'>
                    <Label size='tiny' tag  color='teal'>
                    <Icon name='tv'/>, 45$</Label>
                </Card.Header>

                <Card.Content>
                  <Image src={electronics} size='tiny' />
                  <Card.Description>Name Of Device</Card.Description>
                  <Card.Meta>Posted on: 01/03/2020</Card.Meta>
                </Card.Content>
              </Card>
            </Grid.Column>
          ))}
          </Grid>
          
          <Grid.Column computer={16}>
          <Divider horizontal>Phones and Tablets</Divider>
          </Grid.Column>
          <Grid >
          {[1,2,3,4,5,6,7,8].map(dvc => (
            <Grid.Column computer={4} tablet={4} mobile={8} key={dvc}>
              <Card raised as='a' href='/electronic-devices/1' onClick={()=>{}} style={{minHeight:150}}>
                <Card.Header textAlign='right'>
                    <Label size='tiny' tag  color='teal'>
                    <Icon name='tv'/>, 45$</Label>
                </Card.Header>

                <Card.Content>
                  <Image src={electronics} size='tiny' />
                  <Card.Description>Name Of Device</Card.Description>
                  <Card.Meta>Posted on: 01/03/2020</Card.Meta>
                </Card.Content>
              </Card>
            </Grid.Column>
          ))}
          </Grid>
          
          <Grid.Column computer={16}>
          <Divider horizontal>PC's and Laptops </Divider>
          </Grid.Column>
          <Grid >
          {[1,2,3,4,5,6,7,8].map(dvc => (
            <Grid.Column computer={4} tablet={4} mobile={8} key={dvc}>
              <Card raised as='a' href='/electronic-devices/1' onClick={()=>{}} style={{minHeight:150}}>
                <Card.Header textAlign='right'>
                    <Label size='tiny' tag  color='teal'>
                    <Icon name='tv'/>, 45$</Label>
                </Card.Header>

                <Card.Content>
                  <Image src={electronics} size='tiny' />
                  <Card.Description>Name Of Device</Card.Description>
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
