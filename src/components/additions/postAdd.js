import React from 'react'
import {Grid, Card, List} from 'semantic-ui-react'
import Title from '../_components/TopHead'
import {Link} from 'react-router-dom'
import {TopNavigation} from '../'

class  AddPost extends React.Component {
    constructor(){
        super()
        this.state = {
            
        }
    }
    
    render(){

        return(
            <>
            <TopNavigation is_authenticated={this.props.location.state.is_authenticated} />
            <Grid padded>
                <Title content='Choose Item Type to Add to Market' icon='add' subheader='Reach Out to Customers the Easy Way' />
                <Grid.Column computer={16} mobile={16} tablet={16}>
                <Grid centered padded>
                
        
                    <Grid.Column computer={4} tablet={4} mobile={16}>
                    <Link to={{pathname:'/add-electronic-gadgets', state:{is_authenticated:this.props.location.state.is_authenticated}}}> 
                        <Card  onClick={()=>{}} raised >
                            <Card.Content>
                             <Card.Header> Electronic Gadgets</Card.Header>

                            <List divided>

                                <List.Item icon='checkmark' content='Andriod Phones & Tablets' />
                                <List.Item icon='checkmark' content='IOS Devices' />
                                <List.Item icon='checkmark' content='Television Sets' />
                                <List.Item icon='checkmark' content='PC and Laptops' />
                                <List.Item icon='checkmark' content='...' />


                            </List>
                            </Card.Content>
                        </Card>
                        </Link>
                    </Grid.Column>
                    
                    
                    <Grid.Column computer={4} tablet={4} mobile={16}>
                        <Card as='a' onClick={()=>{}} raised href='/add-property'>
                            <Card.Content>
                            <Card.Header>Cars & Real Estates</Card.Header>
                            <List divided>

                                <List.Item icon='checkmark' content='Commercial Cars' />
                                <List.Item icon='checkmark' content='Luxurious Cars' />
                                <List.Item icon='checkmark' content='House Renting' />
                                <List.Item icon='checkmark' content='Real Estates' />
                                 <List.Item icon='checkmark' content='...' />



                            </List>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    
                    
                    
                    <Grid.Column computer={4} tablet={4} mobile={8}>
                     <Link to={{pathname:'/add-fashion', state:{is_authenticated:this.props.location.state.is_authenticated}}}> 

                        <Card onClick={()=>{}} raised>
                            <Card.Content>
                            <Card.Header>Fashion and Beauty</Card.Header>
                            <List divided>

                                <List.Item icon='checkmark' content='Clothings' />
                                <List.Item icon='checkmark' content='Watches' />
                                <List.Item icon='checkmark' content='Pomades' />
                                <List.Item icon='checkmark' content='Shoes' />
                                <List.Item icon='checkmark' content='...' />


                            </List>
                            </Card.Content>
                        </Card>
                        </Link>
                    </Grid.Column>
                    
                    
                    
                    <Grid.Column computer={4} tablet={4} mobile={8}>
                    <Link to={{pathname:'/add-pets-or-animals', state:{is_authenticated:this.props.location.state.is_authenticated}}}> 

                        <Card  onClick={()=>{}} raised>
                            <Card.Content>
                            <Card.Header>Animals & Pets</Card.Header>
                            <List divided>

                                <List.Item icon='checkmark' content='Dogs' />
                                <List.Item icon='checkmark' content='Local Breeds' />
                                <List.Item icon='checkmark' content='Exotic Breeds' />
                                <List.Item icon='checkmark' content='Pets' />
                                <List.Item icon='checkmark' content='...' />


                            </List>
                            </Card.Content>
                        </Card>
                        </Link>
                    </Grid.Column>
                    
                    
                    <Grid.Column computer={4} tablet={4} mobile={8}>
                     <Link to={{pathname:'/add-books-or-journals', state:{is_authenticated:this.props.location.state.is_authenticated}}}> 
                         <Card as='a' onClick={()=>{}} raised>
                            <Card.Content>
                            <Card.Header>Books</Card.Header>
                            <List divided>

                                <List.Item icon='checkmark' content='Sci-Fi' />
                                <List.Item icon='checkmark' content='Drama' />
                                <List.Item icon='checkmark' content='Religion' />
                                <List.Item icon='checkmark' content='Romance' />
                                <List.Item icon='checkmark' content='...' />


                            </List>
                            </Card.Content>
                        </Card>
                        </Link>
                    </Grid.Column>
                    
                    
                    
                    <Grid.Column computer={4} tablet={4} mobile={8}>
                    <Link to={{pathname:'/add-service', state:{is_authenticated:this.props.location.state.is_authenticated}}}>
                        <Card  onClick={()=>{}} raised>
                            <Card.Content>
                            <Card.Header>Services</Card.Header>
                            <List divided>

                                <List.Item icon='checkmark' content='Door to Door' />
                                <List.Item icon='checkmark' content='Training' />
                                <List.Item icon='checkmark' content='Cooking' />
                                <List.Item icon='checkmark' content='Cleaning' />
                                <List.Item icon='checkmark' content='...' />


                            </List>
                            </Card.Content>
                        </Card>
                        </Link>
                    </Grid.Column>
                    
                    
                    <Grid.Column computer={4} tablet={4} mobile={8}>
                     <Link to={{pathname:'/add-vacancy', state:{is_authenticated:this.props.location.state.is_authenticated}}}>

                        <Card  onClick={()=>{}} raised>
                            <Card.Content>
                            <Card.Header>Job Vacancies</Card.Header>
                            <List divided>

                                <List.Item icon='checkmark' content='Web Development' />
                                <List.Item icon='checkmark' content='Graphic Designs' />
                                <List.Item icon='checkmark' content='Freelancing' />
                                <List.Item icon='checkmark' content='Computer Graphics' />
                                <List.Item icon='checkmark' content='...' />


                            </List>
                            </Card.Content>
                          
                        </Card>
                          </Link>
                    </Grid.Column>
                    
                    
                    
                    <Grid.Column computer={4} tablet={4} mobile={8}>
                         <Card as='a' onClick={()=>{}} raised>
                            <Card.Content>
                            <Card.Header>Events</Card.Header>
                            <List divided>

                                <List.Item icon='checkmark' content='Speaking Events' />
                                <List.Item icon='checkmark' content='Religious Events' />
                                <List.Item icon='checkmark' content='social Events' />
                                <List.Item icon='checkmark' content='Movie Shows' />
                                <List.Item icon='checkmark' content='...' />


                            </List>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                   
                   
                    </Grid>
                </Grid.Column>
            </Grid>
            </>
        )
    }
}

export default AddPost