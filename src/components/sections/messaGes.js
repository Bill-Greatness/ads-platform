import React from 'react'
import {Grid, Segment, List, Image, Header, Container, Input,Form, TextArea, Button, Icon} from 'semantic-ui-react'

class Message extends React.Component {
  render () {

    return(
      <Segment raised style={{width:'inherit',textAlign:'left'}} className='account-background'>
      <Grid>
        <Grid.Column computer={16}>
        <Header as='h3' icon='users' content='Users' inverted/>
          <Segment raised className='mid-segment'>
              <Grid columns={2}>
                <Grid.Column computer={10}>
                  <Segment raised style={{maxHeight:320, overflowY:'scroll'}} className='mid-segment'>
                  <List divided relaxed>
                  {[1,2,3,4,5,6,7,8,9,10].map(idx => (
                    <List.Item key={idx}>
                      <Image avatar src='https://react.semantic-ui.com/images/avatar/small/rachel.png' />
                      <List.Content>
                        <List.Header as='a'>Terrence Howard</List.Header>
                      </List.Content>
                    </List.Item>
                  ))}

                    </List>
                  </Segment>
                </Grid.Column>

                <Grid.Column computer={6}>
                    <Segment raised className='mid-segment'>
                      <Header as ='h3' icon='send' content='Send Message' inverted/>
                      <Container style={{bottom:'100%'}}
                        >
                        <Segment raised>
                          <p>This is a small box that contains some incoming and outgoing messages </p>
                        </Segment>
                        <Form style={{paddingTop:'40%'}}>
                         <Input fluid action={{ icon: 'send', color:'green' }} placeholder='Type Message' />
                        </Form>
                        </Container>
                    </Segment>
                </Grid.Column>
              </Grid>
          </Segment>

        </Grid.Column>

        <Grid.Column computer={16}>
          <Header as='h3' icon='book' content='Notes' inverted/>
          <Segment raised className='mid-segment'>
              <Grid columns={2}>
                <Grid.Column computer={10}>
                <Segment raised style={{maxHeight:320, overflowY:'scroll'}} className='mid-segment'>
                <List divided relaxed>
                {[1,2,3,4,5,6,7,8,9,10].map(idx => (
                  <List.Item key={idx} onClick={() => {alert('You')}}>
                    <List.Icon name='book' size='large' verticalAlign='middle' />
                    <List.Content>
                      <List.Header as='a'>Notes Title</List.Header>
                      <List.Description as='p'>21/03/2020</List.Description>
                    </List.Content>
                  </List.Item>
                ))}

                  </List>
                </Segment>
                </Grid.Column>

                <Grid.Column computer={6}>
                    <Segment raised className='mid-segment'>
                      <Header as='h3' icon='write' content='Create Note' inverted/>
                      <Container>
                      <Form>
                      <Form.Field
                        required
                        placeholder='Note title'
                        label='Note Title'
                        control={Input}
                      />

                        <Form.Field
                        required
                        placeholder='Write Your notes Title Here...'
                        label='Note Details'
                        style={{minHeight:100,maxHeight:120}}
                        control={TextArea}
                        /><br/>
                        <Button color='green' circular icon>
                          <Icon name='add'/> Save Note
                        </Button>
                      </Form>
                      </Container>
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

export default Message;
