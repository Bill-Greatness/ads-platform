import React from 'react'
import {Grid, Item, Segment} from 'semantic-ui-react'
import {graphql} from 'react-apollo'
import {allServices} from '../../queries/queries'
import {Link} from 'react-router-dom'
import Title from '../_components/TopHead'
import services from '../../media/services.png'

import {TopNavigation} from '../'


class Services extends React.Component {
  render () {
      return(
        <>
               
       <TopNavigation is_authenticated={this.props.location.state !== undefined ? this.props.location.state.is_authenticated: false}/>
          
        <Grid padded>
              <Title icon='globe' content='Great Services are Available' subheader='Get your queries resolved' />

            <Grid padded>
              {[1,2,3,4,5,6,7,8,9,10,11,12].map(svr =>(
                <Grid.Column key={svr} computer={5} tablet={5} mobile={16}>
                <Segment >
                    <Item.Group>
                      <Item>
                          <Item.Image src={services} size='tiny' />
                          <Item.Content>
                          <Link to={{pathname:'/service-preview/1', state:{is_authenticated: this.props.location.state !== undefined ? this.props.location.state.is_authenticated : false}}}> 
                              <Item.Header as='h3'>Claudia's Glam</Item.Header>
                              </Link>
                              <Item.Meta>Creative MakeUp Artist</Item.Meta>
                              <Item.Description>There is a man in the mirror and he i
                              s going to make a change</Item.Description>
                          </Item.Content>
                      </Item>
                    </Item.Group>
                    </Segment>
                </Grid.Column>
              ))}
            </Grid>
        </Grid>
        </>
      )
  }
}

export default graphql(allServices, {name:'allServices'})(Services);
