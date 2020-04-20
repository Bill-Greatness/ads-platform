import React from 'react'
import {Table, Label} from 'semantic-ui-react'

class PrivateDataTable extends React.Component {
  render () {
      return(
        <Table celled padded sortable className='account-top'>
        <Table.Header fullWidth>
          <Table.Row>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>Student Name</Table.HeaderCell>
            <Table.HeaderCell>Phone</Table.HeaderCell>
            <Table.HeaderCell>Location </Table.HeaderCell>
            <Table.HeaderCell>E-mail Address</Table.HeaderCell>
            <Table.HeaderCell>Course Taken</Table.HeaderCell>
            <Table.HeaderCell>Trainer</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
        {[1,2,3,4,5,6].map(idx => (
          <Table.Row key={idx}>
            <Table.Cell><Label color='teal' ribbon>{'NC3-000' + idx}</Label></Table.Cell>
            <Table.Cell>Kwami Koomson</Table.Cell>
            <Table.Cell>0509343841</Table.Cell>
            <Table.Cell>Kojokrom - New Site</Table.Cell>
            <Table.Cell>kkoomson@gmail.com</Table.Cell>
            <Table.Cell>Python Programmming</Table.Cell>
            <Table.Cell>Samuel Smith</Table.Cell>
          </Table.Row>
        ))}
        </Table.Body>
        </Table>
      )
  }
}

export default PrivateDataTable;
