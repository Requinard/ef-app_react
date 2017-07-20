import React from 'react'
import InfoItemWrapped from './infoItemWrapped'

export const InfoItemRoute = props => (
  <div>{props.params.id === null ? <p>No item was supplied</p> : <InfoItemWrapped infoId={props.params.id}/>}</div>
)