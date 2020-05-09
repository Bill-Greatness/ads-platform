import React from 'react'
// import PropTypes from 'prop-types'
import {Grid, Segment, Divider, Icon} from 'semantic-ui-react'
import Title from '../_components/TopHead'
import {TopNavigation} from '../'

class   PreviewDevice extends React.Component{
    constructor(){
        super()
        this.state = {
            
        }
    }

    componentDidMount(){
        console.log(this.props.match.params._device_id)
    }
    
    render(){
        return(
            <>
            {this.props.location.state === undefined || this.props.location.state.is_authenticated === false ?
            this.props.history.push({pathname:'/sign-in', state:{is_authenticated:false}}) :
            <>
            <TopNavigation is_authenticated={this.props.location.state.is_authenticated} /> 
            <Grid padded>
                <Title icon='tv' content='Gadget Name' subheader='Some Sub Heading'/>
                <Grid.Column computer={16} mobile={16} tablet={16}>
                    <Grid padded>
                        <Grid.Row>
                            <Grid.Column computer={8} tablet={8} mobile={16}>
                            <Segment placeholder>
                                    <h3> Device Images Here </h3>
                                    
                            </Segment>
                            </Grid.Column>
                            
                            <Grid.Column computer={8} tablet={8} mobile={16}>
                            <Segment placeholder>
                                <h3> Device Descriptions Here </h3>
                                
                            </Segment>
                            </Grid.Column>
                        </Grid.Row>
                 {/* <Divider vertical children={<Icon name='arrow right' />} /> */}

                    </Grid>
                </Grid.Column>
                
                <Grid.Column computer={16} mobile={16} tablet={16}>
                    <Divider horizontal>Other Devices </Divider>
                    <Grid padded>
                    {[1,2,3,4,5,6,7,8,9,10].map(idx => (
                        <Grid.Column key={idx} computer={4} tablet={3} mobile={8}>
                            <Segment>
                                <h4>Device Here </h4>
                            </Segment>
                        </Grid.Column>
                    ))}
                    </Grid>
                </Grid.Column>
            </Grid>
            </>}
            </>
        )
}
}



export default PreviewDevice