import React from 'react'
import Title from '../_components/TopHead'
import {Grid, Segment, Icon , Divider, Item} from 'semantic-ui-react'
//import PropTypes from 'prop-types'
import {TopNavigation} from '../'

class PreviewService extends React.Component{
    constructor(){
        super()
        this.state = {
            
        }
    }
    render(){
        return(
            <>
            {this.props.location.state === undefined || this.props.location.state.is_authenticated === false ?
            this.props.history.push({pathname:'/categories/services', state:{is_authenticated:false}}):
            <>
            <TopNavigation is_authenticated={this.props.location.state.is_authenticated} />
            <Grid padded>
                <Title content='Service Details' icon='cart' subheader='some service Details'/>
                <Grid.Column computer={16} mobile={16} tablet={16}>
                    <Grid padded>
                       <Item.Group>
                           <Item>
                               <Item.Image src='../media/logicians.jpg'/>
                               <Item.Content>
                                   <Item.Header content='Item Name' />
                                   <Item.Description content='Excepteur pariatur sunt incididunt nostrud laborum irure laboris non labore eiusmod amet officia et. Sit occaecat sint excepteur ut nulla sunt deserunt. Eiusmod adipisicing cupidatat ipsum amet do nisi proident reprehenderit est et. Labore reprehenderit aliquip cillum minim velit ut laboris laboris consequat in ea ad ullamco.'/>
                                    <Item.Meta>Posted By: Some User</Item.Meta>
                               </Item.Content>
                           </Item>
                       </Item.Group>

                    </Grid>
                </Grid.Column>  
                     <Grid.Column computer={16} mobile={16} tablet={16}>
                     <Divider horizontal>Similar Services </Divider>
                        <Grid padded>
                            {[1,2,3,4,5,6].map(idx => (
                                <Grid.Column key={idx} computer={4} mobile={8} tablet={4}>
                                <Segment>
                                    <h4> Similar Service </h4>
                                </Segment>
                                </Grid.Column>
                            ))}
                        </Grid>
                     </Grid.Column>
            </Grid>
            </>}
            </>
        )
    }
}

export default PreviewService