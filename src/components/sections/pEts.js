import React from 'react'
import {Grid, Card, Label, Image} from 'semantic-ui-react'
import pets from '../../media/animals-and-pets.png'
import Title from '../_components/TopHead'

class Pets extends React.Component {
  render () {
      return(
        <Grid padded>
            <Title icon='blind' content='Animals and Pets' subheader='Get your next pet friend!'/>
            <Grid>
              {[1,2,3,4,5].map(pet => (
                <Grid.Column computer={4} tablet={4} mobile={8}>
                <Card raised onClick={()=>{}} as='a' href='/pet-preview/1' style={{minHeight:150}}>
                  <Card.Header textAlign='right'><Label tag color='red'>Dog, 200$</Label></Card.Header>
                  <Card.Content>
                      <Image src={pets} size='tiny'/>
                      <Card.Description>Animal Name Here and the Description can be very loong too.</Card.Description>
                  </Card.Content>
                </Card>
                </Grid.Column>
              ))}
            </Grid>
        </Grid>
      )
  }
}

export default Pets;
