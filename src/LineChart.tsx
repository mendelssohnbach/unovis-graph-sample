import React, { useCallback } from 'react'

import { VisXYContainer, VisLine, VisAxis } from '@unovis/react'

type DataRecord = {
  x: number
  y: number
}

const data: DataRecord[] = [
  { x: 0, y: 0 },
  { x: 1, y: 2 },
  { x: 2, y: 0.7 },
  { x: 3, y: 1.2 },
]

export const LineChart = (): JSX.Element => {
  return (
    <VisXYContainer data={data}>
      <VisLine<DataRecord>
        x={useCallback((d) => d.x, [])}
        y={useCallback((d) => d.y, [])}
      ></VisLine>
      <VisAxis type="x"></VisAxis>
      <VisAxis type="y"></VisAxis>
    </VisXYContainer>
  )
}
