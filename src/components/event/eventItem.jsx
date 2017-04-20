import React from 'react'
import { Card, CardHeader, CardMedia, CardText } from 'material-ui'
import ImageContainer from '../image/imageContainer'
import PropTypes from 'prop-types'

export const EventItem = props => (
  <Card>
    <CardHeader title={`${props.event.Title}: ${props.event.Subtitle || ''}`}
                subtitle={`${props.event.StartTime} - ${props.event.EndTime}`}
                actAsExpander={true}
                showExpandableButton={true}/>
    <CardMedia>
      <ImageContainer imageId={props.event.ImageId}/>
    </CardMedia>
    <CardText expandable={true}>
      {props.event.Description}
    </CardText>
  </Card>
)

EventItem.propTypes = {
  event: PropTypes.shape({
    Description: PropTypes.string,
    StartTime: PropTypes.string,
    EndTime: PropTypes.string,
    Title: PropTypes.string,
    SubTitle: PropTypes.string,
    ImageId: PropTypes.string
  })
}