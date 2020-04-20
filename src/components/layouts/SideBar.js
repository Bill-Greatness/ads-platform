import React from 'react';
import {Menu, Divider, Sidebar, Segment} from 'semantic-ui-react'

class Side extends React.Component {
  constructor(){
    super()
    this.state = {
      active_tab:'dashboard'
    }
  }

  handleActiveTab = name => event =>{
    this.setState({active_tab:name})

  }
  render () {

          const {active_tab} = this.state
    return(

      <Sidebar.Pushable as={Segment}  style={{ position:'fixed', minHeight:'900px',border:'none', overflowY:'scroll !important'}}>
      <Sidebar
          as={Menu}
          animation='overlay'
          icon='labeled'
          className='side-bar'

          vertical
          visible={true}
          width='thin'

        >
        <br/>
        <br/>
        <br/>
        <br/>
      <Menu.Item
        as='a'
        href='/'
        name='dashboard'
        active={active_tab ==='dashboard'}
        onClick={this.handleActiveTab('dashboard')}
        className='side-icon'
        icon='th'
      />

    <Divider horizontal/>

      <Menu.Item
        as='a'
        href='/register'
        name='registration'
        icon='add user'
        className='side-icon'
        active={active_tab ==='registration'}
        onClick={this.handleActiveTab('registration')}
      />


<Divider horizontal/>

      <Menu.Item
        as='a'
        href='/data-tables'
        name='Database'
        icon='database'
        className='side-icon'
        active={active_tab ==='database'}
        onClick={this.handleActiveTab('database')}
      />


    <Divider horizontal/>

    <Menu.Item
      name='Payroll'
      as='a'
      href='/payroll'
      className='side-icon'
      icon='credit card'
      active={active_tab ==='payroll'}
      onClick={this.handleActiveTab('payroll')}
    />


  <Divider horizontal/>

        <Menu.Item
          as='a'
          href='/messages'
          name='Messages'
          icon='facebook messenger'
          className='side-icon'
          active={active_tab ==='messages'}
          onClick={this.handleActiveTab('messages')}
        />


    <Divider horizontal  />

          <Menu.Item
            name='Event Schedules'
            as='a'
            href='/event-schedules'
            icon='calendar'
            className='side-icon'
            active={active_tab ==='events'}
            onClick={this.handleActiveTab('events')}
          />

<Divider horizontal/>

                <Menu.Item
                  as='a'
                  href='/assessments'
                  name='Assessments'
                  className='side-icon'
                  icon='clock'
                  active={active_tab ==='assessments'}
                  onClick={this.handleActiveTab('assessments')}
                />

<Divider horizontal/>

                      <Menu.Item
                        as='a'
                        href='/files'
                        name='Files'
                        className='side-icon'
                        icon='briefcase'
                        active={active_tab ==='files'}
                        onClick={this.handleActiveTab('files')}
                      />
                  </Sidebar>
                  <Sidebar.Pusher className='mid-segment'>

                      <Segment>
                          <h3>This will not show Anywhere</h3>
                      </Segment>
                  </Sidebar.Pusher>
  </Sidebar.Pushable>

    )
  }
}

export default Side;
