import { withContainer } from '@lifi/utils'
import styled from 'styled-components'

import CryptoTitle from './crypto-title'

export default {
  title: 'LIFI/UI/Button',
  decorators: [
    withContainer(styled.div`
      background-color: #fff;
      padding: 10px;
      display: block;
    `),
  ],
}

export const Primary = () => <CryptoTitle name="anyswap" />
export const PrimaryNoIcon = () => <CryptoTitle name="anyswap" renderIcon={false} />
