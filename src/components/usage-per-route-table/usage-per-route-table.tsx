import { Table } from '@lifi/components'
import { useCreateColumnFilter } from '@lifi/hooks'
import { size } from '@lifi/style'
import { AssetMovement, AssetMovementFormatted } from '@lifi/types'

import { useUsagePerRouteTableColumns } from './use-usage-per-route-table-columns'

type Props = {
  data: AssetMovement[]
}

export function UsagePerRouteTable({ data }: Props) {
  const formattedData = data.map(({ asset_movement, time_taken, ...props }) => {
    const [from, to] = asset_movement.split(' ->')
    return {
      ...props,
      from,
      to: to.trim(),
      timeTaken: time_taken,
    }
  }) as AssetMovementFormatted[]

  const fromFilter = useCreateColumnFilter(formattedData, 'from')
  const toFilter = useCreateColumnFilter(formattedData, 'to')

  const columns = useUsagePerRouteTableColumns({ fromFilter, toFilter })
  return (
    <Table<AssetMovementFormatted>
      // @ts-ignore: figure out how to configure typings
      title="Usage per route (nxtp)"
      rowKey="id"
      scroll={{ x: size.maxTablet }}
      dataSource={formattedData}
      columns={columns}
    />
  )
}
