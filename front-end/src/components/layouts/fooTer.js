import React from 'react'
import {Menu} from 'semantic-ui-react'

class Footer extends React.Component {
  render () {
      return (
        <Menu fixed={'bottom'}>
        <Menu.Item name='copyRight'/>
        <Menu.Menu position='right'>
          <Menu.Item name='Logicians Ghana' icon='copyright'/>
        </Menu.Menu>
        </Menu>
      );
  }
}

export default Footer;
