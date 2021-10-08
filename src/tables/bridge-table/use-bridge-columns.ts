import { useMemo } from 'react'
import { ColumnsType } from 'antd/es/table'
import { Bridge } from '@lifi/types'
import { formatMoney } from '../../utils'

export default function useBridgeColumns() {
  return useMemo<ColumnsType<Bridge>>(
    () => [
      {
        title: 'Name',
        dataIndex: 'bridge',
      },
      {
        title: 'Total Liquidity',
        dataIndex: 'tvl',
        render: formatMoney,
      },
    ],
    [],
  )
}
