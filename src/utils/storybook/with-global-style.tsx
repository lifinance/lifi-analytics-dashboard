import { GlobalStyle } from '@lifi/components/app/global-style'
import { DecoratorFn } from '@storybook/react'
import React from 'react'

export function withGlobalStyle(): DecoratorFn {
  return (storyFn) => (
    <React.Suspense fallback="loading...">
      <GlobalStyle bodyMargin="10px" />
      {storyFn()}
    </React.Suspense>
  )
}
