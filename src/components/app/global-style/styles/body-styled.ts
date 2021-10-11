import { css } from 'styled-components'
import { defaultFontFamily } from '@lifi/style'

export const bodyStyled = css<{ bodyMargin?: string }>`
  body {
    ${defaultFontFamily};
    font-size: 1.6rem;
    margin: ${({ bodyMargin }: { bodyMargin?: string }) => bodyMargin || '0'};
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`
