import { Route, IndexRoute } from 'react-router'
import * as React from 'react'

import Overview from './components/overview'
import {Home} from './components/home'
import DealerList from './components/dealers/dealerList'
import InfoList from './components/info/infoList'
import EventTabsWrapper from './components/event/eventTabsWrapper'
import Login from './components/auth/login'
import {EventItemRoute}from './components/event/eventItemRoute'

export default(
  <Route path="/" component={Overview}>
    <IndexRoute component={Home}/>
    <Route path="login" components={Login} />
    <Route path="dealer" components={DealerList} />
    <Route path="info" components={InfoList} />
    <Route path="event" components={EventTabsWrapper} />
      <Route path="event/:id" component={EventItemRoute} />
  </Route>
)