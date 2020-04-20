import React from 'react';
import placeImage from '../../media/place-image.jpg'
import { Notification } from '../'

import {Menu, Header,
  Button,
   Icon,Divider,
 TransitionablePortal, Segment, Image, List, Label} from 'semantic-ui-react'

class Top extends React.Component {
  constructor(){
    super()
    this.state = {
      show_notes:false,
      profile_tab:false,
      team_profile:false
    }
  }

  toggleDataDisplay = event => {
    this.setState({show_notes:!this.state.show_notes, profile_tab:false})
  }


  toggleProfileTab = event => {
    this.setState({profile_tab:!this.state.profile_tab, show_notes:false})
  }


  change_view = name =>  event => {
    this.setState({profile_tab:!this.state.profile_tab})
    this.props.change_view(name)
  }
  render () {
        const {show_notes} = this.state

    return(
      <>
            <Menu pointing  fixed={'top'}  className='side-bar'>
              <Menu.Item>
                <Header as='h3' inverted icon='graduation' content='Logicians Inc.' textAlign={'center'}/>
              </Menu.Item>
                  <Menu.Menu position='right'>
                    <Menu.Item>
                      <Button icon circular inverted style={{border:'none'}} labelPosition='left'>
                          <Icon name='clock' className='top-icon' size='large'/>
                          <span id='current-time'></span>
                        </Button>

                    </Menu.Item>
                  <Menu.Item active={this.state.show_notes === true}>
                  <Button icon circular style={{background:'none'}} onClick={this.toggleDataDisplay}>
                      <Icon name='bell' className='top-icon' size='large'/>
                      <Label floating color='red' circular size='small'>6</Label>
                    </Button>

                      <TransitionablePortal open={show_notes} transition={{animation:'fly down', duration:1000}}>
                        <Segment
                          style={{
                            left:'60%',
                            position:'fixed',
                            top:'5%',
                            zIndex:1000,
                          }}
                          className='mid-segment'
                          >
                              <Notification />
                        </Segment>

                      </TransitionablePortal>
                  </Menu.Item>

                  <Menu.Item>
                    <Button icon circular style={{background:'none'}} as='a' href='/team'>
                        <Icon name='users' className='top-icon' size='large'/>
                    </Button>

                  </Menu.Item>

                <Menu.Item>
                  <Button icon circular style={{background:'none'}} onClick={this.toggleProfileTab}>
                    <Image src={placeImage}  avatar/>
                  </Button>

                  <TransitionablePortal open={this.state.profile_tab} transition={{animation:'fly right', duration:2000}}>
                      <Segment
                        style={{
                          left:'87%',
                          width:170,

                          position:'fixed',
                          top:'5%',

                          zIndex:1000
                        }}
                        className='mid-segment'

                        >
                          <List inverted>
                              <List.Item as='a' href='/preview-profile'>
                                <List.Icon name='user' />
                                <List.Content>Profile</List.Content>
                              </List.Item>

                              <Divider />

                              <List.Item as='a' href='/edit-profile'>
                                <List.Icon name='write'  />
                                <List.Content>Edit Profile</List.Content>
                              </List.Item>

                              <Divider/>

                                <List.Item as='a' onClick={this.change_view('logout_off_profile')}>
                                  <List.Icon name='logout' />
                                  <List.Content>Logout</List.Content>
                                </List.Item>

                              <Divider />

                              <List.Item as='a' onClick={this.change_view('delete_profile')}>
                                <List.Icon name='delete' />
                                <List.Content>Delete Account</List.Content>
                              </List.Item>

                          </List>
                      </Segment>
                  </TransitionablePortal>
                  </Menu.Item>
                  </Menu.Menu>
            </Menu>

      </>
    )
  }
}

export default Top;
