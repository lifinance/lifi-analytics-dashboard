export function formatMoney(
  amount: number,
  options?: {
    hideDecimal?: boolean
  },
): string {
  return amount.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    ...(options?.hideDecimal && { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
  })
}
