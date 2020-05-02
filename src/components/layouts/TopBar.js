import React from 'react'
import {Link} from 'react-router-dom'
import {Menu, Dropdown, Search} from 'semantic-ui-react'
import PropTypes from 'prop-types'

class TopNavigation extends React.Component {
  constructor(){
    super()
    this.state = {
    isLoading:false,
    value:'',
    results:{}
  }
  }
  render () {
    
      const {is_authenticated} = this.props
      const {isLoading, value, results} = this.state
        return(
            <Menu fixed={'top'} pointing borderless>
            <Link to={{pathname:'/', state:{is_authenticated: this.props.is_authenticated}}}>

              <Menu.Item name='Logician Ads'/>
              </Link>

              <Menu.Menu position='right' className='hide-on-mobile'>
                <Menu.Item>
                 <Search
                 size='mini'
                    loading={isLoading}
                    /*onResultSelect={this.handleResultSelect}
                    onSearchChange={_.debounce(this.handleSearchChange, 500, {
                      leading: true,
                    })}*/
                    results={results}
                    value={value}
                    {...this.props}
                  />
                </Menu.Item>

                  
    
                {is_authenticated ?
                <>
                <Link to=''>
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
                  </Link>
                  <Link to={{pathname:'/add-to-market', state:{is_authenticated: this.props.is_authenticated}}}>
                 <Menu.Item icon='add' name='Post Product'/>
                 </Link>
                 <Link to={{pathname:'/user-profile', state:{is_authenticated:this.props.is_authenticated}}}>
                  <Menu.Item icon='user' />
                  </Link>
                </>
               : <Menu.Item icon='key' name='Sign In' as='a' href='/sign-in'/>
                 }
              </Menu.Menu>
              
              <Menu.Menu position='right' className='hide-on-desktop'>
              <Menu.Item
              icon='bars'
              />
              </Menu.Menu>
            </Menu>
        )
  }
}

TopNavigation.propTypes = {
  is_authenticated:PropTypes.bool.isRequired
}

export default TopNavigation;
