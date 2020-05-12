import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import {Sidebar, Menu,  Divider, Icon, Dropdown} from 'semantic-ui-react'

class SideBar extends React.Component{
    render(){
        
        return(
            <Sidebar as={Menu} vertical
             
             animation='overlay' width='thin' visible={this.props.visible} >
                
                <Menu.Item name='Logicians' as='h4'/>
                <Divider horizontal   /> 
                    
                     <Link to={{pathname:'/categories/electronic-gadgets', state:{is_authenticated: this.props.is_authenticated}}}>

                      <Menu.Item icon='computer' name='Devices'/>
                      </Link>
                      
                      <Link to={{pathname:'/categories/auto-mobiles', state:{is_authenticated: this.props.is_authenticated}}}>

                      <Menu.Item name='Property' icon='home'/>
                      </Link>
                      <Link to={{pathname:'/categories/fashion-and-beauty', state:{is_authenticated: this.props.is_authenticated}}}>

                      <Menu.Item icon='gem' name='Fashion'/>
                      </Link>
                      
                         <Link to={{pathname:'/categories/animals-and-pets', state:{is_authenticated: this.props.is_authenticated}}}>

                      <Menu.Item name='Pets' icon='asl'/>
                      </Link>
                        
                        <Link to={{pathname:'/categories/services', state:{is_authenticated: this.props.is_authenticated}}}>

                      <Menu.Item name='services' icon='globe'/>
                      </Link>
                      
                      <Link to={{pathname:'/categories/books-and-journals', state:{is_authenticated: this.props.is_authenticated}}}>

                      <Menu.Item name='Books' icon='book'/>
                      </Link>
                      
                       <Link to={{pathname:'/categories/event-and-trends', state:{is_authenticated: this.props.is_authenticated}}}>

                      <Menu.Item name='events' icon='calendar'/>
                      </Link>
                      
                      <Link to={{pathname:'/categories/job-vacancies', state:{is_authenticated: this.props.is_authenticated}}}>

                      <Menu.Item name='Vacancies' icon='travel'/>
                      </Link>
                   
                
                {this.props.is_authenticated ? <>
               
                    <Link to={{pathname:'/add-to-market', state:{is_authenticated:this.props.is_authenticated}}}>
                        <Menu.Item name='add Product' icon='add' />
                    </Link>
                    <Link to={{pathname:'/user-profile', state:{is_authenticated:this.props.is_authenticated}}}>
                     <Menu.Item name='profile' icon='user' />
                     </Link>
                    <Link to={{pathname:'/', state:{is_authenticated:false}}}>
                        <Menu.Item name='Logout' icon='sign out' />
                    </Link>
                </> :
                <> 
                <Link to={{pathname:'/sign-in'}}>
                 <Menu.Item name='Login' icon='sign in' />
                 </Link>
                </>}
             
            </Sidebar>
        )
    }
}
SideBar.propTypes = {
    is_authenticated:PropTypes.bool.isRequired
}
export default SideBar