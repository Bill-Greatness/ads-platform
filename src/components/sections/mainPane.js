import React from 'react';
import {KidsDataGraph,Discussions, ProgramStatistics, ProjectsInProgress, Finance, Institutions, BoardRating, LessonTimes} from './data'
import {Grid, Segment} from 'semantic-ui-react'
class Main extends React.Component {
  render () {

    return(

      <Segment raised className='account-background'>
      <Grid>
          <Grid.Row>
              <Grid.Column computer={4} className='dashtop-segment'>
                <br/>
                      <KidsDataGraph/>
              </Grid.Column>

              <Grid.Column computer={4} className='dashtop-segment'>
                <br/>
                  <Institutions />
              </Grid.Column>

              <Grid.Column computer={4} className='dashtop-segment'>
                    <br/>
                  <Finance />
              </Grid.Column>

              <Grid.Column computer={4} className='dashtop-segment'>
                <br/>
                    <ProjectsInProgress />
              </Grid.Column>

          </Grid.Row>

          <Grid.Row>
              <Grid.Column computer={10} >
                  <ProgramStatistics />
              </Grid.Column>

              <Grid.Column computer={6}>
                <BoardRating />
              </Grid.Column>

          </Grid.Row>

          <Grid.Row>
              <Grid.Column computer={7}>
                  <LessonTimes />
              </Grid.Column>



              <Grid.Column computer={9}>
                <Discussions/>
              </Grid.Column>

          </Grid.Row>
      </Grid>
      </Segment>

    )
  }
}

export default Main;
