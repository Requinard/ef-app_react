import React from 'react'
import { fetchDealers } from '../../actions/dealer'
import { connect } from 'react-redux'
import { DealerItem } from './dealerItem'
import { Subheader } from 'material-ui'

class DealerList extends React.Component {
  componentDidMount () {
    this.props.fetchDealers()
  }

  render () {
    return (
      <div>
        <Subheader>Dealers</Subheader>
        {this.props.dealers.sort((a, b) => a.DisplayName > b.DisplayName)
          .map((dealer, key) => <DealerItem dealer={dealer} key={key}/>)}
      </div>
    )
  }
}

DealerList.propTypes = {
  dealers: React.PropTypes.array,
  images: React.PropTypes.array,
  fetchDealers: React.PropTypes.func
}

function mapStateToProps (state) {
  return {
    dealers: state.dealer.dealers,
    images: state.image.images
  }
}

export default connect(mapStateToProps, {
  fetchDealers
})(DealerList)