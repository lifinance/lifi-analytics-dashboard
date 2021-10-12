import { Icon, IconNames } from '@lifi/components'
import { Container } from './crypto-title-components'

type Props = {
  name: IconNames
  renderIcon?: boolean
}

export default function CryptoTitle({ name, renderIcon = true }: Props) {
  return (
    <Container>
      {renderIcon && <Icon name={name} />}
      {name}
    </Container>
  )
}
