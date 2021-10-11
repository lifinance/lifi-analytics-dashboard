import { DecoratorFn } from '@storybook/react'
import { StyledComponentBase } from 'styled-components'

export function withContainer(Container: StyledComponentBase<any, any, any, any>): DecoratorFn {
  return (storyFn) => <Container>{storyFn()}</Container>
}
