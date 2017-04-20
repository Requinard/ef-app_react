import React from 'react'
import { Card, CardHeader, CardMedia, CardText } from 'material-ui'
import PropTypes from 'prop-types'

import ImageContainer from '../image/imageContainer'

export const DealerItem = props => (
  <Card>
    <CardHeader
      actAsExpander={true}
      showExpandableButton={true}
      title={props.dealer.DisplayName || props.dealer.AttendeeNickname}
      subtitle={props.dealer.ShortDescription}/>
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
  })
}