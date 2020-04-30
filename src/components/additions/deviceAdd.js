import React from 'react'
import {Form, Grid, Button } from 'semantic-ui-react'
import Title from '../_components/TopHead'

class  AddDevice extends React.Component {
    constructor(){
        super()
        this.state = {
            
        }
    }
    
    render(){
        const POST_CATEGORIES = [
            {value:'phones_and_tablets', text:'Phones and Tablets', key:1},
            {value:'pc_and_laptops', text:'PC and Laptops', key:2},
            {value: 'tv_sets', text:'Television Sets', key:3},
            {value:'cameras_and_drones', text:'Cameras and Drones', key:4},
            {value:'speakers_and_microphones', text:'Speakers and Microphones', key:5}
        ]
        return(
            <Grid padded>
                <Title content='Advertise Device on Market' icon='add' subheader='Reach Out to Customers!' />
                <Grid.Column computer={16} mobile={16} tablet={16}>
                <Grid centered padded>
                <Grid.Column computer={8} mobile={16} tablet={10}>
                    <Form>
                    <Form.Group widths='equal'>
                        <Form.Input
                        label='Device Name'
                        type='text'
                        name='device_name'
                        required
                        value={this.state.device_name}
                        />
                        
                        <Form.Input
                        type='text'
                        label='Price'
                        name='device_price'
                        required
                        value={this.state.device_price}
                        />
                </Form.Group>
                     
                <Form.Group widths='equal'>   
                   <Form.Input
                   required
                   label='Device Image'
                   style={{width:230}} type='file' accept='image/*' id='device_image'/>
                        
                        <Form.Select
                        label='Product Category'
                        required
                        options={POST_CATEGORIES}
                        name='product_name'
                        value={this.state.product_category}
                        />
                        
                </Form.Group>
                
                <Form.Group widths='equal'>
                        
                        <Form.Input
                            name='ram_size'
                            required
                            label='Ram Size'
                            value={this.state.ram_size}
                            />
                            
                        <Form.Input
                            name='memory_size'
                            required
                            label='Memory Size'
                           
                            value={this.state.memory_size}
                            />
                </Form.Group>
                <Form.Group widths='equal'>
                        <Form.Input
                            name='device_color'
                            label='Device Color'
                            value={this.state.device_color}
                            required
                            />
                            
                            <Form.Input
                            name='android_version'
                            label='Android | Ios Version'
                            value={this.state.android_or_ios_version}
                            required
                            />
                </Form.Group>
                        
                            <Form.TextArea
                            label='Description'
                            required
                            value={this.state.device_description}
                            />
                            
                            <a href='/terms-and-condition'> Terms and Conditions </a>
                            
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
        )
    }
}

export default AddDevice