import React from 'react'
import automobile from '../../media/auto-mobile.png'
import freelancing from '../../media/freelancer.png'
import dress from '../../media/clothing.png'
import pets from '../../media/animals-and-pets.png'
import electronics from '../../media/phones-and-computers.png'
import services from '../../media/services.png'
import books from '../../media/books.png'
import events from '../../media/incoming-events.png'
import {Grid, Card,Divider, Image, Header} from 'semantic-ui-react'

class AddCategories extends React.Component {
  render () {
    return (
      <>
      <Divider horizontal > Browse Categories </Divider>
      <Grid  container>

            <Grid.Column computer={4} mobile={8} tablet={4}>
              <Card raised as='a' href='/categories/electronic-gadgets'>
                <Card.Content>
                  <Header as='h2' textAlign='center' icon>
                    <Header.Content>
                          <Image  src={electronics} size='small'/>
                    </Header.Content>
                    <Header.Subheader>Electronic Devices</Header.Subheader>
                  </Header>
                </Card.Content>

              </Card>
            </Grid.Column>

            <Grid.Column computer={4} mobile={8} tablet={4}>
              <Card raised onClick={()=>{}} as='a' href='/categories/auto-mobiles'>
                <Card.Content>
                  <Header as='h2' textAlign='center' icon>
                    <Header.Content>
                          <Image  src={automobile} size='small'/>
                    </Header.Content>
                    <Header.Subheader>Cars and Automobiles</Header.Subheader>
                  </Header>
                </Card.Content>

              </Card>
            </Grid.Column>

            <Grid.Column computer={4} mobile={8} tablet={4}>
              <Card raised onClick={()=>{}} as='a' href='/categories/fashion-and-beauty'>
                <Card.Content>
                  <Header as='h2' textAlign='center' icon>
                    <Header.Content>
                          <Image  src={dress} size='small'/>
                    </Header.Content>
                    <Header.Subheader>Fashion and Beauty</Header.Subheader>
                  </Header>
                </Card.Content>

              </Card>
            </Grid.Column>


            <Grid.Column computer={4} mobile={8} tablet={4}>
              <Card raised onClick={()=>{}} as='a' href='/categories/animals-and-pets'>
                <Card.Content>
                  <Header as='h2' textAlign='center' icon>
                    <Header.Content>
                          <Image  src={pets} size='small'/>
                    </Header.Content>
                    <Header.Subheader>Animals and Pets</Header.Subheader>
                  </Header>
                </Card.Content>

              </Card>
            </Grid.Column>

      </Grid>

      <Grid container>

            <Grid.Column computer={4} mobile={8} tablet={4} as='a' href='/categories/services'>
              <Card raised onClick={()=>{}}>
                <Card.Content>
                  <Header as='h2' textAlign='center' icon>
                    <Header.Content>
                          <Image  src={services} size='large'/>
                    </Header.Content>
                    <Header.Subheader>Services</Header.Subheader>
                  </Header>
                </Card.Content>

              </Card>
            </Grid.Column>

            <Grid.Column computer={4} mobile={8} tablet={4}>
              <Card raised onClick={()=>{}} as='a' href='/categories/books-and-journals'>
                <Card.Content>
                  <Header as='h2' textAlign='center' icon>
                    <Header.Content>
                          <Image  src={books} size='small'/>
                    </Header.Content>
                    <Header.Subheader>Books and Journals</Header.Subheader>
                  </Header>
                </Card.Content>

              </Card>
            </Grid.Column>

            <Grid.Column computer={4} mobile={8} tablet={4}>
              <Card raised onClick={()=>{}}>
                <Card.Content>
                  <Header as='h1' textAlign='center' icon>
                    <Header.Content>
                          <Image  src={events} size='small'/>
                    </Header.Content>
                    <Header.Subheader>Event and Trends</Header.Subheader>


                  </Header>
                </Card.Content>

              </Card>
            </Grid.Column>

            <Grid.Column computer={4} mobile={8} tablet={4}>
              <Card raised onClick={()=>{}}>
                <Card.Content>
                  <Header as='h2' textAlign='center' icon>
                    <Header.Content>
                          <Image  src={freelancing} size='small'/>
                    </Header.Content>
                    <Header.Subheader>Job Alerts</Header.Subheader>
                  </Header>
                </Card.Content>

              </Card>
            </Grid.Column>

      </Grid>
      </>

    );
  }
}

export default AddCategories;
