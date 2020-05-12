import React from 'react'
//import PropTypes from 'prop-types'
import {Grid, Segment, Divider, Icon, Table, Item} from 'semantic-ui-react'
import {TopNavigation} from '../'
import Title from '../_components/TopHead'

class   PreviewFashion extends React.Component{
    constructor(){
        super()
        this.state = {
            
        }
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
                       <Item.Group>
                           <Item>
                               <Item.Image src='../media/logicians.jpg'/>
                               <Item.Content>
                                   <Item.Header content='Item Name' />
                                   <Item.Description content='Excepteur pariatur sunt incididunt nostrud laborum irure laboris non labore eiusmod amet officia et. Sit occaecat sint excepteur ut nulla sunt deserunt. Eiusmod adipisicing cupidatat ipsum amet do nisi proident reprehenderit est et. Labore reprehenderit aliquip cillum minim velit ut laboris laboris consequat in ea ad ullamco.'/>
                               </Item.Content>
                           </Item>
                       </Item.Group>

                    </Grid>
                </Grid.Column>
                
                <Grid.Column computer={16} mobile={16} tablet={16}>
                    <Divider horizontal>Other Fashion Types </Divider>
                    <Grid padded>
                    {[1,2,3,4,5,6,7,8].map(idx => (
                        <Grid.Column key={idx} computer={4} tablet={3} mobile={8}>
                            <Segment>
                                <h4>Other Fashion </h4>
                            </Segment>
                        </Grid.Column>
                    ))}
                    </Grid>
                </Grid.Column>
                
                <Grid.Column computer={16} mobile={16} tablet={16}>
                    <Divider horizontal>Watches </Divider>
                    <Grid padded>
                    {[1,2,3,4,5,6,7,8].map(idx => (
                        <Grid.Column key={idx} computer={4} tablet={3} mobile={8}>
                            <Segment>
                                <h4>Watches</h4>
                            </Segment>
                        </Grid.Column>
                    ))}
                    </Grid>
                </Grid.Column>
                
                
                <Grid.Column computer={16} mobile={16} tablet={16}>
                    <Divider horizontal>Jewerries </Divider>
                    <Grid padded>
                    {[1,2,3,4,5,6,7,8].map(idx => (
                        <Grid.Column key={idx} computer={4} tablet={3} mobile={8}>
                            <Segment>
                                <h4>Jewerries </h4>
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

export default PreviewFashion