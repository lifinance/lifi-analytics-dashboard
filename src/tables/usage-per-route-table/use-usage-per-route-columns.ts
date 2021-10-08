import { useMemo } from 'react'
import { ColumnsType } from 'antd/es/table'
import { formatMoney } from '@lifi/utils'
import { AssetMovementFormatted } from '@lifi/types'

export default function useUsagePerRouteColumns() {
  return useMemo<ColumnsType<AssetMovementFormatted>>(
    () => [
      {
        title: 'From',
        dataIndex: 'from',
      },
      {
        title: 'To',
        dataIndex: 'to',
      },
      {
        title: 'Time Taken',
        dataIndex: 'timeTaken',
      },
      {
        title: 'txns',
        dataIndex: 'txns',
      },
      {
        title: 'volume',
        dataIndex: 'volume',
        render: ({ volume }) => formatMoney(volume),
      },
    ],
    [],
  )
}
