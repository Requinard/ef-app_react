import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchInfo } from '../../actions/info'
import { CircularProgress } from 'material-ui'
import {InfoItem} from './infoItem'

class InfoItemWrapped extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      info: undefined
    }
  }

  componentDidMount(){
    this.props.fetchInfo()
      .then(() => this.setState({info: this.props.infoItems.find(info => info.Id === this.props.infoId)}))
  }

  render(){
    return (
      <div>{this.state.info === undefined ? <CircularProgress />: <InfoItem info={this.state.info} expanded={true}/>}</div>
    )
  }
}

InfoItemWrapped.propTypes = {
  infoItems: PropTypes.array,
  fetchInfo: PropTypes.func,
  infoId: PropTypes.string.isRequired,
}

export function mapStateToProps (state, ownProps) {
  return {
    infoItems: state.info.info,
    infoId: ownProps.infoId
  }
}

export default connect(mapStateToProps, {
  fetchInfo
})(InfoItemWrapped)