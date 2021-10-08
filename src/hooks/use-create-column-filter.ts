import * as R from 'ramda'
import { useMemo } from 'react'
import { ColumnFilterItem } from 'antd/es/table/interface'

export default function useCreateColumnFilter(data: unknown[], key: string): ColumnFilterItem[] {
  return useMemo(
    () =>
      R.pipe(
        R.map(R.prop(key)),
        R.uniq,
        R.map((v) => ({ text: v, value: v })),
      )(data as readonly Record<string, unknown>[]) as ColumnFilterItem[],
    [data, key],
  )
}
