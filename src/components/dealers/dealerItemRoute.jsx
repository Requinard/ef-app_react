import React from 'react'

import DealerItemWrapped from './dealerItemWrapped'
import { CircularProgress } from 'material-ui'

export const DealerItemRoute = props => (
  <div>
    {props.params.id === undefined ? <CircularProgress /> : <DealerItemWrapped dealerId={props.params.id}/> }
  </div>
)