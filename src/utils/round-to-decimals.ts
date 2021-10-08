// Here's the general rule for rounding:
// If the number we are rounding is followed by 5, 6, 7, 8, or 9, round the number up. Example: 38 rounded to the nearest ten is 40.
// If the number we are rounding is followed by 0, 1, 2, 3, or 4, round the number down. Example: 33 rounded to the nearest ten is 30.

export function roundToDecimal(num: number): number {
  const decimal = num % 1
  if (decimal === 0) {
    return +(+num.toFixed(1)).toFixed(2)
  }
  const fixedDecimal = toFixedWithoutRound(num % 1) + 0.1
  let roundedValue = num
  if (decimal + 0.05 > fixedDecimal) {
    roundedValue += 0.05
  } else {
    roundedValue -= 0.05
  }
  return +(+roundedValue.toFixed(1)).toFixed(2)
}

function toFixedWithoutRound(num: number): number {
  // @ts-ignore
  // eslint-disable-next-line security/detect-unsafe-regex
  return +num.toString().match(/^-?\d+(?:.\d{0,1})?/)[0]
}
