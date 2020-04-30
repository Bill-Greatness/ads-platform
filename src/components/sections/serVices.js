import React from 'react'
import {Grid, Item, Segment} from 'semantic-ui-react'
import Title from '../_components/TopHead'
import services from '../../media/services.png'


class Services extends React.Component {
  render () {
      return(
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
                              <Item.Header as='a' href='/service-preview/1'>Claudia's Glam</Item.Header>
                              <Item.Meta>Creative MakeUp Artist</Item.Meta>
                              <Item.Description>There is a man in the mirror and he i
                              s going to make a change. is a man in the mirror and h</Item.Description>
                          </Item.Content>
                      </Item>
                    </Item.Group>
                    </Segment>
                </Grid.Column>
              ))}
            </Grid>
        </Grid>
      )
  }
}

export default Services;
