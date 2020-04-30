import React from 'react'
import {Grid, Segment, Table} from 'semantic-ui-react'
import Title from '../_components/TopHead'

class  PreviewAutoMobile extends React.Component{
    constructor(){
        super()
        this.state = {
            
        }
    }
    render(){
        return(
           <Grid padded>
                <Title icon='car' content='First Preview' subheader='Another subheader' />
                <Grid padded>  
                <Grid.Column computer={16} tablet={16} mobile={16}>
                        <Segment placeholder style={{width:'100%'}}>
                            
                            <h3>This is an image of the car or building, it must be carousel that displays many things.</h3>
                        </Segment>
                    </Grid.Column>    
                <Grid.Row>
                    <Grid.Column tablet={8} computer={8} mobile={16}>
                           <Table celled singleLine fixed>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>Property</Table.HeaderCell>
                                    <Table.HeaderCell>Details</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell>Name</Table.Cell>
                                    <Table.Cell>Car Name</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Model</Table.Cell>
                                    <Table.Cell>ModelNumber</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Price</Table.Cell>
                                    <Table.Cell>PriceValue</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Chasis</Table.Cell>
                                    <Table.Cell>N/A</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Years Used</Table.Cell>
                                    <Table.Cell>N/A</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Another Field</Table.Cell>
                                    <Table.Cell>N/A</Table.Cell>
                                </Table.Row>
                                
                            </Table.Body>
                            
                           </Table>
                    </Grid.Column>
                    
                    <Grid.Column tablet={8} computer={8} mobile={16}>
                          <Title icon='user' content='Owner Details' subheader='owner name here'/>
                          <Table> {/* I'm not gonna use a table tho*/}
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>Side 1</Table.HeaderCell>
                                    <Table.HeaderCell>Side 2</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell>Full Name</Table.Cell>
                                    <Table.Cell>Some Long Name Here</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Location</Table.Cell>
                                    <Table.Cell>Some Location</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Phone</Table.Cell>
                                    <Table.Cell>Some Phone</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Email</Table.Cell>
                                    <Table.Cell>Some Mail</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Date Joined</Table.Cell>
                                    <Table.Cell>Some Date</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Ratings</Table.Cell>
                                    <Table.Cell>S5 Stars</Table.Cell>
                                </Table.Row>
                            </Table.Body>
                          </Table>
                    </Grid.Column>
                </Grid.Row>
                    
                </Grid>
           </Grid>
        )
    }
}

export default PreviewAutoMobile


