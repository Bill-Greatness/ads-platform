import React from 'react'
import {Grid, Form, Button} from 'semantic-ui-react'
import Title from '../_components/TopHead'
import {TopNavigation} from '../'


class  AddVacancy extends React.Component{
        constructor(){
            super()
            this.state={
                vacn_title:'',
                vacn_location:'',
                vacn_tag:'',
                vacn_duration:'',
                vacn_price:'',
                vacn_description:''
            }
        }
        
        render(){
            return(
                <>
                <TopNavigation is_authenticated={this.props.location.state.is_authenticated}/>
                <Grid padded>
                <Title content='Post Job Vacancy' subheader='Sum Sub Header' icon='user' />
                
                <Grid.Column computer={16} mobile={16} tablet={16}>
                    <Grid centered>
                        <Grid.Column computer={12} mobile={14} tablet={12}>
                            <Form>
                                <Form.Input
                                required
                                label='Vacancy Title'
                                />
                                <Form.Input
                                    required
                                    label='Location'
                                    />
                                    
                                    <Form.Input
                                    label='Duration'
                                    required
                                    />
                                    
                                <Form.Input
                                label='Salary'
                                required
                                />
                                <Form.TextArea
                                    required
                                    label='Vacancy Description'
                                    />
                                    
                                    <Button circular>Post Vacancy </Button>
                            </Form>
                        </Grid.Column>
                    </Grid>
                </Grid.Column>
                </Grid>
                    
                
                </>
            )
        }
}

export default AddVacancy