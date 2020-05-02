import React from 'react'
import PropTypes from 'prop-types'
import {Grid, Form, Button} from 'semantic-ui-react'
import Title from '../_components/TopHead'
import {TopNavigation} from '../'
class AddBook extends React.Component{
        constructor(){
            super()
            this.state = {
                book_title:'',
                book_price:'',
                book_genre:'',
                date_publish:'',
                name_of_author:'',
                number_available:1,
                book_description:''
            }
        }
    render(){
        const GENRES = [{
            value:'romance', text:'Romance'
        }, {value:'history', text:'History'},
        {value:'sci-fi', text:'Sci-Fi'},
        {value:'religion', text:'Religion'},
        {value:'mystery', text:'Mystery'},
        {value:'drama', text:'Drama'}]
        return(
            <>
            <TopNavigation is_authenticated={this.props.location.state.is_authenticated}/>
            <Grid padded>
            <Title content='Publish Book on Market' subheader='Explore by Reading' icon='book' />
            
            <Grid.Column computer={12} tablet={12} mobile={16}>
                    <Form>
                        <Form.Input
                        onChange={(e) => this.setState({book_title:e.target.value})}
                        required
                        label='Book Title'
                        placeholder='Book Title'
                        />
                        
                        <Form.Input
                        required
                        onChange={(e) => this.setState({book_price:e.target.value})}
                        placeholder='Price'
                        label='Price'
                        />
                        
                        <Form.Input
                         onChange={(e) => this.setState({date_publish:e.target.value})}
                         label='Date Publish'
                         type='date'
                         />
                         
                         <Form.Input
                         label='Name of Author'
                         onChange={(e) => this.setState({name_of_author:e.target.value})}
                         required
                         placeholder='Author'
                         />
                         
                         <Form.Input
                         type='number'
                         onChange={(e) => this.setState({number_available:e.target.value})}
                         min={1}
                         required
                         label='Number Available'
                         />
                         
                         <Form.Select
                         label='Genre'
                         required
                        onChange={(e) => this.setState({book_genre:e.target.value})}
                         placeholder='Select Genre'
                         options={GENRES}
                         />
                         
                         <Form.TextArea
                         required
                          onChange={(e) => this.setState({book_description:e.target.value})}
                          label='Description'
                          placeholder='Description'
                          />
                          
                          <Button type='submit' circular> Advertise</Button>
                         
                    </Form>
            </Grid.Column>
            
  
            </Grid>
            </>
        )
    }
}

export default AddBook