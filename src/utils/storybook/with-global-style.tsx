import React from 'react'
import { DecoratorFn } from '@storybook/react'
import { GlobalStyle } from '@lifi/components/app/global-style'

export function withGlobalStyle(): DecoratorFn {
  return (storyFn) => (
    <React.Suspense fallback="loading...">
      <GlobalStyle bodyMargin="10px" />
      {storyFn()}
    </React.Suspense>
  )
}
