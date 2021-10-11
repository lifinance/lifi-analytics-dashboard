import { Individual } from '@lifi/types'
import { useCreateColumnFilter } from '@lifi/hooks'
import useLiquidityPerChainAndTokenTableColumns from './use-liquidity-per-chain-and-token-table-columns'
import { Table } from '@lifi/components'

type Props = {
  data: Individual[]
}

export default function LiquidityPerChainAndToken({ data }: Props) {
  const bridgeFilter = useCreateColumnFilter(data, 'bridge')
  const chainFilter = useCreateColumnFilter(data, 'chain')
  const columns = useLiquidityPerChainAndTokenTableColumns({ bridgeFilter, chainFilter })
  return (
    <Table
      // @ts-ignore: figure out how to configure typings
      title="Liquidity per Chain/Token"
      dataSource={data}
      columns={columns}
      rowKey={({ bridge, token, chain }) => bridge + token + chain}
    />
  )
}
