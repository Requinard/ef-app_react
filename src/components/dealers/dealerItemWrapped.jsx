import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchDealers } from '../../actions/dealer'
import { CircularProgress } from 'material-ui'
import { DealerItem } from './dealerItem'

class DealerItemWrapper extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      dealer: undefined
    }
  }

  componentDidMount () {
    this.props.fetchDealers()
      .then(() => this.setState({
        dealer: this.props.dealers.find(dealer => dealer.Id === this.props.dealerId)
      }))
  }

  render () {
    return (
      <div>
        {this.state.dealer === undefined ? <CircularProgress /> : <DealerItem dealer={this.state.dealer} expanded={true}/>}
      </div>
    )
  }
}

DealerItemWrapper.propTypes = {
  dealers: PropTypes.array,
  fetchDealers: PropTypes.func,
  dealerId: PropTypes.string.isRequired
}

function mapStateToProps (state, ownProps) {
  return {
    dealers: state.dealer.dealers,
    dealerId: ownProps.dealerId
  }
}

export default connect(mapStateToProps, {
  fetchDealers,
})(DealerItemWrapper)