import React from 'react';
import {Grid} from 'semantic-ui-react'
import AppRouter from './routes/AppRoute'
import {BrowserRouter} from 'react-router-dom'
import './App.css'
import  {Top, Side, Foot} from './components'

class App extends React.Component {
  constructor(){
    super()

    this.state={
      current_view:'dashboard',
      new_node:''
    }
  }

  changeCurrentView = name => {
    this.setState({current_view:name})
  }

  changeNode = name => {
    this.setState({new_node:name})
  }

  handlePortalClose = name =>{
    if(this.state.current_view === name){
      this.setState({...this.state})
    }
  }
  render () {

    // let current_view
    // let active_node

/*    switch (this.state.current_view) {
      case 'dashboard':
          current_view = <Main current_view={this.state.current_view}/>
        break;
      case 'registration':
          current_view = <Registration current_view={this.state.current_view}/>
          break;

      case 'payroll':
            current_view = <PayRoll current_view={this.state.current_view}/>
            break;

      case 'database':
            current_view = <DataBase current_view={this.state.current_view}/>
            break;

      case 'messages':
            current_view = <Message current_view={this.state.current_view}/>
            break;

      case 'team_profile':
            current_view= <Team current_view={this.state.current_view}/>
            break;

      case 'user_profile':
            current_view = <Profile/>
            break;
      case 'edit_profile':
            current_view = <EditProfile />
            break;

      case 'assessments':
            current_view = <Assessment/>
            break;

      case 'events':
            current_view = <Schedules close_view={this.handlePortalClose} current_view={this.state.current_view} open_node={this.changeNode}/>
            active_node = <AddEvent active_node={this.state.new_node}/>
            break;
      default:
        current_view = <Main/>

    }
*/
      return(
        <BrowserRouter>
        <Grid  columns={2}>
            <Grid.Column  computer={2} tablet={2}>
                <Side change_view={this.changeCurrentView}/>
            </Grid.Column>

              <Grid.Column  computer={14} tablet={14}>
                  <Top change_view={this.changeCurrentView}/>
                  <Grid>
                <Grid.Column className='main' computer={16} tablet={16}>
                        <AppRouter />
                </Grid.Column>
                <Grid.Column>
                    <Foot />
                </Grid.Column>
                </Grid>

              </Grid.Column>
        </Grid>
        </BrowserRouter>
      )
  }
}

export default App;
