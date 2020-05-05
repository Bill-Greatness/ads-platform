import React from 'react'
import {Grid, Form, Button} from 'semantic-ui-react'
import {TopNavigation } from '../'
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
        console.log(this.state)
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
                                
                                <Form.Input
                                required
                                onChange={(e) => this.setState({animal_image:e.target.files[0]})}
                                type='file'
                                label='Animal or Pet Images'
                                />
                                
                                <Form.Input
                                required
                                onChange={(e) => this.setState({number_available:e.target.value})}
                                type='number'
                                label='Number Available'
                                />
                                <Form.TextArea
                                onChange={(e) => this.setState({description:e.target.value})}
                                    required
                                    label='Description'
                                    />
                                    
                                <Button circular > Advertise </Button>
                            </Form>
                        </Grid.Column>
                    </Grid>
                </Grid.Column>
            </Grid>
            </> }
            </>
        )
    }
}

export default AddPet