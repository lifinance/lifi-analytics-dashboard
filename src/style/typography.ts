import { css } from 'styled-components'
import { screenSize } from './screen-sizes'

export const title1 = css`
  font-weight: 700;
  font-size: 2rem;
  letter-spacing: -0.5px;

  @media (${screenSize.maxMobile}) {
    font-size: 1.8rem;
  }
`

export const title2 = css`
  font-weight: 500;
  font-size: 1.8rem;
  @media (${screenSize.maxMobile}) {
    font-size: 1.6rem;
  }
`
