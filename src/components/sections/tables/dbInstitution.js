import React from 'react'
import {Label, Table} from 'semantic-ui-react'

class InstitutionDataTable extends React.Component {
  render () {
      return(
        <Table celled padded sortable className='account-top'>
        <Table.Header fullWidth>
          <Table.Row>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>Name </Table.HeaderCell>
            <Table.HeaderCell>Phone</Table.HeaderCell>
            <Table.HeaderCell>Location </Table.HeaderCell>
            <Table.HeaderCell>E-mail Address</Table.HeaderCell>
            <Table.HeaderCell>Number Of Students </Table.HeaderCell>
            <Table.HeaderCell>Date Registered</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
        {[1,2,3,4,5,6].map(idx => (
          <Table.Row key={idx}>
            <Table.Cell><Label color='red' ribbon>{'NC3-000' + idx}</Label></Table.Cell>
            <Table.Cell>Greatness Academy</Table.Cell>
            <Table.Cell>0509343841</Table.Cell>
            <Table.Cell>Takoradi - Anaji</Table.Cell>
            <Table.Cell>greatnessacad@gmail.com</Table.Cell>
            <Table.Cell>{50 + idx}</Table.Cell>
            <Table.Cell>21st July, 2020</Table.Cell>
          </Table.Row>
        ))}
        </Table.Body>
        </Table>
      )
  }
}

export default InstitutionDataTable;
