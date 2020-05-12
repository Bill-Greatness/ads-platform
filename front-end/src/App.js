import React from 'react';
import {Grid} from 'semantic-ui-react'

import {BrowserRouter as Router ,Switch,  Route } from 'react-router-dom'
import {Properties,Services,
   Footer, WelcomePage, SignUp,AddPost,
    LoGin,ElectronicDevices, Clothings,
    Pets, Books, AddDevice, AddProperty,
    AddFashion,AddPet,AddBook,AddService,AddVacancy, UserProfile
    } from './components'
import {PreviewAutoMobile,PreviewPet,
PreviewDevice, PreviewFashion,
PreviewService} from './components/previews'
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
        console.log(<Route />)
      return(
        <>
          <Grid centered>
          <Grid.Column computer={16} mobile={16} tablet={16}>
          <Router>
              <Switch>
                  <Route path='/' exact component={WelcomePage} />
                  
                  <Route path='/become-a-registered-member' component={SignUp} />
                  <Route path='/sign-in' component={LoGin} />
                  <Route path='/user-profile' component={UserProfile} />
                  
                  <Route path='/categories/electronic-gadgets' component={ElectronicDevices} />
                  <Route path='/categories/auto-mobiles' component={Properties} />
                  <Route path='/categories/fashion-and-beauty' component={Clothings} />
                  <Route path='/categories/animals-and-pets' component={Pets} />
                  <Route path='/categories/services' component={Services} />
                  <Route path='/categories/books-and-journals' component={Books} />
                  
                  <Route path='/automobiles/1' component={PreviewAutoMobile} />
                  <Route path='/electronic-devices/:_device_id'  component={PreviewDevice} />
                  <Route path='/fashion-preview/1' component={PreviewFashion} />
                  <Route path='/service-preview/1' component={PreviewService} />
                  <Route path='/pet-preview/1' component={PreviewPet} />
                  
                  <Route path='/add-to-market' component={AddPost} />
                  <Route path='/add-electronic-gadgets' component={AddDevice} />
                  <Route path='/add-property' component={AddProperty} />
                  <Route path='/add-fashion' component={AddFashion} />
                  <Route path='/add-pets-or-animals' component={AddPet} />
                  <Route path='/add-books-or-journals' component={AddBook} />
                  <Route path='/add-service' component={AddService} />
                  <Route path='/add-vacancy' component={AddVacancy} />
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
