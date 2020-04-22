import React from 'react'
import {Menu, Dropdown, Input} from 'semantic-ui-react'

class TopNavigation extends React.Component {
  render () {
        return(
            <Menu fixed={'top'} pointing >
              <Menu.Item name='Logician Ads' as='a' href='/'/>

              <Menu.Menu position='right'>
                <Menu.Item ><Input transparent
                      placeholder='Search...'
                      type='search'
                    /></Menu.Item>

                  <Dropdown item text='Categories' icon='globe' simple>
                    <Dropdown.Menu>
                      <Dropdown.Item as='a' href='/categories/electronic-gadgets'>Electronic Devices</Dropdown.Item>
                      <Dropdown.Item as='a' href='/categories/auto-mobiles'>Car and AutoMobile</Dropdown.Item>
                      <Dropdown.Item as='a' href='/categories/fashion-and-beauty'>Fashion and Beauty</Dropdown.Item>
                      <Dropdown.Item as='a' href='/categories/animals-and-pets'>Pet and Animals</Dropdown.Item>
                      <Dropdown.Item as='a' href='/categories/services'>Services</Dropdown.Item>
                      <Dropdown.Item as='a' href='/categories/books-and-journals'>Books and Journals</Dropdown.Item>
                      <Dropdown.Item as='a' href='/categories/event-and-trends'>Events and Trends</Dropdown.Item>
                      <Dropdown.Item as='a' href='/categories/job-vacancies'>Job Alerts</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>

                <Menu.Item name='Sign In' as='a' href='/sign-in'/>
              </Menu.Menu>
            </Menu>
        )
  }
}

export default TopNavigation;
