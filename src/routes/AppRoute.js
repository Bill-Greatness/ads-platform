import React from 'react'
import {Main, Registration, DataBase, PayRoll,Team, Profile, Message, Assessment, Schedules, EditProfile} from '../components'
import {Route, Switch} from 'react-router-dom'

class ApplicationRoutes extends React.Component {
  render () {
      return(

          <Switch>
            <Route path='/' component={Main} exact />
            <Route path='/register' component={Registration}/>
            <Route path='/data-tables' component={DataBase}/>
            <Route path='/payroll' component={PayRoll}/>
            <Route path='/preview-profile' component={Profile}/>
            <Route path='/edit-profile' component={EditProfile} />
            <Route path='/messages' component={Message}/>
            <Route path='/assessments' component={Assessment} />
            <Route path='/event-schedules' component={Schedules} />
            <Route path='/team' component={Team} />
          </Switch>
      )
  }
}

export default ApplicationRoutes;
