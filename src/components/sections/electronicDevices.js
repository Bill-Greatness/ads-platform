import React from 'react'
import electronics from '../../media/phones-and-computers.png'
import {Grid, Card,  Label, Image, Icon, Divider, List, Header,} from 'semantic-ui-react'
import Title from '../_components/TopHead'
import PandL from '../_components/priceAndLocation'
import {TopNavigation} from '../'

class ElectronicDevices extends React.Component {
  constructor(){
    super()
    this.state = {
      price_tag:''
    }
  }
  render () {
      return(
        <>
        <TopNavigation is_authenticated={this.props.location.state.is_authenticated}/>
        <Grid padded>

          <Title icon='tv' content='Tv, Phones, Laptops and more' subheader='Arsenal Of Electronic Devices' />
          <Grid.Column computer={16}>
          <Divider horizontal>Tv Sets </Divider>
          </Grid.Column>
          <Grid.Column computer={2} only='computer'>
            <PandL />
          </Grid.Column>
          
          <Grid.Column computer={14} tablet={14} mobile={16}>
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
                    <Label size='tiny' tag  color='red'>
                    <Icon name='tv'/>, 45$</Label>
                </Card.Header>

                <Card.Content>
                  <Image src={electronics} size='tiny' />
                  <Card.Description>Name Of Device</Card.Description>
                  <Card.Meta><Icon name='location arrow' size='small'/> Takoradi</Card.Meta>
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
          </Grid.Column>
        </Grid>
        </>
      )
  }
}

export default ElectronicDevices;
