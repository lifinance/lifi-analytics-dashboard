import { createGlobalStyle } from 'styled-components'
import { bodyStyled } from './styles/body-styled'
import { resetStyled } from './styles/reset-styled'
import { dimensionsStyled } from './styles/dimensions-styled'

export const GlobalStyle = createGlobalStyle<{ bodyMargin?: string }>`

  ${resetStyled}

  ${bodyStyled};

  ${dimensionsStyled}
`
