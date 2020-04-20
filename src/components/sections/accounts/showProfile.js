import React from 'react'
import placeImage from '../../../media/placeholder.png'
import {Segment, Grid, Header, Icon, Image, Divider, Item} from 'semantic-ui-react'

class Profile extends React.Component {
  render () {
      return(
        <Segment raised className='mid-segment' style={{height:'100%'}} >
          <Grid>
            <Grid.Column computer={16}>
              <Segment raised className='account-background'>
              <Header as='h1' inverted>
               <Image circular width='300' src={placeImage} size='massive'/><br/>
                  Bill Greatness Clinton
                  <Header.Subheader>
                  Chief Executive Officer
                  </Header.Subheader>
                </Header>
                  <br/>
                  <br/>

                  <Grid.Column computer={16}>
                    <Segment raised className='account-top'>
                      <Grid columns={2}>
                          <Grid.Column>
                            <Divider horizontal inverted children={<><Icon name='user'/> Basic Information</>}></Divider>
                            <br/>

                            <Item.Group>
                            <Item>
                                Full Name
                                <Item.Content verticalAlign='right'>Debrah Bill Clinton</Item.Content>
                              </Item>

                                <Divider/>
                              <Item>
                                  Date Of Birth
                                  <Item.Content verticalAlign='right'>03/11/1998</Item.Content>
                                </Item>

                                  <Divider/>
                                <Item>
                                    Institution
                                    <Item.Content verticalAlign='right'>Melbourne University</Item.Content>
                                  </Item>

                                  <Divider/>

                                  <Item>
                                      Marital Status
                                      <Item.Content verticalAlign='right'>Single</Item.Content>
                                    </Item>

                                    <Divider/>

                                    <Item>
                                        Gender
                                        <Item.Content verticalAlign='right'>Male</Item.Content>
                                      </Item>

                                      <Divider/>

                                      <Item>
                                          Age
                                          <Item.Content verticalAlign='right'>21</Item.Content>
                                        </Item>
                            </Item.Group>
                          </Grid.Column>

                          <Grid.Column>

                          <Divider horizontal inverted children={<> <Icon name='call'/> Contact Information</>}></Divider>



                          <br/>
                          <Item.Group>

                          <Item>
                              Phone
                              <Item.Content verticalAlign='right'>050 934-3841</Item.Content>
                            </Item>
                            <Divider />
                            <Item>
                                Email
                                <Item.Content verticalAlign='right'>billgreatness@outlook.com</Item.Content>
                              </Item>

                              <Divider />

                              <Item>
                                  Website
                                  <Item.Content verticalAlign='right'>billgreatness.github.io</Item.Content>
                                </Item>

                                <Divider />

                                <Item>
                                    Address
                                    <Item.Content verticalAlign='right'>NY 0C, Grid Street. Ohio</Item.Content>
                                  </Item>

                          </Item.Group>
                          <br/>
                          <br/>

                          <Divider horizontal inverted children={<> <Icon name='briefcase'/> Work Details</>}/>
                          <br/>

                          <Item.Group>
                          <Item>
                              Employee ID
                              <Item.Content verticalAlign='right'>BGC-000134</Item.Content>
                            </Item>
                              <Divider />
                          <Item>
                              Department
                              <Item.Content verticalAlign='right'>Programming</Item.Content>
                            </Item>

                              <Divider/>
                              <Item>
                                  Employment Type
                                  <Item.Content verticalAlign='right'>Full Time</Item.Content>
                                </Item>

                                <Divider />

                                <Item>
                                    Salary
                                    <Item.Content verticalAlign='right'>240000$</Item.Content>
                                  </Item>

                                  <Divider />


                                    <Item>
                                        Date Joined
                                        <Item.Content verticalAlign='right'>21/03/2020</Item.Content>
                                      </Item>

                                      <br/>
                          </Item.Group>


                          </Grid.Column>

                      </Grid>
                    </Segment>
                  </Grid.Column>

              </Segment>
            </Grid.Column>
          </Grid>
        </Segment>
      )
  }
}

export default Profile;
