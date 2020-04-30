import React from 'react'
import Title from '../_components/TopHead'
import {Grid, Segment, Icon , Divider} from 'semantic-ui-react'
import PropTypes from 'prop-types'

class PreviewService extends React.Component{
    constructor(){
        super()
        this.state = {
            
        }
    }
    render(){
        return(
            <Grid padded>
                <Title content='Service Details' icon='cart' subheader='some service Details'/>
                <Grid.Column computer={16} mobile={16} tablet={16}>
                    <Grid padded>
                     <Grid.Row>
                     <Grid.Column computer={8} mobile={16} tablet={8}>
                             <Segment placeholder>
                                <h3> Service Images Here </h3>
                             </Segment>
                     </Grid.Column>
                     
                     <Grid.Column computer={8} mobile={16} tablet={8}>
                             <Segment placeholder>
                                <h3> User and Service LIst Details Here </h3>
                             </Segment>
                     </Grid.Column>
                     
                     </Grid.Row>
                     <Divider vertical children={<Icon name='arrow right' />} />
                     </Grid>
                     </Grid.Column>
                     
                     <Grid.Column computer={16} mobile={16} tablet={16}>
                     <Divider horizontal>Similar Services </Divider>
                        <Grid padded>
                            {[1,2,3,4,5,6].map(idx => (
                                <Grid.Column key={idx} computer={4} mobile={8} tablet={4}>
                                <Segment>
                                    <h4> Similar Service </h4>
                                </Segment>
                                </Grid.Column>
                            ))}
                        </Grid>
                     </Grid.Column>
            </Grid>
        )
    }
}

export default PreviewService