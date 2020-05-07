import React from 'react'
import automobile from '../../media/auto-mobile.png'
import freelancing from '../../media/freelancer.png'
import dress from '../../media/clothing.png'
import pets from '../../media/animals-and-pets.png'
import electronics from '../../media/phones-and-computers.png'
import services from '../../media/services.png'
import books from '../../media/books.png'
import {Link} from 'react-router-dom'
import events from '../../media/incoming-events.png'
import {Grid, Card,Divider, Image, Header} from 'semantic-ui-react'

class AddCategories extends React.Component {
  render () {
    
    return (
      <>
      <Divider horizontal > Browse Categories </Divider>
      <Grid  padded>

            <Grid.Column computer={4} mobile={8} tablet={4}>
            <Link to={{pathname:'/categories/electronic-gadgets', state:{is_authenticated: this.props.is_authenticated}}}>
              <Card raised as='div' onClick={() => {}}>
                <Card.Content>
                  <Header as='h2' textAlign='center' icon>
                    <Header.Content>
                          <Image  src={electronics} size='small'/>
                    </Header.Content>
                    <Header.Subheader>Electronic Devices</Header.Subheader>

                  </Header>
                </Card.Content>
              
              </Card>
              </Link>
            </Grid.Column>

            <Grid.Column computer={4} mobile={8} tablet={4}>
            
           <Link to={{pathname:'/categories/auto-mobiles', state:{is_authenticated: this.props.is_authenticated}}}>

              <Card raised as='div' onClick={()=>{}}>
                <Card.Content>
                  <Header as='h2' textAlign='center' icon>
                    <Header.Content>
                          <Image  src={automobile} size='small'/>
                    </Header.Content>
                    <Header.Subheader>Cars and Real Estates</Header.Subheader>
                  </Header>
                </Card.Content>

              </Card>
              </Link>
            </Grid.Column>

            <Grid.Column computer={4} mobile={8} tablet={4}>
          <Link to={{pathname:'/categories/fashion-and-beauty', state:{is_authenticated: this.props.is_authenticated}}}>

              <Card raised  as='div' onClick={()=>{}}>
                <Card.Content>
                  <Header as='h2' textAlign='center' icon>
                    <Header.Content>
                          <Image  src={dress} size='small'/>
                    </Header.Content>
                    <Header.Subheader>Fashion and Beauty</Header.Subheader>
                  </Header>
                </Card.Content>

              </Card>
              </Link>
            </Grid.Column>


            <Grid.Column computer={4} mobile={8} tablet={4}>
              <Link to={{pathname:'/categories/animals-and-pets', state:{is_authenticated: this.props.is_authenticated}}}>

              <Card raised as='div' onClick={()=>{}}>
                <Card.Content>
                  <Header as='h2' textAlign='center' icon>
                    <Header.Content>
                          <Image  src={pets} size='small'/>
                    </Header.Content>
                    <Header.Subheader>Animals and Pets</Header.Subheader>
                  </Header>
                </Card.Content>

              </Card>
              </Link>
            </Grid.Column>

      </Grid>

      <Grid container>

            <Grid.Column computer={4} mobile={8} tablet={4}>
            <Link to={{pathname:'/categories/services', state:{is_authenticated: this.props.is_authenticated}}}>

              <Card raised as='div' onClick={()=>{}}>
                <Card.Content>
                  <Header as='h2' textAlign='center' icon>
                    <Header.Content>
                          <Image  src={services} size='large'/>
                    </Header.Content>
                    <Header.Subheader>Services</Header.Subheader>
                  </Header>
                </Card.Content>

              </Card>
              </Link>
            </Grid.Column>

            <Grid.Column computer={4} mobile={8} tablet={4}>
            <Link to={{pathname:'/categories/books-and-journals', state:{is_authenticated: this.props.is_authenticated}}}>

              <Card raised as='div' onClick={()=>{}}>
                <Card.Content>
                  <Header as='h2' textAlign='center' icon>
                    <Header.Content>
                          <Image  src={books} size='small'/>
                    </Header.Content>
                    <Header.Subheader>Books</Header.Subheader>
                  </Header>
                </Card.Content>

              </Card>
              </Link>
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
