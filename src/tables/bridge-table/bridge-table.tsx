import useBridgeTableColumns from './use-bridge-table-columns'
import { Bridge } from '@lifi/types'
import { Table } from '@lifi/components'

type Props = {
  data: Bridge[]
}

export default function BridgeTable({ data }: Props) {
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
