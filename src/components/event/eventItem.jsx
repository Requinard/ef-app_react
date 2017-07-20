import React from 'react'
import { Card, CardActions, CardHeader, CardMedia, CardText, FlatButton, RaisedButton } from 'material-ui'
import ImageContainer from '../image/imageContainer'
import PropTypes from 'prop-types'
import {hashHistory} from 'react-router'
import Timestamp from 'react-timestamp'

export const EventItem = props => (
  <Card>
    <CardHeader title={`${props.event.Title}: ${props.event.Subtitle || ''}`}
                subtitle={<p><Timestamp time={props.event.StartDateTimeUtc} format="time"/> to <Timestamp time={props.event.EndDateTimeUtc} format="time"/></p>}
                actAsExpander={true}
                showExpandableButton={true}/>
    <CardActions>
      <FlatButton label="Permalink" onTouchTap={() => hashHistory.push(`/event/${props.event.Id}`)}/>
      <FlatButton label="Open in app" onTouchTap={() => window.open(`eurofurence://event/${props.event.Id}`)}/>
    </CardActions>
    <CardMedia expandable={true}>
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