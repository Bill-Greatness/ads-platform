import React from 'react'
import {Grid, Item, Segment, Label, Divider} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import automobile from '../../media/auto-mobile.png'
import Title from '../_components/TopHead'
import {TopNavigation} from '../'

class AutoMobiles extends React.Component {
  render () {
      return(
        <>
        <TopNavigation is_authenticated={this.props.location.state.is_authenticated}/>
        <Grid padded>

              <Title icon='car' content='Cars, Lands and Properties' subheader='Your Side for great properties' />
              <Grid.Column computer={16} tablet={16} mobile={16}>
                <Divider horizontal>Cars and Automobile </Divider>
              </Grid.Column>
              <Grid >
                  {[1,2,3,4].map(cd => (
                    <Grid.Column computer={8} mobile={16} tablet={8}>
                    <Segment>
                      <Item.Group divided>
                          <Item>
                            <Item.Image src={automobile} size='tiny'/>
                            <Item.Content>
                              <Item.Header as='a'>
                              <Link to={{pathname:'/automobiles/1', state:{is_authenticated:this.props.location.state.is_authenticated}}}>
                              Name of Car
                              </Link>
                              </Item.Header>
                              <Item.Description> Some long Description here Some long Description here Some long Description here Some long Description here </Item.Description>
                              <Item.Extra><Label color='teal' ribbon='right' content='Cars,  540.00$'/></Item.Extra>
                            </Item.Content>
                          </Item>
                      </Item.Group>
                      </Segment>
                    </Grid.Column>
                  ))}
              </Grid>
              
              <Grid.Column computer={16} tablet={16} mobile={16}>
                <Divider horizontal>Real Estates </Divider>
              </Grid.Column>
              <Grid>
                  {[1,2,3,4].map(cd => (
                    <Grid.Column computer={8} mobile={16} tablet={8}>
                    <Segment>
                      <Item.Group divided>
                          <Item>
                            <Item.Image src={automobile} size='tiny'/>
                            <Item.Content>
                              <Item.Header as='a' href={'/automobiles/1'}>Name of Car </Item.Header>
                              <Item.Description> Some long Description here Some long Description here Some long Description here Some long Description here </Item.Description>
                              <Item.Extra><Label color='teal' ribbon='right' content='Cars,  540.00$'/></Item.Extra>
                            </Item.Content>
                          </Item>
                      </Item.Group>
                      </Segment>
                    </Grid.Column>
                  ))}
              </Grid>
              
              
              <Grid.Column computer={16} tablet={16} mobile={16}>
                <Divider horizontal>Houses For Rent </Divider>
              </Grid.Column>
              <Grid >
                  {[1,2,3,4].map(cd => (
                    <Grid.Column computer={8} mobile={16} tablet={8}>
                    <Segment>
                      <Item.Group divided>
                          <Item>
                            <Item.Image src={automobile} size='tiny'/>
                            <Item.Content>
                              <Item.Header as='a' href={'/automobiles/1'}>Name of Car </Item.Header>
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
        </>
      )
  }
}

export default AutoMobiles;
