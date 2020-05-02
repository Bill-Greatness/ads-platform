import React from 'react'
import {Grid} from 'semantic-ui-react'
import {TopNavigation, WelcomePage, Footer} from '../components'


class Welcome extends React.Component{
    
    render(){
        return(
            <>
                <TopNavigation is_authenticated={this.props.is_authenticated} />
                <Grid centered>
                <WelcomePage />
                </Grid>
                <Footer />
            </>
        )
    }
}

export default Welcome