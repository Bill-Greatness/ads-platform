import React from 'react'
import {Grid, Card, Image, Label, Divider} from 'semantic-ui-react'
import dress from '../../media/clothing.png'
import Title from '../_components/TopHead'

class Clothings extends React.Component {
  render () {
      return (
          <Grid padded>
              <Title icon='user' content='Clothings and Jewerries' subheader='Attires, Shoes, Watches and more'/>
              <Grid.Column computer={16} mobile={16} tablet={16}>
                <Divider horizontal>Clothings </Divider>
              </Grid.Column>
              <Grid padded>
                {[1,2,3,4,5,6,7,8].map(itm => (
                  <Grid.Column computer={4} mobile={8} tablet={4} key={itm}>
                  <Card as='a' href='/fashion-preview/1'  raised style={{minHeight:150}} onClick={()=>{}}>
                      <Card.Header textAlign='right'><Label size='small' color='orange' tag>Clothing, 500$</Label></Card.Header>
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
                <Divider horizontal>Watches </Divider>
              </Grid.Column>
              <Grid padded>
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
              <Grid padded>
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
              
          </Grid>
      );
  }
}

export default Clothings;
