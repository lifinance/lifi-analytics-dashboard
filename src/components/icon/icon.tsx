import { cryptoIcons } from './crypto-icons'
import { IconNames } from './types'

type Props = {
  name: IconNames
}

export default function Icon({ name }: Props) {
  const icon = cryptoIcons[name]
  return (
    <img style={{ width: '15px', height: 'auto', marginRight: '10px' }} alt={name} src={icon} />
  )
}