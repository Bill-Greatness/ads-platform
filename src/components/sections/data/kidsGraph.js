import React from 'react'
import {Label, Header, Grid, Divider, Icon} from 'semantic-ui-react'


class KidsDataGraph extends React.Component{
  constructor(){
    super()
    this.state = {   }
  }

  render(){
    return(
      <Label ribbon color='teal'>
        <Grid columns={2} relaxed='very'>
            <Grid.Column>
                <Header as='h1' inverted>
                    <Header.Content style={{padding:'22%', fontSize:'25px'}}>
                        780
                    </Header.Content>
                    <Header.Subheader>

                      <Icon name='male'/> Boys
                    </Header.Subheader>
                </Header>
            </Grid.Column>
            <Grid.Column>
              <Header as='h1' inverted>
                  <Header.Content style={{padding:'22%', fontSize:'25px'}}>
                      67
                  </Header.Content>
                  <Header.Subheader><Icon name='female'/> Girls</Header.Subheader>
              </Header>
            </Grid.Column>

        </Grid>
          <Divider vertical  children={<Icon name='circle' color='white'/>}/>
        </Label>
    )
  }

}
export default KidsDataGraph
