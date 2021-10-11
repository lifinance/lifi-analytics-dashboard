import { normalize } from 'polished'
import { css } from 'styled-components'

export const resetStyled = css`
  ${normalize()};
  html {
    /* 1rem = 10px */
    font-size: 62.5%;
  }

  html,
  body,
  #root {
    height: 100%;
  }

  #root {
    display: flex;
    flex-direction: column;
  }

  * {
    box-sizing: border-box;
  }
`
