import { Table } from 'antd'
import { Individual } from '@lifi/types'
import { TableTitle } from '@lifi/components'
import useLiquidityPerChainAndTokenColumns from './use-liquidity-per-chain-and-token-columns'

type Props = {
  data: Individual[]
}

export default function LiquidityPerChainAndToken({ data }: Props) {
  const columns = useLiquidityPerChainAndTokenColumns()
  return (
    <>
      <TableTitle title="Liquidity per Chain/Token" />
      <Table<Individual> dataSource={data} columns={columns} />
    </>
  )
}
