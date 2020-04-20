import React from 'react'
import {Table} from 'semantic-ui-react'

class LessonTimes extends React.Component {
  render () {
    return(
      <Table unstackable style={{color:'#0091D5'}} singleLine className='account-top' inverted>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Institution </Table.HeaderCell>
          <Table.HeaderCell> Program </Table.HeaderCell>
          <Table.HeaderCell>Location</Table.HeaderCell>
          <Table.HeaderCell>Time</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Greater Heights</Table.Cell>
          <Table.Cell>Logic Readers</Table.Cell>
          <Table.Cell>Fijai</Table.Cell>
          <Table.Cell>12:00 - 16:00</Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.Cell>Asare Oppong</Table.Cell>
          <Table.Cell>Logic Kids</Table.Cell>
          <Table.Cell>Anaji</Table.Cell>
          <Table.Cell> 12:00 - 16:00</Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.Cell>Jaycris Edu. Centre</Table.Cell>
          <Table.Cell>Robotic Kids</Table.Cell>
          <Table.Cell>Takoradi</Table.Cell>
          <Table.Cell> 12:00 - 16:00</Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.Cell>Greater Heights</Table.Cell>
          <Table.Cell>Logic Readers</Table.Cell>
          <Table.Cell>Fijai</Table.Cell>
          <Table.Cell> 12:00 - 16:00</Table.Cell>
        </Table.Row>

      </Table.Body>
      </Table>
    )
  }
}

export default LessonTimes;
