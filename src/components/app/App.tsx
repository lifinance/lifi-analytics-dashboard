import React from 'react'
import { BridgeTable, LiquidityPerChainAndToken } from '@lifi/tables'
import { useFetch } from '@lifi/hooks'
import { Bridge, Individual, Pair } from '@lifi/types'
import { Divider, Layout, Spin } from 'antd'
import { Content, Header } from 'antd/lib/layout/layout'

type AnalyticsResponse = {
  data: {
    tvl_bridges: Bridge[]
    tvl_individual: Individual[]
    tvl_pairs: Pair[]
  }
}

const API_BASE_URI = 'https://analytics.li.finance/api'

export default function App() {
  const { data } = useFetch<AnalyticsResponse>(API_BASE_URI + '/bridges_tvl')
  return (
    <Layout className="layout">
      <Header>
        <h1 style={{ color: 'white' }}>FIJI-UI</h1>
      </Header>
      <Content style={{ padding: '20px 50px' }}>
        {!data ? (
          <Spin size="large" />
        ) : (
          <>
            <BridgeTable data={data.data.tvl_bridges} />
            <Divider />
            <LiquidityPerChainAndToken data={data.data.tvl_individual} />
          </>
        )}
      </Content>
    </Layout>
  )
}
