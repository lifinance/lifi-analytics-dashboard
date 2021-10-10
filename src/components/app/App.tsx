import React from 'react'
import { BridgeTable, LiquidityPerChainAndTokenTable, UsagePerRouteTable } from '@lifi/tables'
import { useFetch } from '@lifi/hooks'
import { AssetMovement, Bridge, DailyVolume, Individual, Pair } from '@lifi/types'
import { Divider, Layout, Spin } from 'antd'
import { Content, Header } from 'antd/lib/layout/layout'
import logo from './logo.png'
import { DailyChart } from '@lifi/charts'

type BridgesResponse = {
  data: {
    tvl_bridges: Bridge[]
    tvl_individual: Individual[]
    tvl_pairs: Pair[]
  }
}

type AssetMovementResponse = {
  data: AssetMovement[]
}

type DailyVolumeResponse = {
  data: DailyVolume[]
}

const API_BASE_URI = 'https://analytics.li.finance/api'

export default function App() {
  const { data: bridgesData } = useFetch<BridgesResponse>(API_BASE_URI + '/bridges_tvl')
  const { data: movementData } = useFetch<AssetMovementResponse>(API_BASE_URI + '/asset_movement')
  const { data: dailyVolume } = useFetch<DailyVolumeResponse>(API_BASE_URI + '/date_volume')
  const isLoaded = !!bridgesData && !!movementData && !!dailyVolume
  return (
    <Layout className="layout">
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="logo" style={{ width: '40px' }}>
          <img alt="logo" style={{ width: '100%', height: 'auto' }} src={logo} />
        </div>
        <h1 style={{ margin: '0 0 0 15px', color: 'white' }}>Li.Finance - Bridge Analytics</h1>
      </Header>
      <Content style={{ padding: '20px 50px' }}>
        {isLoaded ? (
          <>
            <BridgeTable data={bridgesData.data.tvl_bridges} />
            <Divider />
            <LiquidityPerChainAndTokenTable data={bridgesData.data.tvl_individual} />
            <Divider />
            <DailyChart data={dailyVolume.data} />
            <Divider />
            <UsagePerRouteTable data={movementData.data} />
          </>
        ) : (
          <Spin size="large" />
        )}
      </Content>
    </Layout>
  )
}
