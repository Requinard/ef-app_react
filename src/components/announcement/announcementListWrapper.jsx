import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchAnnouncements } from '../../actions/announcements'
import { CircularProgress } from 'material-ui'
import { AnnouncementList } from './announcementList'

class AnnouncementListWrapper extends React.Component{
  componentDidMount(){
    this.props.fetchAnnouncements()
  }

  render(){
    return (
      <div>
        {this.props.isFetching ? <CircularProgress /> : <AnnouncementList announcements={this.props.announcements}/> }
      </div>
    )
  }
}

AnnouncementListWrapper.propTypes = {
  announcements: PropTypes.array,
  isFetching: PropTypes.bool,
  fetchAnnouncements: PropTypes.func
}

function mapStateToProps (state) {
  return {
    announcements: state.announcement.announcements,
    isFetching: state.announcement.isFetching
  }
}

export default connect(mapStateToProps, {
  fetchAnnouncements
})(AnnouncementListWrapper)