import React from 'react'
import AddPreview from '../layouts/midTop'
import AddCategories from './cateGories'
import {Grid} from 'semantic-ui-react'
import {TopNavigation} from '../'

class WelcomePage extends React.Component {
  render () {
      const is_authenticated = this.props.location.state === undefined ? false : this.props.location.state.is_authenticated 
        //console.log(this.props.location)
    return (
        <>
        <TopNavigation is_authenticated={is_authenticated}/>
        <Grid padded>
        <Grid.Column computer={16} mobile={16} tablet={16}>
            <AddPreview/>
        </Grid.Column>
        <Grid.Column computer={16} mobile={16} tablet={16}>
            <AddCategories is_authenticated={is_authenticated}/>
        </Grid.Column>
        </Grid>
        </>
    );
  }
}

export default WelcomePage;
