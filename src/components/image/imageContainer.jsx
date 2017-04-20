import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchImages } from '../../actions/image'

const container = {
  width: '100%'
}

const inner = {
  flexDirection: 'row',
  justifyContent: 'center'
}

class ImageContainer extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      url: ''
    }
  }

  componentDidMount () {
    this.props.fetchImages()
      .then(() => {
        let image = this.props.images.find(image => image.Id === this.props.imageId)

        if (image !== undefined) {
          this.setState({
            url: image.Url.replace('{Endpoint}', API_URL)
          })
        } else {
          console.log('Failed  to find image!')
        }
      })
  }

  render () {
    return (
      <img src={this.state.url} style={inner}/>
    )
  }
}

ImageContainer.propTypes = {
  imageId: PropTypes.string,
  images: PropTypes.array,
  fetchImages: PropTypes.func
}

function mapStateToProps (state, ownProps) {
  return {
    images: state.image.images,
    imageId: ownProps.imageId
  }
}

export default connect(mapStateToProps, {
  fetchImages
})(ImageContainer)
