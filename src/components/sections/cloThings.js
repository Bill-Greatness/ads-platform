import React from 'react'
import {Grid, Card, Image, Label} from 'semantic-ui-react'
import dress from '../../media/clothing.png'
import Title from '../_components/TopHead'

class Clothings extends React.Component {
  render () {
      return (
          <Grid padded>
              <Title icon='user' content='Clothings and Jewerries' subheader='Attires, Shoes, Watches and more'/>

              <Grid padded>
                {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map(itm => (
                  <Grid.Column computer={3} mobile={8} tablet={3} key={itm}>
                  <Card  raised style={{minHeight:150}} onClick={()=>{}}>
                      <Card.Header><Label size='small' color='teal' ribbon='right'>Clothing, 500$</Label></Card.Header>
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
