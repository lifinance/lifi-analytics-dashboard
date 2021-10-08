export type CurrencyMorpheme = 'prefix' | 'postfix'

export function insertMorpheme(
  formattedMoney: string,
  currency: string,
  morpheme?: CurrencyMorpheme,
): string {
  if (!morpheme) return formattedMoney

  if (formattedMoney.indexOf(currency) > -1) {
    return formattedMoney
  }

  switch (morpheme) {
    case 'postfix':
      return `${formattedMoney} ${currency}`
    case 'prefix':
      return `${currency} ${formattedMoney}`
    default:
      return formattedMoney
  }
}
