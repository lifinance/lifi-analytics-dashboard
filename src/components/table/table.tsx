import { Table as AntdTable, TableProps } from 'antd'
import { Title } from './table-components'

// TODO: fix issue with title typing
type Props<T> = TableProps<T> & {
  title: string
}

export default function Table<T extends object>({ title, ...props }: Props<T>) {
  return (
    <>
      <Title>{title}</Title>
      <AntdTable<T> {...props} />
    </>
  )
}
