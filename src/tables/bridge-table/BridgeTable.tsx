import useBridgeColumns from './use-bridge-columns'
import { Table } from 'antd'
import { Bridge } from '@lifi/types'
import { TableTitle } from '@lifi/components'

type Props = {
  data: Bridge[]
}

export default function BridgeTable({ data }: Props) {
  const columns = useBridgeColumns()
  return (
    <>
      <TableTitle title="Bridge Analytics" />
      <Table<Bridge> dataSource={data} columns={columns} pagination={false} />
    </>
  )
}
