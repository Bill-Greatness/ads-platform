import React from 'react'
import {Table, Header, Image, Rating, Icon} from 'semantic-ui-react'
import placeImage from '../../../media/place-image.jpg'

class BoardRating extends React.Component {
  render () {
      return(
        <Table unstackable style={{color:'#0091D5'}} className='account-top' inverted>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Employee</Table.HeaderCell>
              <Table.HeaderCell>Stars</Table.HeaderCell>
              <Table.HeaderCell>Active</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
            <Table.Cell>
                <Header as='h5' inverted image>
                <Image src={placeImage} circular size='mini' />
                <Header.Content as='p' >
                  Augustine Smith
                </Header.Content>
              </Header>
          </Table.Cell>
              <Table.Cell> <Rating icon='star' defaultRating={3} maxRating={5}/> </Table.Cell>
              <Table.Cell> <Icon name='checkmark' color='green'/> </Table.Cell>
            </Table.Row>

            <Table.Row>
            <Table.Cell>
                <Header as='h5' inverted image>
                <Image src={placeImage} circular size='mini' />
                <Header.Content as='p' >
                  Bill Greatness
                </Header.Content>
              </Header>
          </Table.Cell>
              <Table.Cell> <Rating icon='star' defaultRating={3} maxRating={5}/> </Table.Cell>
              <Table.Cell> <Icon name='delete' color='red'/> </Table.Cell>
            </Table.Row>

            <Table.Row>
            <Table.Cell>
                <Header as='h5' inverted image>
                <Image src={placeImage} circular size='mini' />
                <Header.Content as='p' >
                  Simon Adasi
                </Header.Content>
              </Header>
          </Table.Cell>
              <Table.Cell> <Rating icon='star' defaultRating={3} maxRating={5}/> </Table.Cell>
              <Table.Cell> <Icon name='delete' color='red'/> </Table.Cell>
            </Table.Row>


            <Table.Row>
            <Table.Cell>
                <Header as='h5' inverted image>
                <Image src={placeImage} circular size='mini' />
                <Header.Content as='p' >
                  Tracy Affram
                </Header.Content>
              </Header>
          </Table.Cell>
              <Table.Cell> <Rating icon='star' defaultRating={3} maxRating={5}/> </Table.Cell>
              <Table.Cell> <Icon name='checkmark' color='green'/> </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      )
  }
}

export default BoardRating;
