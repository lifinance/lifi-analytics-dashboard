import { Table } from '@lifi/components'
import { useCreateColumnFilter } from '@lifi/hooks'
import { size } from '@lifi/style'
import { Individual } from '@lifi/types'

import { useLiquidityPerChainAndTokenTableColumns } from './use-liquidity-per-chain-and-token-table-columns'

type Props = {
  data: Individual[]
}

export function LiquidityPerChainAndTokenTable({ data }: Props) {
  const bridgeFilter = useCreateColumnFilter(data, 'bridge')
  const chainFilter = useCreateColumnFilter(data, 'chain')
  const columns = useLiquidityPerChainAndTokenTableColumns({ bridgeFilter, chainFilter })
  return (
    <Table<Individual>
      // @ts-ignore: figure out how to configure typings
      title="Liquidity per Chain/Token"
      scroll={{ x: size.maxMobile }}
      dataSource={data}
      columns={columns}
      rowKey={({ bridge, token, chain }) => bridge + token + chain}
    />
  )
}
