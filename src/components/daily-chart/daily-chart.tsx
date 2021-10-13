import { useIsMobile, useIsTablet } from '@lifi/hooks'
import { DailyVolume } from '@lifi/types'
import { dateFormat } from '@lifi/utils'
import millify from 'millify'
import * as R from 'ramda'
import React from 'react'
import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

import { Title } from './daily-chart-styled'

type Props = {
  data: DailyVolume[]
}

export function DailyChart({ data }: Props) {
  const isMobile = useIsMobile()
  const isTablet = useIsTablet()
  const take = isMobile ? 7 : isTablet ? 14 : 21
  const chartHeight = isMobile ? 300 : isTablet ? 400 : 500
  const formattedData = R.takeLast(
    take,
    data.map(({ date, ...props }) => ({ ...props, date: dateFormat(new Date(date), 'dd/MM/yy') })),
  )

  const tickFormatter = (v: number) => '$' + millify(v)

  return (
    <>
      <Title>Volume/Transactions per Day (nxtp)</Title>
      <div style={{ height: chartHeight, display: 'flex' }}>
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={formattedData}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}>
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="date" scale="band" />

            <YAxis
              yAxisId="left"
              type="number"
              dataKey="volume"
              name="volume"
              stroke="#413ea0"
              tickFormatter={tickFormatter}
            />
            <YAxis
              yAxisId="right"
              type="number"
              dataKey="txns"
              name="txns"
              orientation="right"
              stroke="#ff7300"
              tickFormatter={(v) => millify(v)}
            />

            <Tooltip
              formatter={(value: number, name: string) => {
                if (name === 'volume') {
                  return tickFormatter(value)
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
