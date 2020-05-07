import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import {Sidebar, Menu,  Divider, Icon, Dropdown} from 'semantic-ui-react'

class SideBar extends React.Component{
    render(){
        
        return(
            <Sidebar as={Menu} vertical animation='overlay' width='thin' visible={this.props.visible} >
                
                <Menu.Item name='Logicians' as='h4'/>
                <Divider horizontal   /> 
                <Menu.Item name='Search Here' icon='search' />
                <Dropdown item text='Categories' icon='globe' simple>
                    <Dropdown.Menu>
                     <Link to={{pathname:'/categories/electronic-gadgets', state:{is_authenticated: this.props.is_authenticated}}}>

                      <Dropdown.Item>Electronic Devices</Dropdown.Item>
                      </Link>
                      
                      <Link to={{pathname:'/categories/auto-mobiles', state:{is_authenticated: this.props.is_authenticated}}}>

                      <Dropdown.Item>Properties</Dropdown.Item>
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
                {this.props.is_authenticated ? <>
                    <Menu.Item name='profile' icon='user' />
                    <Menu.Item name='add Product' icon='add' />
                    <Menu.Item name='Logout' icon='lock' />
                </> :
                <> 
                 <Menu.Item name='Login' icon='lock' />
                </>}
             
            </Sidebar>
        )
    }
}
SideBar.propTypes = {
    is_authenticated:PropTypes.bool.isRequired
}
export default SideBar