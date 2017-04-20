import { Route, IndexRoute } from 'react-router'
import * as React from 'react'

import Overview from './components/overview'
import {Home} from './components/home'
import DealerList from './components/dealers/dealerList'
import InfoList from './components/info/infoList'
import EventList from './components/event/eventList'

export default(
  <Route path="/" component={Overview}>
    <IndexRoute component={Home}/>
    <Route path="dealer" components={DealerList} />
    <Route path="info" components={InfoList} />
    <Route path="event" components={EventList} />
  </Route>
)