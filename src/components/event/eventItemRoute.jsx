import React from 'react'
import EventItemWrapped from './eventItemWrapped'

export const EventItemRoute = props => (
  <EventItemWrapped eventId={props.params.id} />
)