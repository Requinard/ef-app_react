import React from 'react'

import AnnouncementListWrapper from './announcement/announcementListWrapper'
import EventList from './event/eventList'
import './home.css'

export const Home = props => (
  <div className="home-wrapper">
    <div className="home-announcements">
      <AnnouncementListWrapper />
    </div>
    <div className="home-event-category">
      <EventList />
    </div>
  </div>
)