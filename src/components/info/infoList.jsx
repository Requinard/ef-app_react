import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchInfo, fetchInfoGroups } from '../../actions/info'
import { Subheader } from 'material-ui'
import { InfoItem } from './infoItem'

class InfoList extends React.Component {
  componentDidMount () {
    this.props.fetchInfoGroups()
      .then(this.props.fetchInfo())
  }

  render () {
    return (
      <div>
        {this.props.infoGroups.sort((a, b) => a.Position > b.Position)
          .map((infoGroup, groupKey) =>
            <div key={groupKey}>
              <h4>{infoGroup.Name}</h4>
              <Subheader>{infoGroup.Description}</Subheader>
              {this.props.info.filter(info => info.InfoGroupId === infoGroup.Id)
                .map((info, infoKey) => <InfoItem info={info} key={infoKey}/>)}
            </div>
          )}
      </div>
    )
  }
}

InfoList.propTypes = {
  info: PropTypes.arrayOf(PropTypes.shape({
    InfoGroupId: PropTypes.string
  })),
  infoGroups: PropTypes.arrayOf(PropTypes.shape({
    Id: PropTypes.string,
    Position: PropTypes.number,
    Name: PropTypes.string,
    Description: PropTypes.string
  })),
  fetchInfo: PropTypes.func,
  fetchInfoGroups: PropTypes.func
}

function mapStateToProps (state) {
  return {
    info: state.info.info,
    infoGroups: state.info.infoGroups
  }
}

export default connect(mapStateToProps, {
  fetchInfo,
  fetchInfoGroups
})(InfoList)