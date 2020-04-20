import React from 'react'
import InstitutionDataTable from './tables/dbInstitution'
import PrivateDataTable from './tables/privateDataTables'
import EmployeeDataTable from './tables/employeeDataTable'
import {Segment, Grid, Divider, Icon} from 'semantic-ui-react'

class DataBase extends React.Component {

  render () {
    return (

      <Segment raised style={{width:'inherit', textAlign:'left'}} className='account-background'>
      <Grid>

        <Grid.Column computer={16}>
        <Divider horizontal inverted children={<> <Icon name='circle outline'/> Institutions <Icon name='circle outline'/></>}/>
        <Segment raised className='account-top'>
            <InstitutionDataTable />
          </Segment>
          </Grid.Column>

          <Grid.Column computer={16}>

            <Divider horizontal  children={<> <Icon name='circle outline'/> Private Training <Icon name='circle outline'/></>}/>

            <Segment raised className='account-top'>
                <PrivateDataTable />
            </Segment>
          </Grid.Column>

          <Grid.Column computer={16}>
          <Divider horizontal inverted children={<> <Icon name='circle outline'/> Employees <Icon name='circle outline'/></>}/>

            <Segment raised className='account-top'>
                <EmployeeDataTable />
            </Segment>
          </Grid.Column>

      </Grid>
      </Segment>


    );
  }
}

export default DataBase;
