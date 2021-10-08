import { useMemo } from 'react'
import { ColumnsType } from 'antd/es/table'
import { ColumnFilterItem } from 'antd/es/table/interface'
import { Individual } from '@lifi/types'
import { formatMoney } from '@lifi/utils'
import icons from './icons'
import { formatBridge } from '@lifi/tables'

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
        render: (chain) => {
          // @ts-ignore
          const icon = icons && icons[chain]
          return (
            <>
              {icon && (
                <img
                  style={{ width: '15px', height: 'auto', marginRight: '10px' }}
                  alt={chain}
                  src={icon}
                />
              )}
              {chain}
            </>
          )
        },
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
        render: (bridge) => formatBridge(bridge)
      },
      {
        title: 'Liquidity',
        dataIndex: 'tvl',
        align: 'right',
        sorter: (a, b) => a.tvl - b.tvl,
        render: (tvl) => formatMoney(tvl, { hideDecimal: true }),
      },
    ],
    [chainFilter, bridgeFilter],
  )
}
