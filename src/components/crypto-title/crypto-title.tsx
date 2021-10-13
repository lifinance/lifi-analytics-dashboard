import { Icon, IconNames } from '@lifi/components'

import { Container } from './crypto-title-styled'

type Props = {
  name: IconNames
  renderIcon?: boolean
}

export function CryptoTitle({ name, renderIcon = true }: Props) {
  return (
    <Container>
      {renderIcon && <Icon name={name} />}
      {name}
    </Container>
  )
}
