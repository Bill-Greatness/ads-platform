import React from 'react'
import {Link} from 'react-router-dom'
import SideBar from './sideBar'
import {Menu, Dropdown, Search, TransitionablePortal} from 'semantic-ui-react'
import PropTypes from 'prop-types'

class TopNavigation extends React.Component {
  constructor(){
    super()
    this.state = {
    isLoading:false,
    value:'',
    open_search:false,
    open_side:false,
    results:{}
  }
  }
  render () {
    
      const {is_authenticated} = this.props
      const {isLoading, value, results} = this.state
        return(
            <Menu fixed={'top'} pointing borderless>
            <Link to={{pathname:'/', state:{is_authenticated: this.props.is_authenticated}}}>

              <Menu.Item name='Logicians' as='h4'/>
              </Link>

              <Menu.Menu position='right' className='hide-on-mobile'>
               <Menu.Item icon='search' onClick={(e) => this.setState({open_search:!this.state.open_search})}/> 
                <TransitionablePortal open={this.state.open_search} animation={{transition:'fly left', duration:500}} >
                  <div style={{zIndex:1000, position:'absolute', top:40, right:0}}>
                      <Search
                      size='small'
                    loading={isLoading}
                    results={results}
                    /*onResultSelect={this.handleResultSelect}
                    onSearchChange={_.debounce(this.handleSearchChange, 500, {
                      leading: true,
                    })}*
                    */
                    value={value}
                    {...this.props}
                  />
                  </div>
                </TransitionablePortal>

                  
    
                {is_authenticated ?
                <>
                
                <Dropdown item text='Categories' icon='globe' simple>
                    <Dropdown.Menu>
                     <Link to={{pathname:'/categories/electronic-gadgets', state:{is_authenticated: this.props.is_authenticated}}}>

                      <Dropdown.Item>Electronic Devices</Dropdown.Item>
                      </Link>
                      
                      <Link to={{pathname:'/categories/auto-mobiles', state:{is_authenticated: this.props.is_authenticated}}}>

                      <Dropdown.Item>Car and AutoMobile</Dropdown.Item>
                      </Link>
                      <Link to={{pathname:'/categories/fashion-and-beauty', state:{is_authenticated: this.props.is_authenticated}}}>

                      <Dropdown.Item >Fashion and Beauty</Dropdown.Item>
                      </Link>
                      
                         <Link to={{pathname:'/categories/animals-and-pets', state:{is_authenticated: this.props.is_authenticated}}}>

                      <Dropdown.Item >Pet and Animals</Dropdown.Item>
                      </Link>
                        
                        <Link to={{pathname:'/categories/services', state:{is_authenticated: this.props.is_authenticated}}}>

                      <Dropdown.Item>Services</Dropdown.Item>
                      </Link>
                      
                      <Link to={{pathname:'/categories/books-and-journals', state:{is_authenticated: this.props.is_authenticated}}}>

                      <Dropdown.Item>Books and Journals</Dropdown.Item>
                      </Link>
                      
                       <Link to={{pathname:'/categories/event-and-trends', state:{is_authenticated: this.props.is_authenticated}}}>

                      <Dropdown.Item >Events and Trends</Dropdown.Item>
                      </Link>
                      
                      <Link to={{pathname:'/categories/job-vacancies', state:{is_authenticated: this.props.is_authenticated}}}>

                      <Dropdown.Item >Job Alerts</Dropdown.Item>
                      </Link>
                    </Dropdown.Menu>
                  </Dropdown>
               
                  <Link to={{pathname:'/add-to-market', state:{is_authenticated: this.props.is_authenticated}}}>
                 <Menu.Item icon='add' name='Post Product'/>
                 </Link>
                 <Link to={{pathname:'/user-profile', state:{is_authenticated:this.props.is_authenticated}}}>
                  <Menu.Item icon='user' />
                  </Link>
                </>
               : <Menu.Item icon='sign in' name='Sign In' as='a' href='/sign-in'/>
                 }
              </Menu.Menu>
              
              <Menu.Menu position='right' className='hide-on-desktop'>
              <Menu.Item
              icon={this.state.open_side ? 'delete' : 'bars'}
              onClick={(e) => this.setState({open_side:!this.state.open_side})}
              />
              
              <div style={{position:'absolute', left:0, top:40, zIndex:1000}}>
                <SideBar visible={this.state.open_side} is_authenticated={this.props.is_authenticated}/>
              </div>
              
              </Menu.Menu>
            </Menu>
        )
  }
}

TopNavigation.propTypes = {
  is_authenticated:PropTypes.bool.isRequired
}

TopNavigation.defaultProps = {
  is_authenticated: false
}

export default TopNavigation;
