import { useMemo } from 'react'
import { ColumnsType } from 'antd/es/table'
import { ColumnFilterItem } from 'antd/es/table/interface'
import { Individual } from '@lifi/types'
import { formatMoney } from '@lifi/utils'

type Props = {
  chainFilter: ColumnFilterItem[]
  bridgeFilter: ColumnFilterItem[]
}

export default function useLiquidityPerChainAndTokenColumns({ chainFilter, bridgeFilter }: Props) {
  return useMemo<ColumnsType<Individual>>(
    () => [
      {
        title: 'Chain',
        dataIndex: 'chain',
        filters: chainFilter,
        onFilter: (value, record) => record.chain.indexOf(value as string) === 0,
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
      },
      {
        title: 'Total Liquidity',
        dataIndex: 'tvl',
        sorter: (a, b) => a.tvl - b.tvl,
        render: formatMoney,
      },
    ],
    [chainFilter, bridgeFilter],
  )
}
