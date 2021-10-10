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
        title: 'Avg. Time Taken',
        dataIndex: 'timeTaken',
        align: 'right',
        sorter: (a, b) => a.timeTaken - b.timeTaken,
        render: (duration) => {
          const sec = Math.floor(duration % 60)
          const min = Math.floor(duration / 60)
          return min + ':' + (sec > 9 ? sec : '0' + sec) + ' min'
        }
      },
      {
        title: '# Transaction',
        dataIndex: 'txns',
        align: 'right',
        sorter: (a, b) => a.txns - b.txns,
      },
      {
        title: 'Volume',
        dataIndex: 'volume',
        align: 'right',
        sorter: (a, b) => a.volume - b.volume,
        render: (volume) => formatMoney(volume, { hideDecimal: true }),
      },
    ],
    [],
  )
}
