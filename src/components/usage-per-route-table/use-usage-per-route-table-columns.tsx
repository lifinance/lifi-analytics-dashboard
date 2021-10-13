import { CryptoTitle, Volume } from '@lifi/components'
import { AssetMovementFormatted } from '@lifi/types'
import { calculateTimeFromSeconds } from '@lifi/utils'
import { ColumnsType } from 'antd/es/table'
import { ColumnFilterItem } from 'antd/es/table/interface'
import { useMemo } from 'react'

export type Props = {
  fromFilter: ColumnFilterItem[]
  toFilter: ColumnFilterItem[]
}

export function useUsagePerRouteTableColumns({ fromFilter, toFilter }: Props) {
  return useMemo<ColumnsType<AssetMovementFormatted>>(
    () => [
      {
        title: 'From',
        dataIndex: 'from',
        filters: fromFilter,
        render: (val) => <CryptoTitle name={val} />,
        onFilter: (value, record) => record.from.indexOf(value as string) === 0,
      },
      {
        title: 'To',
        dataIndex: 'to',
        filters: toFilter,
        render: (val) => <CryptoTitle name={val} />,
        onFilter: (value, record) => record.to.indexOf(value as string) === 0,
      },
      {
        title: 'Avg. Time Taken',
        dataIndex: 'timeTaken',
        align: 'right',
        sorter: (a, b) => a.timeTaken - b.timeTaken,
        render: calculateTimeFromSeconds,
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
        render: (tvl) => <Volume amount={tvl} />,
      },
    ],
    [],
  )
}
