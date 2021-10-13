import * as R from 'ramda'

import { cryptoIcons } from './crypto-icons'
import { IconNames } from './types'

type Props = {
  name: IconNames
}

export function Icon({ name }: Props) {
  const icon = cryptoIcons[R.toLower(name)]
  if (!icon) return null
  return (
    <img style={{ width: '15px', height: 'auto', marginRight: '10px' }} alt={name} src={icon} />
  )
}
