import React from 'react'
import {Form, Grid, Button, Header, List } from 'semantic-ui-react'
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
            device_image:'',
            accepted_terms:false,
            number_in_stock:0
        }
    }
    
    postDevice = event => {
        event.preventDefault()
        console.log(this.state)
        this.props.addNewDevice({
            variables:this.state
        })
    }
    handleImageUpload = event => {
        const fileReader = new FileReader()
        const file = event.target.files[0]

        fileReader.addEventListener('load', (e) => {
            console.log(fileReader.result)
        })

        fileReader.readAsDataURL(file)
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
            this.props.history.push({pathname:'/sign-in'}):
            <>
            <TopNavigation is_authenticated={this.props.location.state.is_authenticated} />
            <Grid padded>
                <Title content='Advertise Device on Market' icon='add' subheader='Reach Out to Customers!' />
                <Grid.Column computer={12} mobile={16} tablet={12}>
                <Grid centered padded>
                <Grid.Column computer={12} mobile={16} tablet={10}>
                    <Form onSubmit={this.postDevice} encType='multi-part/form-data'>
                    <Form.Group widths='equal'>

                    <Form.Select
                        label='Device  Category'
                        placeholder='Device Category'
                        required
                        options={POST_CATEGORIES}
                        onChange={(e, node) => this.setState({device_type:node.value})}
                        />

                        <Form.Input
                        label='Device Name'
                        type='text'
                        onChange={(e) => this.setState({device_name:e.target.value})}
                        required
                        value={this.state.device_name}
                        />
                        
                        
                </Form.Group>
                     
                <Form.Group widths='equal'>
                <Form.Input
                   required
                   label='Device Image'
                    type='file' accept='image/*' id='device_image'
                   onChange={this.handleImageUpload}
                   />

                <Form.Input
                        type='text'
                        label='Price'
                        name='device_price'
                        required
                        onChange={(e) => this.setState({price:e.target.value})}
                        />
                        
                   
                        
                        
                        
                </Form.Group>

                {this.state.device_type === 'pc_and_laptops' ? 
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
                : null}
            
               {this.state.device_type === 'phones_and_tablets' ? 
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


                        <Form.Input
                            name='android_version'
                            label='Android | Ios Version'
                            onChange={(e) => this.setState({and_or_ios_version:e.target.value})}                        
                            required
                            />
                </Form.Group> : null }
                <Form.Group widths='equal'>
                        <Form.Input
                            name='device_color'
                            label='Device Color'
                            onChange={(e) => this.setState({device_color:e.target.value})}
                            required
                            />

                        <Form.Input
                            name='number_in_stock'
                            label='Number in Stock'
                            type='number'
                            onChange={(e) => this.setState({number_in_stock:e.target.value})}
                            required
                            />
                            
                    {this.state.device_type === 'tv_sets' ?
                            <Form.Input
                                name='tv_resolution'
                                onChange={(e) => this.setState({resolution:e.target.value.trim !== '' ? e.target.value:''})}
                                required
                                label='Tv Resolution'
                                /> : null}
                </Form.Group>
                        
                            <Form.TextArea
                            label='Description'
                            required
                            onChange={(e) => this.setState({description:e.target.value})}
                            
                            />
                            
                            
                            <Form.Checkbox
                            label='I accept the Terms and Conditions'
                            onChange={(e) => this.setState({accepted_terms:!this.state.accepted_terms})}
                            checked={this.state.accepted_terms}
                            required
                            />
                            
                            <Button circular disabled={this.state.accepted_terms === false} type='submit'>Advertise Device</Button>
                    </Form>
                    <br/>
                    <br/>
                    </Grid.Column>
                    </Grid>
                </Grid.Column>
                <Grid.Column computer={4} tablet={4} only='computer'>
                    <Header content='Tips on Posting' subheader='reach out with great contents' icon='info' />
                    <List divided>
                        <List.Item content='Some Side One' icon='check'/>
                        <List.Item content='Some Side One' icon='check'/>
                        <List.Item content='Some Side One' icon='check'/>
                        <List.Item content='Some Side One' icon='check'/>
                        <List.Item content='Some Side One' icon='check'/>
                        <List.Item content='Some Side One' icon='check'/>
                    </List>
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

AddDevice.defaultProps = {
    is_authenticated:false
}

export default graphql(addNewDevice, {name:'addNewDevice'})(AddDevice)