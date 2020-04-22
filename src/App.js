import React from 'react';
import {Grid} from 'semantic-ui-react'
import {BrowserRouter as Router ,Switch,  Route } from 'react-router-dom'
import {TopNavigation,AutoMobiles,Services,
   Footer, WelcomePage, SignUp,
    LoGin,ElectronicDevices, Clothings, Pets, Books} from './components'
import './App.css'


class App extends React.Component {
  constructor(){
    super()

    this.state={
      current_view:'dashboard',
      new_node:''
    }
  }

  render () {

      return(

        <>
          <TopNavigation />
          <Grid centered>
          <Grid.Column computer={16}>
          <Router>
              <Switch>
                  <Route path='/' exact component={WelcomePage} />
                  <Route path='/become-a-registered-member' component={SignUp} />
                  <Route path='/sign-in' component={LoGin} />
                  <Route path='/categories/electronic-gadgets' component={ElectronicDevices} />
                  <Route path='/categories/auto-mobiles' component={AutoMobiles} />
                  <Route path='/categories/fashion-and-beauty' component={Clothings} />
                  <Route path='/categories/animals-and-pets' component={Pets} />
                  <Route path='/categories/services' component={Services} />
                  <Route path='/categories/books-and-journals' component={Books} />
              </Switch>
          </Router>
          </Grid.Column>
          </Grid>
            <Footer/>
        </>

      )
  }
}

export default App;
