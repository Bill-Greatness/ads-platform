import React from 'react'
import {Grid, Item, Segment, Label} from 'semantic-ui-react'
import automobile from '../../media/auto-mobile.png'
import Title from '../_components/TopHead'

class AutoMobiles extends React.Component {
  render () {
      return(
        <Grid padded>

              <Title icon='car' content='Cars and Automobiles' subheader='Arsenal for Vehicles' />
              <Grid container>
                  {[1,2,3,4,5,6,7,8,9].map(cd => (
                    <Grid.Column computer={8} mobile={16} tablet={8}>
                    <Segment>
                      <Item.Group divided>
                          <Item>
                            <Item.Image src={automobile} size='tiny'/>
                            <Item.Content>
                              <Item.Header as='a'>Name of Car </Item.Header>
                              <Item.Description> Some long Description here Some long Description here Some long Description here Some long Description here </Item.Description>
                              <Item.Extra><Label color='teal' ribbon='right' content='Cars,  540.00$'/></Item.Extra>
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

export default AutoMobiles;
