import { CryptoTitle, IconNames, Volume } from '@lifi/components'
import { Bridge } from '@lifi/types'
import { ColumnsType } from 'antd/es/table'
import { useMemo } from 'react'

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
