import React from 'react'
import PropTypes from 'prop-types'
import {addNewProperty} from '../../queries/queries'
import {graphql} from 'react-apollo'
import Title from '../_components/TopHead'
import {TopNavigation} from '..'
import {Grid, Form, Button} from 'semantic-ui-react'

class   AddProperty extends React.Component{
    constructor(){
        super()
        this.state = {
            property_type:'',
            property_name:'',
            property_location:'',
            property_price:'',
            property_registered:false,
            property_description:''
        }
    }
    
    postProperty = event => {
        event.preventDefault()
        this.props.addNewProperty({
            variables:this.state
        })
    }
    render(){
        
            const PROPERTY_TYPES = [
                {text:'Buildings', value:'buildings', key:1},
                {text:'Cars', value:'cars_and_automobile', key:2},
                {text:'Land', value:'land', key:3},
                {text:'Office Space', value:'office_space', key:4}
            ]
        return(
            <>
            {this.props.location.state === undefined ?
            this.props.history.push({pathname:'/sign-in',state:{is_authenticated:false} }):
            <>
            <TopNavigation is_authenticated={this.props.location.state.is_authenticated} /> 
            <Grid padded>
                <Title icon='car' content='Advertise Property on Market' subheader='Reach out to potential Customers!'/>
                <Grid.Column computer={16} tablet={16} mobile={16}>
                    <Grid centered padded>
                        <Grid.Column computer={12} tablet={12} mobile={16}>
                            <Form onSubmit={this.postProperty}>
                            <Form.Group widths='equal'>
                                <Form.Input
                                    label='Property Name'
                                    onChange={(e) => this.setState({property_name:e.target.value})}
                                    placeholder='Property Name'
                                    required
                                    />
                                    
                                
                                <Form.Input
                                required
                                label='Poperty Location'
                                onChange={(e) => this.setState({property_location:e.target.value})}
                                placeholder='Property Location'
                                />
                                </Form.Group>
                                
                                <Form.Group widths='equal'>
                                   
                                <Form.Input
                                required
                                onChange={(e) => this.setState({property_price:e.target.value})}
                                placeholder='Property Price'
                                label='Property Price'
                                />
                                
                                <Form.Input
                                label='Property Images (more than 2)'
                                onChange={(e) => this.setState({property_image:e.target.files[0]})}
                                required
                                type='file'
                                multiple={true}
                                accept='image/*'
                                />
                                
                                </Form.Group>
                                
                                <Form.Group widths='equal'>
                                     <Form.Select
                                        required
                                        placeholder='Property Type'
                                        onChange={(e, node) => this.setState({property_type:node.value})}
                                        label='Property Type'
                                        options={PROPERTY_TYPES}
                                        />
                                        
                                        <Form.Input
                                        required
                                        type='text'
                                        placeholder='Empty Field'
                                        label='Some Field Here'
                                        />
                                </Form.Group>
                                
                                <Form.Checkbox
                                onChange={(e) => this.setState({property_registered:!this.state.property_registered})}
                                label='Property Registered ?'
                                checked={this.state.property_registered}
                                />
                                
                                
                                <Form.TextArea
                                label='Property Description'
                                onChange={(e) => this.setState({description:e.target.value})}
                                required
                                />
                                
                                <Button type='submit' circular>Advertise Property</Button>
                                
                            </Form>
                        </Grid.Column>
                    </Grid>
                </Grid.Column>
            </Grid>
            </>}
            </>
        )
    }
}

AddProperty.propTypes = {
    is_authenticated:PropTypes.bool.isRequired
}

export default graphql(addNewProperty, {name:'addNewProperty'})(AddProperty)