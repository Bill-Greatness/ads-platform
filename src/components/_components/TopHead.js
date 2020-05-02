import React from 'react';
import {Grid, Header} from 'semantic-ui-react'
import PropTypes from 'prop-types'

export default function  Title(props) {
  return(
      <Grid.Column computer={16} mobile={16} tablet={16}>
      <br/>
        <Header icon={props.icon} content={props.content} subheader={props.subheader} />
      </Grid.Column>
  )
}

Title.propTypes = {
  icon: PropTypes.string.isRequired,
  content:PropTypes.string.isRequired,
  subheader:PropTypes.string.isRequired,
}
