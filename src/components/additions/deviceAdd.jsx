import React from 'react'
import {Form, Grid, Button } from 'semantic-ui-react'
import {graphql} from 'react-apollo'
import {addNewDevice} from '../../queries/queries'
import Title from '../_components/TopHead'
import {TopNavigation} from '..'
import PropTypes from 'prop-types'

class  AddDevice extends React.Component {
    constructor(){
        super()
        this.state = {
            device_type: '',
            device_name: '',
            price: '',
            and_or_ios_version:'',
            description:'',
            ram_size:'',
            memory_size:'',
            device_color:'',
            device_image:''
        }
    }
    
    postDevice = event => {
        event.preventDefault()
        console.log(this.state)
        this.props.addNewDevice({
            variables:this.state
        })
    }
    render(){
        const POST_CATEGORIES = [
            {value:'phones_and_tablets', text:'Phones and Tablets'},
            {value:'pc_and_laptops', text:'PC and Laptops'},
            {value: 'tv_sets', text:'Television Sets'},
            {value:'cameras_and_drones', text:'Cameras and Drones'},
            {value:'speakers_and_microphones', text:'Speakers and Microphones'}
        ]
        
        
        return(
            <>
            {this.props.location.state === undefined || this.props.location.state.is_authenticated === false ?
            this.props.history({pathname:'/sign-in'}):
            <>
            <TopNavigation is_authenticated={this.props.location.state.is_authenticated} />
            <Grid padded>
                <Title content='Advertise Device on Market' icon='add' subheader='Reach Out to Customers!' />
                <Grid.Column computer={16} mobile={16} tablet={16}>
                <Grid centered padded>
                <Grid.Column computer={8} mobile={16} tablet={10}>
                    <Form onSubmit={this.postDevice}>
                    <Form.Group widths='equal'>
                        <Form.Input
                        label='Device Name'
                        type='text'
                        onChange={(e) => this.setState({device_name:e.target.value})}
                        required
                        value={this.state.device_name}
                        />
                        
                        <Form.Input
                        type='text'
                        label='Price'
                        name='device_price'
                        required
                        onChange={(e) => this.setState({price:e.target.value})}
                        />
                </Form.Group>
                     
                <Form.Group widths='equal'>
                <Form.Select
                        label='Device  Category'
                        placeholder='Device Category'
                        required
                        options={POST_CATEGORIES}
                        onChange={(e, node) => this.setState({device_type:node.value})}
                        />
                        
                   <Form.Input
                   required
                   label='Device Image'
                   style={{width:230}} type='file' accept='image/*' id='device_image'
                   onChange={(e) => this.setState({device_image: e.target.files.length > 1 ? e.target.files[0] : e.target.files[0]})}
                   />
                        
                        
                        
                </Form.Group>
                
                <Form.Group widths='equal'>
                        
                        <Form.Input
                            name='ram_size'
                            required
                            label='Ram Size'
                            onChange={(e) => this.setState({ram_size:e.target.value})}
                            
                            />
                            
                        <Form.Input
                            name='memory_size'
                            required
                            label='Memory Size'
                           
                            onChange={(e) => this.setState({memory_size:e.target.value})}
                            />
                </Form.Group>
                <Form.Group widths='equal'>
                        <Form.Input
                            name='device_color'
                            label='Device Color'
                            onChange={(e) => this.setState({device_color:e.target.value})}
                            required
                            />
                            
                            <Form.Input
                            name='android_version'
                            label='Android | Ios Version'
                            onChange={(e) => this.setState({and_or_ios_version:e.target.value})}
                            
                            required
                            />
                </Form.Group>
                        
                            <Form.TextArea
                            label='Description'
                            required
                            onChange={(e) => this.setState({description:e.target.value})}
                            
                            />
                            
                            
                            <Form.Checkbox
                            label='I accept the Terms and Conditions'
                            required
                            />
                            
                            <Button circular type='submit'>Advertise Device</Button>
                    </Form>
                    <br/>
                    <br/>
                    </Grid.Column>
                    </Grid>
                </Grid.Column>
            </Grid>
            </>}
            </>
        )
    }
}

AddDevice.propTypes = {
    is_authenticated:PropTypes.bool.isRequired
}

export default graphql(addNewDevice, {name:'addNewDevice'})(AddDevice)