import React from 'react'
import {Table, Header, Image} from 'semantic-ui-react'
import placeImage from '../../../media/place-image.jpg'

class ProgramStatistics extends React.Component {
  render () {
    return(
      <Table unstackable style={{color:'#0091D5'}} className='account-top' inverted>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name </Table.HeaderCell>
            <Table.HeaderCell> Institutions </Table.HeaderCell>
            <Table.HeaderCell>Students </Table.HeaderCell>
            <Table.HeaderCell>Supervisor </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Coding Kids</Table.Cell>
            <Table.Cell>45</Table.Cell>
            <Table.Cell>350</Table.Cell>
            <Table.Cell>
                <Header as='h5' image inverted>
                <Image src={placeImage} circular size='mini' />
                <Header.Content as='p' >
                  Augustine Smith
                </Header.Content>
              </Header>
          </Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>Logic Readers</Table.Cell>
            <Table.Cell>15</Table.Cell>
            <Table.Cell>350</Table.Cell>
            <Table.Cell>
                <Header as='h5' image inverted>
                <Image src={placeImage} circular size='mini' />
                <Header.Content as='p'>
                  Rosa Nyame
                </Header.Content>
              </Header>
          </Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>Logic Scientists</Table.Cell>
            <Table.Cell>5</Table.Cell>
            <Table.Cell>350</Table.Cell>
            <Table.Cell>
                <Header as='h5' image inverted>
                <Image src={placeImage} circular size='mini' />
                <Header.Content as='p'>
                  Bill Greatness
                </Header.Content>
              </Header>
          </Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>Robotic Kids</Table.Cell>
            <Table.Cell>5</Table.Cell>
            <Table.Cell>350</Table.Cell>
            <Table.Cell>
                <Header as='h5' image inverted>
                <Image src={placeImage} circular size='mini' />
                <Header.Content as='p'>
                  Peniel Nyinaku
                </Header.Content>
              </Header>
          </Table.Cell>
          </Table.Row>

        </Table.Body>
      </Table>

    )
  }
}

export default ProgramStatistics;
