import { useMemo } from 'react'
import { ColumnsType } from 'antd/es/table'
import { Individual } from '@lifi/types'
import { formatMoney } from '../../utils'

export default function useLiquidityPerChainAndTokenColumns() {
  return useMemo<ColumnsType<Individual>>(
    () => [
      {
        title: 'Chain',
        dataIndex: 'chain',
        key: 'chain',
      },
      {
        title: 'Token',
        dataIndex: 'token',
        key: 'token',
      },
      {
        title: 'Bridge',
        dataIndex: 'bridge',
        key: 'bridge',
      },
      {
        title: 'Total Liquidity',
        dataIndex: 'tvl',
        key: 'tvl',
        sorter: (a, b) => a.tvl - b.tvl,
        render: formatMoney,
      },
    ],
    [],
  )
}
