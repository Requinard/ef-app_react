import React from 'react'
import { Card, CardActions, CardHeader, CardText, FlatButton } from 'material-ui'
import PropTypes from 'prop-types'
import { hashHistory } from 'react-router'
import Markdown from 'react-remarkable'

export const InfoItem = props => (
  <Card initiallyExpanded={props.expanded !== undefined ? props.expanded : false}>
    <CardHeader title={props.info.Title}
                actAsExpander={true}
                showExpandableButton={true}/>
    <CardActions>
      <FlatButton label="Permalink" onTouchTap={() => hashHistory.push(`info/${props.info.Id}`)}/>
      <FlatButton label="Open in app" onTouchTap={() => window.open(`eurofurence://info/${props.info.Id}`)}/>
    </CardActions>
    <CardText expandable={true}>
      <Markdown>
        {props.info.Text}
      </Markdown>
    </CardText>
  </Card>
)

InfoItem.propTypes = {
  info: PropTypes.shape({
    Title: PropTypes.string,
    Text: PropTypes.string
  }),
  expanded: PropTypes.bool
}