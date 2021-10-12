import { useMemo } from 'react'
import { ColumnsType } from 'antd/es/table'
import { Bridge } from '@lifi/types'
import { CryptoTitle, IconNames, Volume } from '@lifi/components'

export default function useBridgeTableColumns() {
  return useMemo<ColumnsType<Bridge>>(
    () => [
      {
        title: 'Name',
        dataIndex: 'bridge',
        render: (bridge: IconNames) => <CryptoTitle name={bridge} />,
      },
      {
        title: 'Total Liquidity',
        dataIndex: 'tvl',
        align: 'right',
        render: (tvl) => <Volume amount={tvl} />,
      },
    ],
    [],
  )
}
