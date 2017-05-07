import React from 'react'
import { Card, CardHeader, CardText } from 'material-ui'
import Markdown from 'react-remarkable'

export const InfoItem = props => (
  <Card>
    <CardHeader title={props.info.Title}
                actAsExpander={true}
                showExpandableButton={true}/>
    <CardText expandable={true}>
      <Markdown>
        {props.info.Text}
      </Markdown>
    </CardText>
  </Card>
)