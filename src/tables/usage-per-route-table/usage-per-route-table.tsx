import { AssetMovement, AssetMovementFormatted } from '@lifi/types'
import useUsagePerRouteColumnsTable from './use-usage-per-route-table-columns'
import { useCreateColumnFilter } from '@lifi/hooks'
import { Table } from '@lifi/components'

type Props = {
  data: AssetMovement[]
}

export default function LiquidityPerChainAndToken({ data }: Props) {
  const formattedData = data.map(({ asset_movement, time_taken, ...props }) => {
    const [from, to] = asset_movement.split(' ->')
    return {
      ...props,
      from,
      to,
      timeTaken: time_taken,
    }
  }) as AssetMovementFormatted[]

  const fromFilter = useCreateColumnFilter(formattedData, 'from')
  const toFilter = useCreateColumnFilter(formattedData, 'to')

  const columns = useUsagePerRouteColumnsTable({ fromFilter, toFilter })
  return (
    <Table<AssetMovementFormatted>
      // @ts-ignore: figure out how to configure typings
      title="Usage per route (nxtp)"
      rowKey="id"
      dataSource={formattedData}
      columns={columns}
    />
  )
}
