import { useMemo } from 'react'
import { ColumnsType } from 'antd/es/table'
import { Bridge } from '@lifi/types'
import { formatMoney } from '../../utils'
import { formatBridge } from '@lifi/tables'

export default function useBridgeColumns() {
  return useMemo<ColumnsType<Bridge>>(
    () => [
      {
        title: 'Name',
        dataIndex: 'bridge',
        render: (bridge) => {
          return formatBridge(bridge)
        },
      },
      {
        title: 'Total Liquidity',
        dataIndex: 'tvl',
        render: (tvl) => formatMoney(tvl),
      },
    ],
    [],
  )
}
