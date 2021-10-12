import { screenSize } from '@lifi/style'
import { useMedia } from 'react-use'

export default function useIsMobile() {
  return useMedia(`only screen and (${screenSize.maxMobile})`)
}
