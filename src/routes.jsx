import { Route } from 'react-router'
import * as React from 'react'

import Overview from './components/overview'
import DealerList from './components/dealers/dealerList'

export default(
  <Route path="/" component={Overview}>
    <Route path="dealer" components={DealerList} />
  </Route>
)