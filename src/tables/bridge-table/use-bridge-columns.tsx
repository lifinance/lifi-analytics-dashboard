import { useMemo } from 'react'
import { ColumnsType } from 'antd/es/table'
import { Bridge } from '@lifi/types'
import { formatMoney } from '../../utils'
import icons from './icons'

export default function useBridgeColumns() {
  return useMemo<ColumnsType<Bridge>>(
    () => [
      {
        title: 'Name',
        dataIndex: 'bridge',
        render: (bridge) => {
          // @ts-ignore
          const icon = icons && icons[bridge]
          return (
            <>
              {icon && (
                <img
                  style={{ width: '15px', height: 'auto', marginRight: '10px' }}
                  alt={bridge}
                  src={icon}
                />
              )}
              {bridge}
            </>
          )
        },
      },
      {
        title: 'Total Liquidity',
        dataIndex: 'tvl',
        render: (tvl) => formatMoney(tvl),
      },
    ],
    [],
  )
}
