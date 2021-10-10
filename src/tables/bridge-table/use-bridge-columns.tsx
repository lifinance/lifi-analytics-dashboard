import { useMemo } from 'react'
import { ColumnsType } from 'antd/es/table'
import { Bridge } from '@lifi/types'
import { formatMoney } from '../../utils'
import { CryptoTitle, IconNames } from '@lifi/components'

export default function useBridgeColumns() {
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
        render: (tvl) => formatMoney(tvl, { hideDecimal: true }),
      },
    ],
    [],
  )
}
