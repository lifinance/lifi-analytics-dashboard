import {
  BridgeTable,
  DailyChart,
  LiquidityPerChainAndTokenTable,
  UsagePerRouteTable,
} from '@lifi/components'
import { useFetch } from '@lifi/hooks'
import { AssetMovement, Bridge, DailyVolume, Individual, Pair } from '@lifi/types'
import { cryptoNameFormatter } from '@lifi/utils'
import { Divider, Spin } from 'antd'
import * as R from 'ramda'
import React, { useMemo } from 'react'

import { Header, Layout, Logo, LogoBox, Main, Title } from './content-styled'
import logo from './logo.png'

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

const API_BASE_URI = process.env.SERVER_URL + '/api'

export function Content() {
  const { data: bridgesData } = useFetch<BridgesResponse>(API_BASE_URI + '/bridges_tvl')
  const { data: movementData } = useFetch<AssetMovementResponse>(API_BASE_URI + '/asset_movement')
  const { data: dailyVolume } = useFetch<DailyVolumeResponse>(API_BASE_URI + '/date_volume')

  const isLoaded = !!bridgesData && !!movementData && !!dailyVolume

  const formattedBridges = useMemo(() => {
    if (!bridgesData) return []
    return bridgesData.data.tvl_bridges.map((bridge) =>
      R.evolve({ bridge: cryptoNameFormatter })(bridge as object),
    ) as Bridge[]
  }, [bridgesData])

  const formattedIndividual = useMemo(() => {
    if (!bridgesData) return []
    return bridgesData.data.tvl_individual.map((individual) =>
      R.evolve({ chain: cryptoNameFormatter, bridge: cryptoNameFormatter })(individual as object),
    ) as Individual[]
  }, [bridgesData])

  return (
    <Layout className="layout">
      <Header>
        <LogoBox>
          <Logo alt="logo" src={logo} />
        </LogoBox>
        <Title>Li.Finance - Bridge Analytics</Title>
      </Header>
      <Main>
        {isLoaded ? (
          <>
            <BridgeTable data={formattedBridges} />
            <Divider />
            <LiquidityPerChainAndTokenTable data={formattedIndividual} />
            <Divider />
            <DailyChart data={dailyVolume.data} />
            <Divider />
            <UsagePerRouteTable data={movementData.data} />
          </>
        ) : (
          <Spin size="large" />
        )}
      </Main>
    </Layout>
  )
}
