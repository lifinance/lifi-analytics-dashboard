import { withContainer } from '@lifi/utils'
import styled from 'styled-components'

import Volume from './volume'

export default {
  title: 'LIFI/UI/Volume',
  decorators: [
    withContainer(styled.div`
      background-color: #fff;
      padding: 10px;
      display: flex;
      flex-direction: column;
    `),
  ],
}

export const Primary = () => (
  <>
    <Volume amount={1} />
    <Volume amount={1.51023} />
    <Volume amount={1000} />
    <Volume amount={1000.51231} />
    <Volume amount={1000000} />
    <Volume amount={10000000000} />
    <Volume amount={100000000000} />
  </>
)
