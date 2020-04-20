import React from 'react'
import {Table, Label} from 'semantic-ui-react'

class AssessmentTable extends React.Component {
  render () {
    return(
      <Table celled className='account-top'>
      <Table.Header>
      <Table.Row>
        <Table.HeaderCell>ID</Table.HeaderCell>
        <Table.HeaderCell>Full Name</Table.HeaderCell>
        <Table.HeaderCell>Postion</Table.HeaderCell>
        <Table.HeaderCell>School Assigned</Table.HeaderCell>
        <Table.HeaderCell>Number Of Clients</Table.HeaderCell>
        <Table.HeaderCell>Active</Table.HeaderCell>
      </Table.Row>
      </Table.Header>
      <Table.Body>
      {[1,3,4,5,6,7,8,9].map(idx => (
        <Table.Row key={idx}>
          <Table.Cell>
            <Label ribbon color='blue'>54355</Label>
          </Table.Cell>
          <Table.Cell> James Powell </Table.Cell>
          <Table.Cell> Intern </Table.Cell>
          <Table.Cell> Jaycris Educational Complex </Table.Cell>
          <Table.Cell> 34 </Table.Cell>
          <Table.Cell> Yes </Table.Cell>
        </Table.Row>
      ))}

      </Table.Body>
      </Table>
    )
  }
}

export default AssessmentTable;
