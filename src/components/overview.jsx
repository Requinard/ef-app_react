import React from 'react'
import { AppBar } from 'material-ui'
import { hashHistory } from 'react-router'
const contentStyle = {
  display: 'flex',
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'center',
}

const contentInner = {
  width: '960px',
  flexDirection: 'column'
}

export default class Overview extends React.Component {
  render () {
    return (
      <div>
        <AppBar title="Eurofurence"
                onLeftIconButtonTouchTap={() => hashHistory.push('/')}/>
        <div style={contentStyle}>
          <div style={contentInner}>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}