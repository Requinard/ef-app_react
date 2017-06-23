import React from 'react'
import Gauge from 'react-svg-gauge'

const now = Date.now()
const nextConDay = 1502748000000
const millisToNextDay = nextConDay - now
const daysToNextConDay = Math.round(millisToNextDay / 60000 / 60 / 24)

export const CountdownGauge = props => (
    <Gauge value={daysToNextConDay}
           max={365}
           label="Days until EF23"
    />
)