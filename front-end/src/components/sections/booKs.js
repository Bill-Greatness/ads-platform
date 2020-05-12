import React from 'react'
import {Grid, Reveal, Image, Container, Card} from 'semantic-ui-react'
import {graphql} from 'react-apollo'
import {allBooks} from '../../queries/queries'
import Title from '../_components/TopHead'
import placeholder from '../../media/book-placeholder.jpeg'
import {TopNavigation} from '../'


class Books extends React.Component {
  constructor(){
    super()
    this.state = {
      current_book:''
    }
  }
  render () {
      return(
        <>
        {this.props.location.state === undefined  || this.props.location.state.is_authenticated === false ?
        this.props.history.push({pathname:'/sign-in', state:{is_authenticated:false}}) :
      <>
                  <TopNavigation is_authenticated={this.props.location.state.is_authenticated}/>

          <Grid padded>        
        
              <Title icon='book' content='Explore By Reading' subheader='Travel Through Peoples Experiences'/>
              <Grid padded>
                <Grid.Column computer={13} mobile={16}>
                      <Grid>
                          {[1,2,3,4].map(bk =>(
                            <Grid.Column key={bk} computer={4} tablet={8} mobile={8}>
                               <Container >
                               <Reveal animated='move right'>
                               <Reveal.Content visible>
                                 <Image src={placeholder} size='small' />
                               </Reveal.Content>
                               <Reveal.Content hidden>
                                 <Card as='a' onClick={(e) => this.setState({current_book:bk})} style={{width:'120', minHeight:150}}>
                                    <h3>You are not alone </h3>
                                 </Card>
                               </Reveal.Content>
                             </Reveal>
                               </Container>
                            </Grid.Column>
                          ))}
                      </Grid>
                </Grid.Column>

                <Grid.Column computer={3}>
                  <h3>{this.state.current_book !== '' ? "Book: "  + this.state.current_book : "No Book Selected"} </h3>
                </Grid.Column>
              </Grid>
          </Grid> 
          </>}
          </>
      )
  }
}

export default graphql(allBooks, {name:'allBooks'})(Books);
