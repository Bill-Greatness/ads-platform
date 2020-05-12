import React from 'react'
import {Grid, Form, Button} from 'semantic-ui-react'
import Tips from '../_components/tiPs'
import {addNewPet} from '../../queries/queries'
import {graphql} from 'react-apollo'
import {TopNavigation } from '..'
import Title from '../_components/TopHead'

class  AddPet extends React.Component {
    constructor(){
        super()
        this.state = {
        animal_name:'',
        number_available:'',
        price:'',
        description:''
        }
    }
    postPet = event => {
        event.preventDefault()
        try {
            this.props.addNewPet({
                variables:this.state
            })
        } catch (err) {
            console.log(err)
        }
        
    }
    render(){
        return(
            <>
            {this.props.location.state === undefined || this.props.location.state.is_authenticated === false ?
             this.props.history.push({pathname:'/sign-in',state:{is_authenticated:false}}) :
             <>
             <TopNavigation is_authenticated={this.props.location.state.is_authenticated }/> 
            <Grid padded>
                <Title icon='user' content='Send Pet to Market' subheader='Some Subheader'/>
                <Grid.Column computer={16} tablet={16} mobile={16}>
                    <Grid padded centered>
                        <Grid.Column computer={10} mobile={16} tablet={10} >
                            <Form onSubmit={this.postPet}>
                                <Form.Group widths='equal'>
                                <Form.Input
                                required
                                onChange={(e) => this.setState({animal_name:e.target.value})}
                                placeholder='Animal or Pet name'
                                label='Animal Name'
                                />
                                
                                <Form.Input
                                required
                                onChange={(e) => this.setState({price:e.target.value})}
                                placeholder='0.00$'
                                label='Price'
                                />

                                </Form.Group>
                                
                                <Form.Group>
                                <Form.Input
                                required
                                onChange={(e) => this.setState({animal_image:e.target.files[0]})}
                                type='file'
                                label='Animal or Pet Images'
                                />
                                
                                <Form.Input
                                required
                                onChange={(e) => this.setState({number_available:parseInt(e.target.value)})}
                                type='number'
                                label='Number Available'
                                />
                                </Form.Group>
                                <Form.TextArea
                                onChange={(e) => this.setState({description:e.target.value})}
                                    required
                                    label='Description'
                                    />
                                    
                                <Button circular > Advertise </Button>
                            </Form>
                        </Grid.Column>
                  
                    <Grid.Column computer={4} tablet={4} only='computer and tablet'>
                        <Tips />
                    </Grid.Column>
                    </Grid>
                </Grid.Column>
            </Grid>
            </> }
            </>
        )
    }
}

export default graphql(addNewPet, {name:'addNewPet'})(AddPet)