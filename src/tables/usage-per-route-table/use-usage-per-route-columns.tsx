import { useMemo } from 'react'
import { ColumnsType } from 'antd/es/table'
import { formatMoney } from '@lifi/utils'
import { AssetMovementFormatted } from '@lifi/types'
import { ColumnFilterItem } from 'antd/es/table/interface'

export type Props = {
  fromFilter: ColumnFilterItem[]
  toFilter: ColumnFilterItem[]
}

export default function useUsagePerRouteColumns({ fromFilter, toFilter }: Props) {
  return useMemo<ColumnsType<AssetMovementFormatted>>(
    () => [
      {
        title: 'From',
        dataIndex: 'from',
        filters: fromFilter,
        onFilter: (value, record) => record.from.indexOf(value as string) === 0,
      },
      {
        title: 'To',
        dataIndex: 'to',
        filters: toFilter,
        onFilter: (value, record) => record.to.indexOf(value as string) === 0,
      },
      {
        title: 'Time Taken',
        dataIndex: 'timeTaken',
        sorter: (a, b) => a.timeTaken - b.timeTaken,
      },
      {
        title: 'On Chain Transaction',
        dataIndex: 'txns',
        sorter: (a, b) => a.txns - b.txns,
      },
      {
        title: 'Total Liqudity',
        dataIndex: 'volume',
        sorter: (a, b) => a.volume - b.volume,
        render: (volume) => formatMoney(volume),
      },
    ],
    [],
  )
}
