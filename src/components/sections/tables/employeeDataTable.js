import React from 'react'
import {Table, Label} from 'semantic-ui-react'

class EmployeeDataTable extends React.Component {
  render () {
      return(
        <Table celled padded sortable fixed singleLine className='account-top'>
        <Table.Header fullWidth>
          <Table.Row>
            <Table.HeaderCell>Employee ID</Table.HeaderCell>
            <Table.HeaderCell>Full Name</Table.HeaderCell>
            <Table.HeaderCell>Date Of Birth</Table.HeaderCell>
            <Table.HeaderCell>Marital Status </Table.HeaderCell>
            <Table.HeaderCell>Phone</Table.HeaderCell>
            <Table.HeaderCell>Location </Table.HeaderCell>
            <Table.HeaderCell>E-mail</Table.HeaderCell>
            <Table.HeaderCell>Department</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
        {[1,2,3,4,5,6].map(idx => (
          <Table.Row key={idx}>
            <Table.Cell><Label color='teal' ribbon>{'NC3-000' + idx}</Label></Table.Cell>
            <Table.Cell>Bill Clinton</Table.Cell>
            <Table.Cell>03/11/1998</Table.Cell>
            <Table.Cell>Single</Table.Cell>
            <Table.Cell>0509343841</Table.Cell>
            <Table.Cell>Takoradi - Anaji</Table.Cell>
            <Table.Cell>greatnessacad@gmail.com</Table.Cell>
            <Table.Cell>Training</Table.Cell>
          </Table.Row>
        ))}
        </Table.Body>

        </Table>
      )
  }
}

export default EmployeeDataTable;
