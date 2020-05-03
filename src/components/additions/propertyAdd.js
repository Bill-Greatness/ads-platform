import React from 'react'
import PropTypes from 'prop-types'
import Title from '../_components/TopHead'
import {TopNavigation} from '../'
import {Grid, Form, Button} from 'semantic-ui-react'

class   AddProperty extends React.Component{
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
            this.props.history.push({pathname:'/sign-up'}):
            <>
            <TopNavigation is_authenticated={this.props.location.state.is_authenticated} /> 
            <Grid padded>
                <Title icon='car' content='Advertise Property on Market' subheader='Reach out to potential Customers!'/>
                <Grid.Column computer={16} tablet={16} mobile={16}>
                    <Grid centered padded>
                        <Grid.Column computer={12} tablet={12} mobile={16}>
                            <Form>
                            <Form.Group widths='equal'>
                                <Form.Input
                                    label='Property Name'
                                    placeholder='Property Name'
                                    required
                                    />
                                    
                                
                                <Form.Input
                                required
                                label='Poperty Location'
                                placeholder='Property Location'
                                />
                                </Form.Group>
                                
                                <Form.Group widths='equal'>
                                   
                                <Form.Input
                                required
                                placeholder='Property Price'
                                label='Property Price'
                                />
                                
                                <Form.Input
                                label='Property Images (more than 2)'
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
                                label='Property Registered ?'
                                checked='checked'
                                />
                                
                                
                                <Form.TextArea
                                label='Property Description'
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

export default AddProperty