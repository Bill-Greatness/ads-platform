import React from 'react'
import {Grid, Form, Button} from 'semantic-ui-react'
import Title from '../_components/TopHead'
class    AddFashion extends React.Component {
    constructor(){
        super()
        this.state = {
        item_name:'',
        item_price:'',
        number_in_stock: 0,
        gender_target:'',
        size_range:'',
        available_colors:'',
        item_category:'',
        description:'',
        item_tag:'',
        }
    }
    postFashion = event =>{
        event.preventDefault()
        console.log(this.state)
    }
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
                        <Form onSubmit={this.postFashion}>
                            <Form.Group widths='equal'>
                                <Form.Input
                                required
                                onChange={(e) => this.setState({item_name:e.target.value})}
                                label='Item Name'
                                placeholder='Item name'
                                />
                                <Form.Input
                                required
                                onChange={(e) => this.setState({item_price:e.target.value})}
                                label='Item Price'
                                placeholder='0.00$'
                                />
                            </Form.Group>
                            
                            <Form.Group widths='equal'>
                                <Form.Input
                                required
                                type='number'
                                onChange={(e) => this.setState({number_in_stock:e.target.value})}
                                min='2'
                                label='Number in Stock'
                                placeholder='Item name'
                                />
                                <Form.Input
                                required
                                onChange={(e) => this.setState({available_colors:e.target.value})}
                                label='Available Colours'
                                placeholder='red, blue, white'
                                />
                                
                                
                            </Form.Group>
                            
                            <Form.Group widths='equal'>
                                <Form.Input
                                required
                                onChange={(e) => this.setState({gender_target:e.target.value})}
                                label='Gender Target'
                                placeholder='Male, Female || Both'
                                />
                                <Form.Input
                                required
                                label='Size Range'
                                onChange={(e) => this.setState({size_range:e.target.value})}
                                placeholder='Medium, Large, Small'
                                />
                            </Form.Group>
                            
                            <Form.Group widths='equal'>
                                <Form.Input
                                required
                                onChange={(e) => this.setState({item_tag:e.target.value})}
                                label='Item Tag'
                                placeholder='Item Tag'
                                />
                                <Form.Input
                                type='file'
                                required
                                label='Item Images (more than 2)'
                                onChange={(e) => this.setState({item_image:e.target.files[0]})}
                                accept='image/*'
                                multiple={true}
                                />
                                <Form.Select
                                required
                                label='Item Category'
                                onChange={(e, node) => this.setState({item_category:node.value})}
                                options={FASHION_CATEGORIES}
                                placeholder='Select Categories'
                                />
                                
                                
                            </Form.Group>
                            
                            <Form.TextArea
                        
                                label='Other Details'
                                onChange={(e) => this.setState({description:e.target.value})}
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