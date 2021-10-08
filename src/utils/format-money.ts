import { insertMorpheme } from '@lifi/utils/insert-morpheme'
import { roundToDecimal } from '@lifi/utils/round-to-decimals'

export function formatMoney(
  amount: number,
  options?: {
    hideDecimal?: boolean
    prefix?: boolean
    locale?: string
  },
): string {
  const { locale, hideDecimal, prefix } = options || {}

  const params = {
    style: 'currency',
    currency: 'USD',
    ...(hideDecimal && { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
  }

  const usedLocale = locale || window.navigator.language

  const value = hideDecimal ? amount : roundToDecimal(amount)

  const formattedMoney = new Intl.NumberFormat(usedLocale, params).format(value)

  return insertMorpheme(formattedMoney, 'USD', prefix ? 'prefix' : undefined)
}
