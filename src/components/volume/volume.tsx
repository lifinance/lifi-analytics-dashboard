import { useIsTablet } from '@lifi/hooks'
import { formatMoney } from '@lifi/utils'
import millify from 'millify'

type Props = {
  amount: number
}

export default function Volume({ amount }: Props) {
  const isTablet = useIsTablet()
  const minAmountToMillify = 9999
  const formattedAmount =
    isTablet && amount > minAmountToMillify
      ? '$' + millify(amount)
      : formatMoney(amount, { hideDecimal: true })

  return <span>{formattedAmount}</span>
}
