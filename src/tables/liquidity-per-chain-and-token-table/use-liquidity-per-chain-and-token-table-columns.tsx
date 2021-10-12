import { CryptoTitle, IconNames, Volume } from '@lifi/components'
import { Individual } from '@lifi/types'
import { ColumnsType } from 'antd/es/table'
import { ColumnFilterItem } from 'antd/es/table/interface'
import { useMemo } from 'react'

type Props = {
  chainFilter: ColumnFilterItem[]
  bridgeFilter: ColumnFilterItem[]
}

export default function useLiquidityPerChainAndTokenTableColumns({
  chainFilter,
  bridgeFilter,
}: Props) {
  return useMemo<ColumnsType<Individual>>(
    () => [
      {
        title: 'Chain',
        dataIndex: 'chain',
        filters: chainFilter,
        onFilter: (value, record) => record.chain.indexOf(value as string) === 0,
        render: (chain: IconNames) => <CryptoTitle name={chain} />,
      },
      {
        title: 'Token',
        dataIndex: 'token',
        sorter: (a, b) => a.token.localeCompare(b.token),
      },
      {
        title: 'Bridge',
        dataIndex: 'bridge',
        filters: bridgeFilter,
        onFilter: (value, record) => record.bridge.indexOf(value as string) === 0,
        render: (bridge: IconNames) => <CryptoTitle name={bridge} />,
      },
      {
        title: 'Liquidity',
        dataIndex: 'tvl',
        align: 'right',
        sorter: (a, b) => a.tvl - b.tvl,
        render: (tvl) => <Volume amount={tvl} />,
      },
    ],
    [chainFilter, bridgeFilter],
  )
}
