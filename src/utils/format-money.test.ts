import { formatMoney } from '@lifi/utils'
import { cleanup } from '@testing-library/react'

describe('format-money', () => {
  afterEach(cleanup)

  describe('formatMoney', () => {
    test.each`
      price          | expected
      ${1.1}         | ${'$1'}
      ${1000}        | ${'$1,000'}
      ${10000}       | ${'$10,000'}
      ${100000}      | ${'$100,000'}
      ${10000000000} | ${'$10,000,000,000'}
    `('should format money to usd', ({ price, expected }) => {
      expect(formatMoney(price, { hideDecimal: true })).toBe(expected)
    })
  })

  describe('formatMoney Decimal', () => {
    test.each`
      money             | expected
      ${1.1}            | ${'$1.10'}
      ${1000.3353}      | ${'$1,000.34'}
      ${10000.899}      | ${'$10,000.90'}
      ${100000.89}      | ${'$100,000.89'}
      ${10000000000.89} | ${'$10,000,000,000.89'}
    `('should format decimal money to usd', ({ money, expected }) => {
      expect(formatMoney(money)).toBe(expected)
    })
  })
})
