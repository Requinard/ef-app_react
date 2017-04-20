import React from "react"
import {AppBar} from 'material-ui'

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
  render(){
    return(
      <div>
        <AppBar title="Eurofurence" />
        <div style={contentStyle}>
          <div style={contentInner}>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}