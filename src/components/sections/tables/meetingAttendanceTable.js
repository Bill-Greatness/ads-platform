import React from 'react'
import {Table, Label, Icon} from 'semantic-ui-react'

class MeetingAttendance extends React.Component {
  render () {
    return(
      <Table celled className='account-top'>
      <Table.Header>
      <Table.Row>
        <Table.HeaderCell>ID</Table.HeaderCell>

        <Table.HeaderCell>Full Name</Table.HeaderCell>
        <Table.HeaderCell>Day 1</Table.HeaderCell>
        <Table.HeaderCell>Day 2</Table.HeaderCell>
        <Table.HeaderCell>Day 3</Table.HeaderCell>
        <Table.HeaderCell>Day 4</Table.HeaderCell>
        <Table.HeaderCell>Day 5</Table.HeaderCell>
        <Table.HeaderCell>Topic</Table.HeaderCell>
        <Table.HeaderCell>Comment(s)</Table.HeaderCell>
      </Table.Row>
      </Table.Header>
      <Table.Body>
      {[1,3,4,5,6,7,8,9].map(idx => (
        <Table.Row key={idx}>
          <Table.Cell>
            <Label ribbon color='teal'>{'LCC-0000' + idx}</Label>
          </Table.Cell>
          <Table.Cell> James Powell </Table.Cell>
          <Table.Cell> <Icon name='checkmark' color='green'/></Table.Cell>
          <Table.Cell> <Icon name='delete' color='red'/></Table.Cell>
          <Table.Cell> <Icon name='checkmark' color='green'/></Table.Cell>
          <Table.Cell> <Icon name='delete' color='red'/></Table.Cell>
          <Table.Cell> <Icon name='checkmark' color='green'/></Table.Cell>
          <Table.Cell> Some Topic Here </Table.Cell>
          <Table.Cell> Note that the development build is not optimized.</Table.Cell>
        </Table.Row>
      ))}

      </Table.Body>
      </Table>
    )
  }
}

export default MeetingAttendance;
