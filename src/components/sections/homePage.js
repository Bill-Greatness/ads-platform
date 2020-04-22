import React from 'react'
import AddPreview from '../layouts/midTop'
import AddCategories from './cateGories'
import {Grid} from 'semantic-ui-react'

class WelcomePage extends React.Component {
  render () {
    return (
        <>
        <Grid.Column computer={16} mobile={16} tablet={16}>
            <AddPreview/>
        </Grid.Column>
        <Grid.Column computer={16} mobile={16} tablet={16}>
            <AddCategories/>
        </Grid.Column>
        </>
    );
  }
}

export default WelcomePage;
