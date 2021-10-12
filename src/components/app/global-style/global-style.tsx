import { createGlobalStyle } from 'styled-components'

import { bodyStyled } from './styles/body-styled'
import { dimensionsStyled } from './styles/dimensions-styled'
import { resetStyled } from './styles/reset-styled'

export const GlobalStyle = createGlobalStyle<{ bodyMargin?: string }>`

  ${resetStyled}

  ${bodyStyled};

  ${dimensionsStyled}
`
