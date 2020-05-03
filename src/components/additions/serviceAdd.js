import React from 'react'
import {Grid, Form, Button} from 'semantic-ui-react'
import PropTypes from 'prop-types'
import {TopNavigation} from '../'
import Title from '../_components/TopHead'

class AddService extends React.Component{
    constructor(){
        super()
        this.state = {
            service_name:'',
            serive_location:'',
            service_tag:'',
            service_duration:'',
            service_price:'',
            service_description:''
        }
    }
    
    render(){
        const SERVICE_LIST = [{
            text:'Delivery', value:'door_to_door'
        },{text:'Online or Virtual', value:'online_or_virtual'},
        {text:'Free Service', value:'free_service'}]
        return(
            <>
            {this.props.location.state === undefined ?
            this.props.history.push({pathname:'/sign-up'}) :
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
                            <Button circular>Advertise </Button>
                        </Grid.Column>
                    </Grid>
                </Grid.Column>
            </Grid>
            </>}
            </>
        )
    }
}

AddService.propTypes = {
    is_authenticated:PropTypes.bool.isRequired
}

export default AddService