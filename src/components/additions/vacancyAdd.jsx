import React from 'react'
import {Grid, Form, Button} from 'semantic-ui-react'
import {graphql} from 'react-apollo'
import {addNewVacancy} from '../../queries/queries'
import Title from '../_components/TopHead'
import {TopNavigation} from '..'


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
        
        postJob = event => {
                event.preventDefault()
                console.log(this.state)
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
                            <Form onSubmit={this.postJob}>
                                <Form.Input
                                onChange={(e) => this.setState({vacn_title:e.target.value})}
                                required
                                label='Vacancy Title'
                                />
                                <Form.Input
                                    required
                                    onChange={(e) => this.setState({vacn_location:e.target.value})}
                                    label='Location'
                                    />
                                    
                                    <Form.Input
                                    onChange={(e) => this.setState({vacn_duration:e.target.value})}
                                    label='Duration'
                                    required
                                    />
                                    
                                <Form.Input
                                label='Salary'
                                onChange={(e) => this.setState({vacn_salary:e.target.value})}
                                required
                                />
                                <Form.TextArea
                                    required
                                    onChange={(e) => this.setState({vacn_description:e.target.value})}
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

export default graphql(addNewVacancy, {name:'addNewVacancy'}) (AddVacancy)