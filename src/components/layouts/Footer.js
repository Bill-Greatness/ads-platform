import React from 'react';
import {Menu} from 'semantic-ui-react'

class Foot extends React.Component {
  render () {

    return(
      <Menu fixed='bottom' className='mid-segment'>
          <Menu.Menu position='right'>
              <Menu.Item style={{color:'white'}}>
                &copy; 2020- Logicians Enterprise Ghana &trade;
              </Menu.Item>
          </Menu.Menu>
      </Menu>
    )
  }
}

export default Foot;
