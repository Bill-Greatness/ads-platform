import React from 'react'
import {Grid, Segment,Header, Form, Input, Divider, Icon, Image, Button} from 'semantic-ui-react'
import placeImage from '../../../media/placeholder.png'

class EditProfile extends React.Component {
  render () {
      return(
        <Segment style={{textAlign:'left'}} className='mid-segment'>
          <Grid>
            <Grid.Column computer={16}>
              <Segment raised className='account-background'>
              <Header inverted as='h1' style={{textAlign:'center'}}>
               <Image circular width='300' src={placeImage} size='massive'/><br/>
                  Bill Greatness Clinton
                  <Header.Subheader>
                    <Icon name='edit'/> Edit Account
                  </Header.Subheader>
                </Header>
                  <br/>
                  <br/>
                <Grid columns={3}>
                <Grid.Column>
                <Divider horizontal inverted children={<><Icon name='user'/> Basic Information</>}/>
                <Segment raised className='account-top'>
                  <Form>
                      <Form.Field
                        label='Full Name'
                        control={Input}
                        required
                        value='Bill Greatness'
                        />

                        <Form.Field
                          label='Date Of Birth'
                          control={Input}
                          type='date'
                          required
                          value='03/11/1998'
                          />

                          <Form.Field
                            label='Institution'
                            control={Input}
                            type='text'
                            required
                            value='Melbourne University'
                            />

                            <Form.Field
                              label='Marital Status'
                              control={Input}
                              type='text'
                              required
                              value='Single'
                              />

                              <Form.Field
                                label='Gender'
                                control={Input}
                                type='text'
                                required
                                value='Male'
                                />


                  </Form>
                  </Segment>
                  </Grid.Column>


                {/*Contact Information*/}

                  <Grid.Column>
                  <Divider horizontal inverted children={<><Icon name='phone'/> Contact Information</>}/>
                  <Segment raised className='account-top'>
                    <Form>
                        <Form.Field
                          label='Phone Line 1'
                          control={Input}
                          required
                          value='020528457'
                          />

                          <Form.Field
                            label='Phone Line 2'
                            control={Input}
                            required
                            value='020528457'
                            />

                          <Form.Field
                            label='Email'
                            control={Input}
                            type='email'
                            required
                            value='billpikes@outlook.com'
                            />

                            <Form.Field
                              label='Address'
                              control={Input}
                              type='text'
                              required
                              value='NY OC 034, Ohio'
                              />

                              <Form.Field
                                label='Website'
                                control={Input}
                                type='text'
                                required
                                value='https://www.billgreatness.github.io'
                                />



                    </Form>
                    </Segment>

                    </Grid.Column>

                    {/*Work Information*/}

              <Grid.Column>
              <Divider horizontal inverted children={<><Icon name='briefcase'/> Work Information</>}/>
              <Segment raised className='account-top'>
                <Form>
                    <Form.Field
                      label='Employee ID'
                      control={Input}
                      required
                      value='BGC-0343C2'
                      />

                      <Form.Field
                        label='Employement Type'
                        control={Input}
                        type='date'
                        required
                        value='Full Time'
                        />

                        <Form.Field
                          label='Department'
                          control={Input}
                          type='text'
                          required
                          value='Training'
                          />

                          <Form.Field
                            label='Salary'
                            control={Input}
                            type='text'
                            required
                            value='240000$'
                            />

                            <Form.Field
                              label='Date Joined'
                              control={Input}
                              type='text'
                              required
                              value='23/07/2020'
                              />


                </Form>
                </Segment>

                </Grid.Column>


                <Grid.Column computer={16} style={{textAlign:'center'}}>
                  <Segment raised className='account-top'>
                  <Button color='green' circular> Update Information </Button>
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

export default EditProfile;
