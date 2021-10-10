import { Icon, IconNames } from '@lifi/components'

type Props = {
  name: IconNames
  renderIcon?: boolean
}

export default function CryptoTitle({ name, renderIcon = true }: Props) {
  return (
    <>
      {renderIcon && <Icon name={name} />}
      {name}
    </>
  )
}
