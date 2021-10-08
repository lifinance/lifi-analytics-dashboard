import { Table } from 'antd'
import { Individual } from '@lifi/types'
import { TableTitle } from '@lifi/components'
import { useCreateColumnFilter } from '@lifi/hooks'
import useLiquidityPerChainAndTokenColumns from './use-liquidity-per-chain-and-token-columns'

type Props = {
  data: Individual[]
}

export default function LiquidityPerChainAndToken({ data }: Props) {
  const bridgeFilter = useCreateColumnFilter(data, 'bridge')
  const chainFilter = useCreateColumnFilter(data, 'chain')
  const columns = useLiquidityPerChainAndTokenColumns({ bridgeFilter, chainFilter })
  return (
    <>
      <TableTitle title="Liquidity per Chain/Token" />
      <Table<Individual>
        dataSource={data}
        columns={columns}
        rowKey={({ bridge, token, chain }) => bridge + token + chain}
      />
    </>
  )
}
