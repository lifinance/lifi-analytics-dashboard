import { css } from 'styled-components'

export const DividerAfter = css`
  &:after {
    content: '';
    display: flex;
    height: 1px;
    width: 100%;
    background-color: #bdc3d6;
    opacity: 0.5;
    margin-top: 15px;
  }
`

export const DotAfter = css`
  &:after {
    content: '.';
    position: relative;
    display: inline-block;
    bottom: 4px;
    border-radius: 50%;
    color: #bdc3d6;
    opacity: 0.6;
    margin: 0 7px;
    font-weight: bold;
  }
`
