import { TableTitle } from '@lifi/components'
import { DailyVolume } from '@lifi/types'
import React from 'react'
import { Bar, CartesianGrid, ComposedChart, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

type Props = {
  data: DailyVolume[]
}

export default function DailyChart({ data }: Props) {
  const formattedData = data.map(({ date, volume, ...props }) => {
    return {
      ...props,
      volume: Math.floor(volume / 1000) / 1000,
      date: new Date(date).toLocaleDateString(),
    }
  }) as DailyVolume[]


  return (
    <>
      <TableTitle title="Volume/Transactions per Day (nxtp)" />
      <div style={{ height: 500, display: 'flex' }}>
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            width={500}
            height={400}
            data={formattedData}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="date" scale="band" />

            <YAxis
              yAxisId="left"
              type="number"
              dataKey="volume"
              name="volume"
              unit="m US$"
              stroke="#413ea0"
            />
            <YAxis
              yAxisId="right"
              type="number"
              dataKey="txns"
              name="txns"
              orientation="right"
              stroke="#ff7300"
            />

            <Tooltip
              formatter={(value: number, name: string) => {
                if (name === 'volume') {
                  return `${value}m US$`
                }
                return value.toString()
              }}
            />
            <Legend />
            <Bar dataKey="volume" barSize={20} fill="#413ea0" yAxisId="left" format="" />
            <Line type="monotone" dataKey="txns" stroke="#ff7300" yAxisId="right" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </>
  )
}
