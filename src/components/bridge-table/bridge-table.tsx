import { Table } from '@lifi/components'
import { Bridge } from '@lifi/types'

import { useBridgeTableColumns } from './use-bridge-table-columns'

type Props = {
  data: Bridge[]
}

export function BridgeTable({ data }: Props) {
  const columns = useBridgeTableColumns()
  return (
    <Table<Bridge>
      // @ts-ignore: figure out how to configure typings
      title="Bridge Analytics"
      dataSource={data}
      columns={columns}
      pagination={false}
      rowKey="bridge"
    />
  )
}
