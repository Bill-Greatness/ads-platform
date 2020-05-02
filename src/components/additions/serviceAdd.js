import React from 'react'
import {Grid, Form, Button} from 'semantic-ui-react'
import {TopNavigation} from '../'
import Title from '../_components/TopHead'

class AddService extends React.Component{
    constructor(){
        super()
        this.state = {
            
        }
    }
    
    render(){
        const SERVICE_LIST = [{
            text:'Delivery', value:'door_to_door'
        },{text:'Online or Virtual', value:'online_or_virtual'},
        {text:'Free Service', value:'free_service'}]
        return(
            <>
            <TopNavigation is_authenticated={this.props.location.state.is_authenticated}/>
            <Grid padded>
                <Title content='Broadcast your Services' subheader='some some header' icon='globe'/>
                <Grid.Column computer={16} mobile={16} tablet={16}>
                    <Grid centered>
                        <Grid.Column computer={12} tablet={12} mobile={14}>
                            <Form>
                            <Form.Group widths='equal'>
                                <Form.Input
                                required
                                label='Service Name'
                                placeholder='Name of Service'
                                />
                                
                                <Form.Input
                                required
                                label='Service Price'
                                placeholder='0.00$'
                                />
                            </Form.Group>
                            
                            <Form.Group widths='equal'>
                            
                            <Form.Input
                             required
                             label='Service Location'
                             placeholder='Service Location'
                             />
                             
                             <Form.Select
                             label='Service Tag'
                             options={SERVICE_LIST}
                             required
                             placeholder='Select Service Tag'
                             />
                             
                             </Form.Group>
                             
                             <Form.Input
                             required
                             placeholder='Service Duration'
                             label='Service Duration'
                             />
                             
                             <Form.TextArea
                             required
                             label='Service Description'
                             />
                            </Form>
                        </Grid.Column>
                    </Grid>
                </Grid.Column>
            </Grid>
            </>
        )
    }
}

export default AddService