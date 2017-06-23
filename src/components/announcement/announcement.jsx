import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardHeader, CardText } from 'material-ui'

export const Announcement = props => (
  <Card>
    <CardHeader title={props.announcement.Title}
                subtitle={`Sent by ${props.announcement.Author}`}
                actAsExpander={true}
                showExpandableButton={true}/>
    <CardText expandable={true}>
      {props.announcement.Content}
    </CardText>
  </Card>
)

Announcement.propTypes = {
  announcement: PropTypes.shape({
    Title: PropTypes.string,
    Content: PropTypes.string,
    Author: PropTypes.string,
  })
}