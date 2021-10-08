import { Table } from 'antd'
import { AssetMovement, AssetMovementFormatted } from '@lifi/types'
import { TableTitle } from '@lifi/components'
import useUsagePerRouteColumns from './use-usage-per-route-columns'

type Props = {
  data: AssetMovement[]
}

export default function LiquidityPerChainAndToken({ data }: Props) {
  const columns = useUsagePerRouteColumns()
  const formattedData = data.map(({ asset_movement, time_taken, ...props }) => {
    const [from, to] = asset_movement.split('>')
    return {
      ...props,
      from,
      to,
      timeTaken: time_taken,
    }
  }) as AssetMovementFormatted[]

  return (
    <>
      <TableTitle title="Usage per route (nxtp)" />
      <Table<AssetMovementFormatted> rowKey="id" dataSource={formattedData} columns={columns} />
    </>
  )
}
