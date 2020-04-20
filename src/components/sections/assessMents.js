import React from 'react'
import AssessmentTable from './tables/assessMentTable'
import MeetingAttendance from './tables/meetingAttendanceTable'
import {Segment, Grid,  Header } from 'semantic-ui-react'

class Assessment extends React.Component {
  render () {
    return(
      <Segment raised className='account-background'>
        <Grid>
          <Grid.Column computer={16}>
            <Segment raised className='mid-segment'>
              <Header icon='time' content='Assessments' inverted/>

              <Grid>
                <Grid.Column computer={16}>
                    <Segment raised className='mid-segment'>
                        <AssessmentTable />
                    </Segment>
                </Grid.Column>
              </Grid>

              <Header icon='time' content='Meeting Attendance' inverted/>
              <Grid>
                <Grid.Column computer={16}>
                    <Segment raised className='mid-segment'>
                        <MeetingAttendance />
                    </Segment>
                </Grid.Column>
              </Grid>

            </Segment>
          </Grid.Column>
        </Grid>
        <br/>
        <br/>
      </Segment>
    )
  }
}

export default Assessment;
