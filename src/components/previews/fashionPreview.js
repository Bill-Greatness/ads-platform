import React from 'react'
//import PropTypes from 'prop-types'
import {Grid, Segment, Divider, Icon, Table} from 'semantic-ui-react'
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
            {this.props.location.state === undefined ?
            this.props.history.push({pathname:'/categories/fashion-and-beauty', state:{is_authenticated:false}}) :
            
            <>
            <TopNavigation is_authenticated={this.props.location.state.is_authenticated} />
            <Grid padded>
                <Title icon='tv' content='Gadget Name' subheader='Some Sub Heading'/>
                <Grid.Column computer={16} mobile={16} tablet={16}>
                    <Grid padded>
                        <Grid.Row>
                            <Grid.Column computer={8} tablet={8} mobile={16}>
                            <Segment placeholder>
                                    <h3> Fashion Images Here </h3>
                                    
                            </Segment>
                            </Grid.Column>
                            
                            <Grid.Column computer={8} tablet={8} mobile={16}>
                            
                                <Table unstackable>
                                    <Table.Header>
                                        <Table.Row>
                                            <Table.HeaderCell/>
                                            <Table.HeaderCell/>
                                        </Table.Row>
                                    </Table.Header>
                                    <Table.Body>
                                    <Table.Row>
                                        <Table.Cell>Side </Table.Cell>
                                         <Table.Cell>Side</Table.Cell>

                                    </Table.Row>
                                    
                                    <Table.Row>
                                        <Table.Cell>Side </Table.Cell>
                                         <Table.Cell>Side</Table.Cell>

                                    </Table.Row>
                                    
                                    <Table.Row>
                                        <Table.Cell>Side </Table.Cell>
                                         <Table.Cell>Side</Table.Cell>

                                    </Table.Row>
                                    
                                    <Table.Row>
                                        <Table.Cell>Side </Table.Cell>
                                         <Table.Cell>Side</Table.Cell>

                                    </Table.Row>
                                    
                                    <Table.Row>
                                        <Table.Cell>Side </Table.Cell>
                                         <Table.Cell>Side</Table.Cell>

                                    </Table.Row>
                                    </Table.Body>
                                </Table>
                                
                         
                            </Grid.Column>
                        </Grid.Row>
                 <Divider vertical children={<Icon name='arrow right' />} />

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