import { useMedia } from 'react-use'
import { screenSize } from '@lifi/style'

export default function useIsMobile() {
  return useMedia(`only screen and (${screenSize.maxMobile})`)
}
