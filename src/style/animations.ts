import { css, keyframes } from 'styled-components'

const skeletonGlow = keyframes`
  from {
    background-position: -1000% center
  }

  to {
    background-position: 1000% center
  }
`

export const glowingFragment = css`
  background: linear-gradient(to right, #e8e8e8 0%, rgba(92, 112, 128, 0.2) 50%, #e8e8e8 100%);
  box-shadow: none;
  background-size: 1000px 1000px;
  background-clip: padding-box;
  cursor: default;
  color: transparent;
  animation: 12s 0s linear infinite alternate ${skeletonGlow};
  pointer-events: none;
  user-select: none;
  &::before,
  &::after,
  * {
    visibility: hidden;
  }
`
