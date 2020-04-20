import React from 'react'
import placeImage from '../../media/place-image.jpg'
import { Grid, Segment,Card, Divider, Icon, Image} from 'semantic-ui-react'

class Team extends React.Component {
  render () {
    return(
      <Segment raised style={{width:'inherit'}} className='account-background'>
        <Grid >
          <Grid.Column computer={16}>
              <Segment raised className='mid-segment'>
                <Divider horizontal inverted children={<><Icon name='users'/>Team</>} />
                <Grid>
                  <Grid.Column computer={16}>
                  <Segment raised className='account-background'>
                  <Grid>
                  {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map(idx => (
                    <Grid.Column computer={3}>
                    <Card raised fluid className='account-top'>
                    <Image src={placeImage} wrapped ui={false} size='tiny'/>
                    <Card.Content>
                      <Card.Header>Daniel Pikes</Card.Header>
                      <Card.Meta>Department: Training</Card.Meta>
                    </Card.Content>
                    <Card.Content extra>{/*eslint-disable-next-line*/}
                      <a style={{marginRight:34}}>
                        <Icon name='delete' />
                      </a>{/*eslint-disable-next-line*/}
                      <a>
                        <Icon name='angle double right' />
                      </a>
                    </Card.Content>
                  </Card>
                  </Grid.Column>
                  ))}
                  </Grid>
                  </Segment>
                  </Grid.Column>
                </Grid>
              </Segment>
          </Grid.Column>

        </Grid>
        </Segment>
    )
  }
}

export default Team;
