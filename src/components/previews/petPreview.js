import React from 'react'
import {Grid, Segment, Divider, Icon, Table} from 'semantic-ui-react'
import Title from '../_components/TopHead'
import PropTypes from 'prop-types'

class   PreviewPet extends React.Component{
        constructor(){
            super()
            this.state ={
                
            }
        }
    render(){
        console.log(Divider)
        return(
            <Grid padded>
                <Title icon='blind' content='Pet Name' subheader='Some Sub Heading'/>
                <Grid.Column computer={16} mobile={16} tablet={16}>
                    <Grid padded>
                        <Grid.Row>
                            <Grid.Column computer={8} tablet={8} mobile={16}>
                            <Segment placeholder>
                                    <h3> Pet Images Here </h3>
                                    
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
                                        <Table.Cell colSpan='2'>Side </Table.Cell>
                                        

                                    </Table.Row>
                                    
                                    </Table.Body>
                                </Table>

                            </Grid.Column>
                        </Grid.Row>
                 <Divider vertical clearing children={<Icon name='arrow right' />} />

                    </Grid>
                </Grid.Column>
                
                <Grid.Column computer={16} mobile={16} tablet={16}>
                    <Divider horizontal>Other Similar Pets </Divider>
                    <Grid padded>
                    {[1,2,3,4,5,6,7,8,9,10].map(idx => (
                        <Grid.Column key={idx} computer={4} tablet={3} mobile={8}>
                            <Segment>
                                <h4>Other Pets </h4>
                            </Segment>
                        </Grid.Column>
                    ))}
                    </Grid>
                </Grid.Column>
            </Grid>
        )
    }
}

PreviewPet.propTypes = {
    is_authenticated: PropTypes.bool.isRequired
}

export default PreviewPet