import React from 'react'
import { Card, CardHeader, CardMedia, CardText } from 'material-ui'
import ImageContainer from '../image/imageContainer'
import PropTypes from 'prop-types'
import Timestamp from 'react-timestamp'

export const EventItem = props => (
  <Card>
    <CardHeader title={`${props.event.Title}: ${props.event.Subtitle || ''}`}
                subtitle={<p><Timestamp time={props.event.StartDateTimeUtc} format="time"/> to <Timestamp time={props.event.EndDateTimeUtc} format="time"/></p>}
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
    StartDateTimeUtc: PropTypes.string,
    EndDateTimeUtc: PropTypes.string,
    Title: PropTypes.string,
    SubTitle: PropTypes.string,
    ImageId: PropTypes.string
  })
}