import React from 'react'
import { Card, CardHeader, CardText } from 'material-ui'

export const InfoItem = props => (
  <Card>
    <CardHeader title={props.info.Title}
                actAsExpander={true}
                showExpandableButton={true}/>
    <CardText expandable={true}>
      {props.info.Text}
    </CardText>
  </Card>
)