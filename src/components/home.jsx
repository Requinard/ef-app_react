import React from 'react'
import { GridList, GridTile } from 'material-ui'
import {hashHistory} from 'react-router'

export const Home = props => (
  <GridList cols={3}>
    <GridTile title="Events"/>
    <GridTile title="Dealers"
    onTouchTap={() => hashHistory.push('/dealer')}/>
    <GridTile title="Knowledge"
    onTouchTap={() => hashHistory.push('/info')}/>
  </GridList>
)