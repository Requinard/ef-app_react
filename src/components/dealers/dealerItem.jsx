import React from 'react'
import { Card, CardActions, CardHeader, CardMedia, CardText, FlatButton } from 'material-ui'
import PropTypes from 'prop-types'
import {hashHistory} from 'react-router'

import ImageContainer from '../image/imageContainer'

export const DealerItem = props => (
  <Card initiallyExpanded={props.expanded !== null ? props.expanded : false}>
    <CardHeader
      actAsExpander={true}
      showExpandableButton={true}
      title={props.dealer.DisplayName || props.dealer.AttendeeNickname}
      subtitle={props.dealer.ShortDescription}/>
    <CardActions>
      <FlatButton label="Permalink" onTouchTap={() => hashHistory.push(`/dealer/${props.dealer.Id}`)}/>
      <FlatButton label="Open in app" onTouchTap={() => window.open(`eurofurence://dealer/${props.dealer.Id}`)}/>
    </CardActions>
    <CardMedia expandable={true}>
      <ImageContainer imageId={props.dealer.ArtPreviewImageId} />
    </CardMedia>
    <CardText expandable={true}>
      {props.dealer.AboutTheArtistText}

      {props.dealer.AboutTheArtText}
    </CardText>
  </Card>
)

DealerItem.propTypes = {
  dealer: PropTypes.shape({
    DisplayName: PropTypes.string,
    ShortDescription: PropTypes.string,
    AboutTheArtistText: PropTypes.string,
    AboutTheArtText: PropTypes.string,
    AttendeeNickname: PropTypes.string,
    ArtPreviewImageId: PropTypes.string
  }),
  expanded: PropTypes.bool,
}