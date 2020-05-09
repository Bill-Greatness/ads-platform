import React from 'react'
import {Grid, Card, Image, Label, Divider} from 'semantic-ui-react'
import dress from '../../media/clothing.png'
import PandL from '../_components/priceAndLocation'
import {Link} from 'react-router-dom'
import Title from '../_components/TopHead'
import {TopNavigation } from '../'

class Clothings extends React.Component {
  render () {
      return (
        <>
         <TopNavigation is_authenticated={this.props.location.state.is_authenticated}/>

          <Grid padded>
              <Title icon='user' content='Clothings and Jewerries' subheader='Attires, Shoes, Watches and more'/>
              
              <Grid.Column computer={2} only='computer'>
                <PandL />
              </Grid.Column>
              <Grid.Column computer={14} mobile={16} tablet={14}>
              <Grid.Column computer={16} mobile={16} tablet={16}>
                <Divider horizontal>Clothings </Divider>
              </Grid.Column>
              <Grid>
              
              <Grid.Column computer={16} tablet={16} mobile={16}>
              <Grid>
                {[1,2,3,4,5,6,7,8].map(itm => (
                  <Grid.Column computer={4} mobile={8} tablet={4} key={itm}>
                  <Link to={{pathname:'/fashion-preview/1', state:{is_authenticated:this.props.location.state.is_authenticated}}}>
                  <Card raised style={{minHeight:150}} onClick={()=>{}}>
                      <Card.Header textAlign='right'><Label size='small' color='orange' tag>Clothing, 500$</Label></Card.Header>
                      <Card.Content>
                      <Image src={dress} size='tiny'/>
                      <Card.Description>Dress Details</Card.Description>
                      <Card.Meta>By: Some Random Name</Card.Meta>
                      </Card.Content>
                  </Card>
                  </Link>
                  </Grid.Column>
                ))}
              </Grid>
              
              <Grid.Column computer={16} mobile={16} tablet={16}>
                <Divider horizontal>Watches </Divider>
              </Grid.Column>
              <Grid >
                {[1,2,3,4,5,6,7,8].map(itm => (
                  <Grid.Column computer={4} mobile={8} tablet={4} key={itm}>
                  <Card as='a' href='/fashion-preview/1'  raised style={{minHeight:150}} onClick={()=>{}}>
                      <Card.Header textAlign='right'><Label size='small' color='green' tag>Watches, 500$</Label></Card.Header>
                      <Card.Content>
                      <Image src={dress} size='tiny'/>
                      <Card.Description>Dress Details</Card.Description>
                      <Card.Meta>By: Some Random Name</Card.Meta>
                      </Card.Content>
                  </Card>
                  </Grid.Column>
                ))}
              </Grid>
              
              
              <Grid.Column computer={16} mobile={16} tablet={16}>
                <Divider horizontal>Shoes </Divider>
              </Grid.Column>
              <Grid>
                {[1,2,3,4,5,6,7,8].map(itm => (
                  <Grid.Column computer={4} mobile={8} tablet={4} key={itm}>
                  <Card as='a' href='/fashion-preview/1'  raised style={{minHeight:150}} onClick={()=>{}}>
                      <Card.Header textAlign='right'><Label size='small' color='teal' tag>Shoes, 500$</Label></Card.Header>
                      <Card.Content>
                      <Image src={dress} size='tiny'/>
                      <Card.Description>Dress Details</Card.Description>
                      <Card.Meta>By: Some Random Name</Card.Meta>
                      </Card.Content>
                  </Card>
                  </Grid.Column>
                ))}
              </Grid>
              </Grid.Column>
              </Grid>
              </Grid.Column>    
          </Grid>
          </>
      );
  }
}

export default Clothings;
