import React from 'react'
import {Grid, Form, Button} from 'semantic-ui-react'
import Title from '../_components/TopHead'
class    AddFashion extends React.Component {
    render(){
        const FASHION_CATEGORIES = [
            {text:'Clothings', value:'clothings', key:1},
            {text:'Watches', value:'watches',key:2},
            {text:'Shoes', value:'shoes', key:3}
        ]
        return(
            <Grid padded>
                <Title icon='user' content='Post Fashion Item on Market' subheader='Change a customers outfit' />
                <Grid.Column computer={16} mobile={16} tablet={16}>
                    <Grid centered>
                    <Grid.Column computer={10} tablet={12} mobile={16}>
                        <Form size='small'>
                            <Form.Group widths='equal'>
                                <Form.Input
                                required
                                label='Item Name'
                                placeholder='Item name'
                                />
                                <Form.Input
                                required
                                label='Item Price'
                                placeholder='0.00$'
                                />
                            </Form.Group>
                            
                            <Form.Group widths='equal'>
                                <Form.Input
                                required
                                type='number'
                                min='2'
                                label='Number in Stock'
                                placeholder='Item name'
                                />
                                <Form.Input
                                required
                                label='Available Colours'
                                placeholder='red, blue, white'
                                />
                                
                                
                            </Form.Group>
                            
                            <Form.Group widths='equal'>
                                <Form.Input
                                required
                                label='Gender Target'
                                placeholder='Male, Female || Both'
                                />
                                <Form.Input
                                required
                                label='Size Range'
                                placeholder='Medium, Large, Small'
                                />
                            </Form.Group>
                            
                            <Form.Group widths='equal'>
                                <Form.Input
                                required
                                label='Item Tag'
                                placeholder='Item Tag'
                                />
                                <Form.Input
                                type='file'
                                required
                                label='Item Images (more than 2)'
                                accept='image/*'
                                multiple={true}
                                />
                                <Form.Select
                                required
                                label='Item Category'
                                options={FASHION_CATEGORIES}
                                placeholder='Select Categories'
                                />
                                
                                
                            </Form.Group>
                            
                            <Form.TextArea
                                label='Other Details'
                                required
                                />
                                
                                <Button type='submit' circular> Advertise </Button>
                        </Form>
                        </Grid.Column>
                    </Grid>
                </Grid.Column>
            </Grid>
        )
    }
}

export default AddFashion